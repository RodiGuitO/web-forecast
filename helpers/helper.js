var hbs = require('hbs');

// getDate : variable alterna de date en app.js
hbs.registerHelper('getDate', () => {
    return new Date().toLocaleDateString();
})

// Formalizar escritura de nombres
hbs.registerHelper('capitalize', (cadena) => {
    let arrayCadena = cadena.split(' ');
    arrayCadena.forEach((palabra, index) => {
        arrayCadena[index] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return arrayCadena.join(' ');
});