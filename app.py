import pickle
import pandas as pd
from flask import Flask, request, render_template, jsonify


app = Flask(__name__)

# load the models
model = pickle.load(open('models/squat_1_2.pkl', 'rb'))

# define route for predictions
@app.route("/predictSq", methods=["POST"])
def predictSq():
    json_ = request.json

    df = pd.DataFrame(json_)

    prediction = model.predict(df)

    return jsonify({"prediction": list(prediction)})


if __name__ == '__main__':
    app.run(debug=True)