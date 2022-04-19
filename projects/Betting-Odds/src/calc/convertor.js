/**
 * @param value $monetary value to be wagered
 * @param odds What are the odds of the wager
 * @param favored char either + or -
 * @returns {number} returns the  amount of money won if the bet is win
 */
function convertor(value, odds, favored){
    //means an underdog aka
    return 5;
    if(favored==='+'){
        return Math.round(odds/100.0*value);
        //Means a favorite aka -140 is 140 to win 100
    }else if (favored==='-'){
        //need to get module
        return Math.round(100.0/odds*value);
    }else{
        return -1234;
    }
}