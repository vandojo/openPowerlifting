from sklearn.ensemble  import RandomForestRegressor

# Function to train a model
def randomForestTrainer(x, y, params=None):

    if params == None:
        model_regressor = RandomForestRegressor()
        
        return model_regressor.fit(x, y)
    
    else:
        model_regressor = RandomForestRegressor(bootstrap=params['bootstrap'], max_depth=params['max_depth'],
                                                 max_features=params['max_features'], min_samples_leaf=params['min_samples_leaf'], 
                                                 min_samples_split=params['min_samples_split'], n_estimators=params['n_estimators'])
        
        return model_regressor.fit(x, y)