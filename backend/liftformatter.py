import numpy as np

class LiftFormatter:

    def __init__(self) -> None:
        pass

    # function to round to nearest 2.5
    @staticmethod
    def roundLifts(number: float) -> float:

        return 2.5 * round(number / 2.5)
    

    @staticmethod
    def poundsToKilos(number:float)-> float:
        return number / 2.2046
    
    @staticmethod
    def kilosToPounds(number:float) -> float:

        return number * 2.2046
    
    @staticmethod
    def sortLifts(lifts:list) -> list:

        return sorted(lifts)
    
    def formatLifts(self, squats:list, bench:list, deadlift:list, weightmetric:bool) -> dict:

        # sort incoming data to ensure that it is in the correct order for the model
        # squats = self.sortLifts(float(data['Squat 1']), float(data['Squat 2']))
        # bench = self.sortLifts(float(data['Bench press 1']),float(data['Bench press 2']))
        # deadlift = self.sortLifts(float(data['Deadlift 1']), float(data['Deadlift 2']))
        squats = self.sortLifts(squats)
        bench = self.sortLifts(bench)
        deadlift = self.sortLifts(deadlift)

        # this is true if the weights are in kilograms
        if weightmetric:         

            return {'sq':squats, 'bp': bench, 'dl':deadlift}
        
        else:
            # convert lifted numbers from pounds to kilos
            squats = list(map(self.poundsToKilos, squats))
            bench = list(map(self.poundsToKilos, bench))
            deadlift = list(map(self.poundsToKilos, deadlift))

            return {'sq':squats, 'bp': bench, 'dl':deadlift}
    
    def restoreLifts(self, squats:list, bench: list, deadlifts: list, weightmetric: bool) -> tuple:

        if not weightmetric:


                
            squats = list(map(self.kilosToPounds, squats))
            bench  = list(map(self.kilosToPounds, bench))
            deadlifts = list(map(self.kilosToPounds, deadlifts))

            squats = list(map(self.roundLifts, squats))
            bench = list(map(self.roundLifts, bench))
            deadlifts = list(map(self.roundLifts, deadlifts))
            



            return (squats, bench, deadlifts)
        else:
            return (squats, bench, deadlifts)
    


    def orderLifts(self, sq:float, bp:float, dl:float, weightmetric:bool) -> tuple:

        # order = np.concatenate((sq,bp,dl), axis=None)
        if not weightmetric:
            sq3, bp3, dl3, = list(map(self.kilosToPounds, (sq, bp, dl)))
            
        

        sq3, bp3, dl3 = list(map(self.roundLifts, (sq, bp, dl)))
        # sq3 = self.roundLifts(sq)
        # bp3 = self.roundLifts(bp)
        # dl3 = self.roundLifts(dl)


        return (sq3, bp3, dl3)
    

    