//John Parkhurst

const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));


// sendFile will go here
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'));
});
app.post('/calc', function (req, res) {
    var name = req.body.val + ' ' + req.body.odds;
    //Need to parse odds to get + or - and the value
    //Calculation occurs here
    //send the final value to html
    res.send(name + ' Submitted Successfully!');
});
app.listen(port, () => {
    console.log(`App running on: ${port}`);
})