import pickle
import pandas as pd
from flask import Flask, request, render_template, jsonify



app = Flask(__name__)

# load the models
model = pickle.load(open('models/squat_1_2.pkl', 'rb'))

# root url
@app.route('/', methods=['GET'])
def get_data():
    data = {
        'message': 'The app is running'
    }

    return jsonify(data)


# define route for predictions
@app.route("/predictSq", methods=["POST"])
def predictSq():

    try:

        data = request.get_json()
        

        df = pd.DataFrame(data)
        prediction = model.predict(df)

        return jsonify({"prediction": list(prediction)})
    
    except Exception as e:
        return jsonify({'error': str(e)})


if __name__ == '__main__':
    app.run(debug=True, port=5000)