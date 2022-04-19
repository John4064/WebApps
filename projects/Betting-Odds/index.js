//John Parkhurst

const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * @param value $monetary value to be wagered
 * @param odds What are the odds of the wager
 * @param favored char either + or -
 * @returns {number} returns the  amount of money won if the bet is win
 */
function convertor(value, odds, favored){
    //means an underdog aka
    if(favored==='+'){
        return Math.round(odds/100.0*value);
        //Means a favorite aka -140 is 140 to win 100
    }else if (favored==='-'){
        //need to get module
        return Math.round(100.0/odds*value);
    }
}

// sendFile will go here
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'));
});
app.post('/calc', function (req, res) {
    var name = req.body.val + ' ' + req.body.odds;
    //Need to parse odds to get + or - and the value
    //Calculation occurs here
    //send the final value to html
    if(req.body.favored === 'pos'){
        res.send( Number(convertor(req.body.val, req.body.odds,'+')) +Number(req.body.val) + ' Would be the total payout!');
    }else if(req.body.favored === 'neg'){
        res.send( Number(convertor(req.body.val, req.body.odds,'-')) +Number(req.body.val) + ' Would be the total payout!');
    }else{
        res.send("Remember to specify if the bet is favored or not!");
    }
    res.end();
});

app.listen(port, () => {
    console.log(`App running on: ${port}`);
})