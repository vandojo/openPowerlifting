import pickle
import pandas as pd
import numpy as np
from flask_cors import CORS
from flask import Flask, request, render_template, jsonify



app = Flask(__name__)

# load the models
thirdSQ = pickle.load(open('models/squat_2_3.pkl', 'rb'))
thirdBP = pickle.load(open('models/bench_2_3.pkl', 'rb'))
thirdDL = pickle.load(open('models/deadlift_2_3.pkl', 'rb'))

# root url
@app.route('/', methods=['GET'])
def get_data():
    data = {
        'message': 'The app is running'
    }

    return jsonify(data)


# test route
@app.route('/test', methods=["POST"])
def test():
    print(request.json['Squat'])

    return jsonify({"Prediction": [1,2,3]})


# define route for predictions
@app.route("/predictSq", methods=["POST"])
def predictSq():

    try:

        data = request.get_json()
        
        

        sq_df = pd.DataFrame({'Squat1Kg':[175], 'Squat2Kg': [data['Squat']]})
        bp_df = pd.DataFrame({'Bench1Kg':[110], 'Bench2Kg': [data['Bench Press']]})
        dl_df = pd.DataFrame({'Deadlift1Kg':[200], 'Deadlift2Kg': [data['Deadlift']]})
        
        sq1 = int(data['Squat'])
        bp1 = int(data['Bench Press'])
        dl1 = int(data['Deadlift'])
        sq3 = thirdSQ.predict(sq_df)
        bp3 = thirdBP.predict(bp_df)
        dl3 = thirdDL.predict(dl_df)
        
        prediction = np.concatenate((sq3,bp3,dl3), axis=None)

        return jsonify({"Prediction": {"Squat":[175, sq1, prediction[0]],'Bench Press':[110, bp1, prediction[1]], 'Deadlift': [200, dl1, prediction[2]]}})
    
    except Exception as e:
        return jsonify({'error': str(e)})
    
# route for predicting next attemtps
@app.route("/attempt", methods=['GET'])
def attempt():
    data = request.get_json()


if __name__ == '__main__':
    app.run(debug=True, port=5000)