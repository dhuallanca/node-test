const express = require('express');

const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/publico'));
hbs.registerPartials(__dirname + '/views/parciales');
//return handlerbar hbs view
app.set('view engine', 'hbs');

// helper
require('./hbs/helpers');

app.get('/', (req, res) => {
    // renderisa el home.hbs
    res.render('home', {
        nombre: 'Dennis',
        anio: new Date()
    });
});

app.get('/about', (req, res) => {
    // renderisa el home.hbs
    res.render('about', {
        nombre: 'Dennis'
    });
});

app.listen(port);