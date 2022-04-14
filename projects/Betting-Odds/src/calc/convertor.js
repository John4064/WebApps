/**
 * @param value $monetary value to be wagered
 * @param favored boolean expression if the bet is + or 0
 * @returns {number} returns the  amount of money won if the bet is win
 */
function convertor(value, favored){
    if(favored==='+'){
        return 1;
    }else if (favored==='-'){
        return 0;
    }else{
        return -320;
    }
}