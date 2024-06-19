import pickle
#import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
from io import BytesIO
import base64

from matplotlib.figure import Figure

class PowerliftPredictor:

    def __init__(self, path_to_plot, path_to_dataset, use_cols) -> None:
        self.df = pd.read_csv(path_to_dataset, usecols=use_cols)
        
        self.path_to_plot = path_to_plot
    
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

        self.weightclass = str(weight)

        return
    
    def getWeightClass(self) -> int:

        try: 
            return self.weightclass
        except:
            return None
    
    # def makeHist(self, total):

        weightclass = self.getWeightClass()
        

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

            plt.title(color='white', label=label_txt)
           

            ax.spines['bottom'].set_color('white')
            ax.spines['top'].set_color('white')
            ax.spines['left'].set_color('white')
            ax.spines['right'].set_color('white')
            ax.tick_params(axis='x', colors='white')
            ax.tick_params(axis='y', colors='white')

            ax.xaxis.label.set_color('white')
            ax.yaxis.label.set_color('white')

            

            plt.axvline(x=total, color=lifter_color, label=lifter_txt)

            plt.gca().set(title=txt, ylabel='Frequency', xlabel='Total')

            plt.legend(facecolor=plot_background)
            

            plt.savefig(self.path_to_plot, transparent=False)

            plt.clf()
            plt.close()

            

            return self.path_to_plot
        
    def makeHist2(self, total):

        weightclass = self.getWeightClass()
        

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

            fig = Figure()
            ax = fig.subplots()

            ax.hist(x=data, bins=100, color=all_lifters_color, alpha=1, label=label_txt)


            ax.spines['bottom'].set_color('white')
            ax.spines['top'].set_color('white')
            ax.spines['left'].set_color('white')
            ax.spines['right'].set_color('white')
            ax.tick_params(axis='x', colors='white')
            ax.tick_params(axis='y', colors='white')

            ax.xaxis.label.set_color('white')
            ax.yaxis.label.set_color('white')





            ax.set_facecolor(color=plot_background)


            fig.patch.set_facecolor(plot_background)

            ax.axvline(x=total, color=lifter_color, label=lifter_txt)
            ax.legend(labelcolor=['white', 'white'], facecolor=plot_background)

            ax.set(ylabel='Frequency', xlabel='Total')

            fig.suptitle(t=txt, color='white')


            buf = BytesIO()
            fig.savefig(buf, format='png')

            # embed result in the html output
            res = base64.b64encode(buf.getbuffer()).decode('ascii')

            


            fig.savefig(self.path_to_plot)
            return f"<img src='data:image/png;base64,{res}'/>"

        
        
        



    


        

        
        
