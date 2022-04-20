const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.set('view engine', 'ejs');
// app.set('views', )

app.get('/', function(req, res){
    // console.log(__dirname)
    // res.send("<h1>Running</h1>");

    return res.render('home');
});

app.listen(port, function(err){
    if (err) { console.log('Error in running the server', err);}

    console.log('Running on:', port)
});