

def calculate(value,odds,favored):
    ans = 0
    #Favored
    if(favored=='-'):
        ans= round(100.0/odds*value,2)
    elif(favored=='+'):
        ans= round(odds/100.0*value,2)
    else:
        print("ERROR")
    return ans