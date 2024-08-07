# OpenPowerlifting: a machine learning model that predicts your attempts

In this project I created a web application that provides the attempt selection for someone competing in a powerlifting meet. Based on the user's input, a machine learning model will predict what a sensible next attempt is. The machine learning model is a decision tree. It will also create a plot showing the standing of the lifter among all other lifters in their weightclass based on their projected total. The front end is made with React and Tailwind, the backend is made with Python.

## Demo

![](https://github.com/vandojo/openPowerlifting/blob/main/backend/openpowerliftExample.gif)

## Contents

- [Features](#features)
- [Data attribution](#data-attribution)
- [Dependencies](#dependencies)
- [Tech stack](#tech-stack)
- [How to run the project](#how-to-run-the-project)

## Features

- **Predicts your next attempt**
- **Predicts final attempts**
- **Automatically converts pounds to kilos**
- **Generates a plot showing your standing**

## Data attribution:

This page uses data from the OpenPowerlifting project, https://www.openpowerlifting.org.
You may download a copy of the data at https://data.openpowerlifting.org.

## Tech stack

- [Flask](https://flask.palletsprojects.com/en/3.0.x/) - Framework
- [Tailwind](https://tailwindcss.com/) - CSS

- [React](https://react.dev/) - UI Components/JavaScript

## How to run the project

### Dependencies

This is what you need to run OpenPowerlifting

- [React](https://react.dev/)
- [Pandas](https://pandas.pydata.org/)
- [NumPy](https://numpy.org/)
- [Flask](https://flask.palletsprojects.com/en/3.0.x/)
- [Matplotlib](https://matplotlib.org/)

Once you have all this installed, move on to the next steps.

### 1. Clone the repository:

```shell
git clone https://github.com/vandojo
cd OpenPowerlifting
```

### 2. Unzip the model files

The machine learning models were to big to be uploaded to github. They are zipped in the directory: backend/models/compressed.
To be able to run this project, unzip the three zipfiles and store the models in: backend/models. This is where the app.py file will look for them. Once this is done continue.

### 3. Start the python server

On Linux:

```shell
python3 app.py
```

On Windows:

```shell
python app.py
```

### 4. Start the dev server

```shell
cd client
npm start
```

### 5. Open the app in the browser

vist [http://localhost:5000](http://localhost:5000) in your browser

### 6. Have fun!

The workings of the website are quite self explanatory. However, here are some suggestions of what you can do:

- Enter all your preffered 1st and 2nd attempt.
- Switch from kilos, already selected, to pounds.
- Change weightclass.
- Just enter one attempt.
- Just enter one lift.

By submitting the form the server passes the data to the machine learning model. This uses a decision tree to predict your optimal next attempt. The server also creates a plot showing how you would stack up against your peers if you achieved this lift.
