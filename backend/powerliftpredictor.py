import pickle
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

class PowerliftPredictor:

    def __init__(self) -> None:
        self.df = pd.read_csv('./data/openipf-2023-05-06-da06eba9.csv', usecols=['Name', 'Sex', 'Event', 'Equipment','Division', 'Age', 'BodyweightKg', 'Squat1Kg','Squat2Kg','Squat3Kg', 'Best3SquatKg',
         'Bench1Kg','Bench2Kg','Bench3Kg', 'Best3BenchKg', 'Deadlift1Kg','Deadlift2Kg','Deadlift3Kg',
         'Best3DeadliftKg', 'TotalKg', 'Place', 'Dots', 'Wilks', 'Glossbrenner',
       'Goodlift', 'Tested', 'Date', 'WeightClassKg'])
        
        self.path_to_plot = 'output2.png'
    
    def formatDf(self):

        # Keep raw lifters competing in a full power meet
        self.df = self.df.loc[(self.df.Event == 'SBD') & (self.df.Equipment == 'Raw')]

        # Remove event and Equipment columns
        self.df.drop(columns=['Event', 'Equipment'], inplace=True)

        return
        


    def loadModels(self, squatmodel, benchmodel, deadliftmodel):

        # load the models
        self.squatmodel = pickle.load(open(squatmodel, 'rb'))
        self.benchmodel = pickle.load(open(benchmodel, 'rb'))
        self.deadliftmodel = pickle.load(open(deadliftmodel, 'rb'))

        return
    
    def finalAttempt(self, lift1:float, lift1Col:str, lift2Col:str, modelName:str, lift2=0,) -> float:

        lift_df = pd.DataFrame({lift1Col:[lift1], lift2Col: [lift2]})

        if modelName == 'sq':        
            finalLift = self.squatmodel.predict(lift_df)
            return finalLift[0]
        elif modelName == 'bp':
            return self.benchmodel.predict(lift_df)[0]
        else:
            return self.deadliftmodel.predict(lift_df)[0]
        

    
    def predict(self, final:bool, squats:list, bench:list, deadlift:list) -> tuple:

        if final:

            sq3 = self.finalAttempt(lift1=squats[0], lift1Col='Squat1Kg', lift2=squats[1], lift2Col='Squat2Kg', modelName='sq')
            bp3 = self.finalAttempt(lift1=bench[0], lift1Col='Bench1Kg', lift2=bench[1], lift2Col='Bench2Kg', modelName='bp')
            dl3 = self.finalAttempt(lift1=deadlift[0], lift1Col='Deadlift1Kg', lift2=deadlift[1], lift2Col='Deadlift2Kg', modelName='dl')

            return (sq3, bp3, dl3)
        else:
            # call method if it is not the final attempt
            # need to make this method
            pass
        
    def squatPredict(self, sq1:float, sq2=0)-> float:

        sq_df = pd.DataFrame({'Squat1Kg':[sq1], 'Squat2Kg': [sq2]})
        sq3 = self.squatmodel.predict(sq_df)


        return sq3
    

    def setWeightClass(self, weight:int) -> None:

        self.weightclass = weight

        return
    
    def getWeightClass(self) -> int:

        try: 
            return self.weightclass
        except:
            return None
    
    def makeHist(self, total):

        weightclass = self.getWeightClass()
        #path_to_file = './client/output.png'

        if weightclass is None:

            return 'Something went wrong'
        
        else:
            

            
            data = np.array(self.df.loc[(self.df.WeightClassKg == weightclass)]['TotalKg'])



            plot_background = '#09090b'
            lifter_color = '#33ea93'
            all_lifters_color = '#9333ea'

            txt = 'Distribution of achieved totals in the {0}kg weightclass'.format(weightclass)
            label_txt ='All {0}kg powerlifters'.format(weightclass)
            lifter_txt = 'Your total - {0}'.format(total)



            fig, ax = plt.subplots(nrows=1, ncols=1)

            plt.style.use('dark_background')
            plt.hist(data, bins=100,  color=all_lifters_color, alpha=1, label=label_txt)


            ax.set_facecolor(color=plot_background)


            fig.patch.set_facecolor(plot_background)

            plt.axvline(x=total, color=lifter_color, label=lifter_txt)

            plt.gca().set(title=txt, ylabel='Frequency', xlabel='Total')

            plt.legend(facecolor=plot_background)

            plt.savefig(self.path_to_plot)

            return self.path_to_plot



    


        

        
        
