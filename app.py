import pickle
import pandas as pd
import numpy as np
import sys
import base64
from flask_cors import CORS
from flask import Flask, request, render_template, jsonify
from io import BytesIO
from matplotlib.figure import Figure

from backend import liftformatter
from backend import powerliftpredictor


lift_format = liftformatter.LiftFormatter()
predictor = powerliftpredictor.PowerliftPredictor(path_to_plot='client/public/output2.png', path_to_dataset='backend/data/openipf-2023-05-06-da06eba9.csv', use_cols=['Name', 'Sex', 'Event', 'Equipment','Division', 'Age', 'BodyweightKg', 'Squat1Kg','Squat2Kg','Squat3Kg', 'Best3SquatKg',
         'Bench1Kg','Bench2Kg','Bench3Kg', 'Best3BenchKg', 'Deadlift1Kg','Deadlift2Kg','Deadlift3Kg',
         'Best3DeadliftKg', 'TotalKg', 'Place', 'Dots', 'Wilks', 'Glossbrenner',
       'Goodlift', 'Tested', 'Date', 'WeightClassKg'])

predictor.formatDf()
predictor.loadModels(squatmodel='backend/models/squat_2_3.pkl', 
                     benchmodel='backend/models/bench_2_3.pkl',
                     deadliftmodel='backend/models/deadlift_2_3.pkl',
                     nxtsq='backend/models/nextSquat.pkl',
                     nxtbp='backend/models/nextBench.pkl',
                     nxtdl='backend/models/nextDeadlift.pkl')

app = Flask(__name__)

# do not sort the returned json object
app.json.sort_keys = False

# root url
@app.route('/', methods=['GET'])
def get_data():
    data = {
        'message': 'The app is running'
    }

    return jsonify(data)



def makePrediction(data):

    # lifters weightclass
    weightclass = data['Weightclass']
    

    # is the incoming data in kilograms or lbs
    weightmetric = data['Weightmetric']

    squats = lift_format.toFloat(lift1=data['Squat 1'], lift2=data['Squat 2'])
    bench = lift_format.toFloat(lift1=data['Bench press 1'], lift2=data['Bench press 2'])
    deadlift = lift_format.toFloat(lift1=data['Deadlift 1'], lift2=data['Deadlift 2'])
    
    
    
    
    
    # format lift data
    # data is now always in kilos
    formatted_data = lift_format.formatLifts(squats=squats, bench=bench, deadlift=deadlift, weightmetric=weightmetric)

    

    # get the third and final attempt or the next attempt.
    if formatted_data['sq'][0]  < 25:
        sq3 = predictor.predict(final=False, lifts=formatted_data['sq'], lift1Col='Squat1Kg', lift2Col='Squat2Kg', modelName='sq')
    else:
        
        sq3 = predictor.predict(final=True, lifts=formatted_data['sq'], lift1Col='Squat1Kg', lift2Col='Squat2Kg', modelName='sq')

    
    if formatted_data['bp'][0]  < 25:
        bp3 = predictor.predict(final=False, lifts=formatted_data['bp'], lift1Col='Bench1Kg', lift2Col='Bench2Kg', modelName='bp')
    else:
        
        bp3 = predictor.predict(final=True, lifts=formatted_data['bp'], lift1Col='Bench1Kg', lift2Col='Bench2Kg', modelName='bp')
    
    if formatted_data['dl'][0]  < 25:
        dl3 = predictor.predict(final=False, lifts=formatted_data['dl'], lift1Col='Deadlift1Kg', lift2Col='Deadlift2Kg', modelName='dl')
    else:        
        dl3 = predictor.predict(final=True, lifts=formatted_data['dl'], lift1Col='Deadlift1Kg', lift2Col='Deadlift2Kg', modelName='dl')

    if formatted_data['dl'][1] < 25 and formatted_data['dl'][0] < 25:
        dl3 = formatted_data['dl'][1]
    if formatted_data['sq'][1] < 25 and formatted_data['sq'][0] < 25:
        sq3 = formatted_data['sq'][1]
    
    if formatted_data['bp'][1] < 25 and formatted_data['bp'][0] < 25:
        bp3 = formatted_data['bp'][1]
          
    # convert original attempts back to pounds if they were in pounds    
    sq, bp, dl = lift_format.restoreLifts(squats=formatted_data['sq'], bench=formatted_data['bp'], deadlifts=formatted_data['dl'], weightmetric=weightmetric)
           
    sq3, bp3, dl3 = lift_format.orderLifts(sq3, bp3, dl3, weightmetric=weightmetric)
       
    total = sq3 + bp3 + dl3
        
      
    result = {
            'Squat': [
                {'val':sq[0], 'id': 0},
                {'val':sq[1], 'id': 1},
                {'val':sq3, 'id': 2},
            ],
            'Bench Press': [
                {'val':bp[0], 'id': 0},
                {'val':bp[1], 'id': 1},
                {'val':bp3, 'id': 2},
                
            ],
            'Deadlift': [
                {'val':dl[0], 'id': 0},
                {'val':dl[1], 'id': 1},
                {'val':dl3, 'id': 2},

            ],
            "madePrediction": True,
            'Weightclass': weightclass
           
        }


    return (result, total)



# define prediction access route
@app.route('/predict', methods=['POST'])
def predict():

    try:

        data = request.get_json()

        predictions, total = makePrediction(data=data)

        # set the weightclass of the lifter for plotting
        predictor.setWeightClass(weight=data['Weightclass'])

        # make the plot showing the bin in which the total falls
        img = predictor.makeHist2(total=total)
        
        
        

        return jsonify({'prediction': predictions, 'img': img})
    
    except Exception as e:
        print(e)
        return jsonify({'error': str(e)})



if __name__ == '__main__':
    app.run(debug=True, port=5000)