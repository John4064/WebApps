/**
 * @param value $monetary value to be wagered
 * @param favored boolean expression if the bet is + or 0
 * @returns {number} returns the  amount of money won if the bet is win
 */
function convertor(value, favored){
    //means an underdog aka
    if(favored==='+'){
        return 1;
        //Means a favorite aka -140 is 140 to win 100
    }else if (favored==='-'){
        //need to get module
        return value+(value/100);
    }else{
        return -320;
    }
}