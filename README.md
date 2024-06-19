# A small data analysis project of the Open Powerlifting dataset

In this project I will see if I can make a model that can satisfactorily predict someone's next attempt
based of their previous attempt.

data attribution:

This page uses data from the OpenPowerlifting project, https://www.openpowerlifting.org.
You may download a copy of the data at https://data.openpowerlifting.org.

## Tech stack

- [Flask](https://flask.palletsprojects.com/en/3.0.x/) - Framework
- [Tailwind](https://tailwindcss.com/) - CSS

- [React](https://react.dev/) - UI Components/JavaScript

## Getting Started

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

### 2. Start the python server

On Linux:

```shell
python3 app.py
```

On Windows:

```shell
python app.py
```

### 3. Start the dev server

```shell
cd client
npm start
```

### 4. Open the app in the browser

vist [http://localhost:5000](http://localhost:5000) in your browser

### 5. Have fun!

The workings of the website are quite self explanatory. However, here are some suggestions of what you can do:

- Enter all your preffered 1st and 2nd attempt.
- Switch from kilos, already selected, to pounds.
- Change weightclass.
- Just enter one attempt.
- Just enter one lift.

By submitting the form the server passes the data to the machine learning model. This uses a decision tree to predict your optimal next attempt. The server also creates a plot showing how you would stack up against your peers if you achieved this lift. The app.py file currently has the pickle files commected out. These are not in the repo.
