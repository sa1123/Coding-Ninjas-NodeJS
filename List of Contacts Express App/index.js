const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = 8000;

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('assets'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

var contactList = [
    {
        name: "A",
        phone: "1"
    },
    {
        name: "B",
        phone: "2"
    }
]

app.get('/', function(req, res){
    // console.log(__dirname)
    // res.send("<h1>Running</h1>");
    return res.render('home', {
        title: "Contacts list",
        contact_list: contactList
    });
});

app.get('/practice', function(req, res){
    return res.render('practice', {
        title: "Playing with ejs"
    });
});

app.post('/create-contact', function(req, res){

    // contactList.push({
    //     name: req.body.name,
    //     phone: req.body.phone
    // });

    contactList.push(req.body);

    return res.redirect('back');
});

app.listen(port, function(err){
    if (err) { console.log('Error in running the server', err);}

    console.log('Running on:', port)
});