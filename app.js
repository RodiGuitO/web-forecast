"use strict";

const express = require('express');

const app = express();

var hbs = require('hbs');

require('./helpers/helper');

// configuracion de puertos
const port = process.env.PORT || 8080;


// misddleware para especificar carpeta HTML
// __dirname: direccion de referencia
// http://localhost:8080/home.html -> va el .html
app.use(express.static(__dirname + '/public'));

// inicializo directorio de componentes parciales: HBS
hbs.registerPartials(__dirname + '/views/parciales', (error) => {
    if (error) console.log(error);
});

// uso de Handdlebar
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        name: 'roDrigo iVan',
        date: new Date().toLocaleString()
    }); // /views/home.hbs
});

app.get('/about', (req, res) => {
    res.render('about', { date: new Date().toLocaleString() }); // /views/avbout.hbs : 
});

/* app.get('/', function(req, res) {
    res.send('Hello World')
});

app.get('/data', (req, res) => {
    res.send('Pagina data');
});
 */

app.listen(port, function() {
    console.log('Server its Up: http://localhost:', port);
});