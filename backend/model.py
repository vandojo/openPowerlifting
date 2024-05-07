import pandas as pd
import numpy as np
import pickle

from sklearn.ensemble  import RandomForestRegressor
from sklearn.preprocessing import LabelEncoder
from randomForestModel import randomForestTrainer


def main(file_name):

    # columns to load
    cols = ['Sex', 'Event', 'Equipment', 'Squat1Kg','Squat2Kg','Squat3Kg',
         'Bench1Kg','Bench2Kg','Bench3Kg', 'Deadlift1Kg','Deadlift2Kg','Deadlift3Kg',
         ]

    # Load the initial dataset
    df = pd.read_csv('data/openipf-2023-05-06-da06eba9.csv', usecols=cols)

    # Keep raw lifters competing in a full power meet
    df = df.loc[(df.Event == 'SBD') & (df.Equipment == 'Raw')]
    
    # convert Sex column to a category
    encoder = LabelEncoder()
    df['Sex']= encoder.fit_transform(df['Sex'])

    # Remove event and Equipment columns
    df.drop(columns=['Event', 'Equipment'], inplace=True)

    # drop na rows
    df.dropna(inplace=True)

    # These parameters are based on an extensive random search followed by a grid search
    # for this model
    params = {
        'bootstrap': True,
        'max_depth': 60,
        'max_features': 'sqrt',
        'min_samples_leaf': 1,
        'min_samples_split': 6,
        'n_estimators': 700
        }
    
    # Instantiate a model
    model = randomForestTrainer(df[['Squat1Kg', 'Sex']], df['Squat2Kg'], params=params)

    # save the model to a pickle file
    pickle.dump(model, open(file_name, 'wb'))


if __name__ == '__main__':
    # enter a filename
    main()
