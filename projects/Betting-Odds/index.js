//John Parkhurst

const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// sendFile will go here
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})