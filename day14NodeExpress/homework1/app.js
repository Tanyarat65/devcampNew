const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// app.use(bodyParser.json());

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/contact', (req, res) => {
    console.log(res.url)
 res.render('contact');
});

app.get('/portfolio', (req, res) => {
    console.log(res.url)
 res.render('portfolio');
});

app.get('/skill', (req, res) => {
    console.log(res.url)
 res.render('skill');
});

app.get('/index', (req, res) => {
    // console.log(res.url)
 res.render('index');
});

app.listen(3000, () => {
 console.log('server started on port 3000!');
});
