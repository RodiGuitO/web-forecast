const http = require('http');

http.createServer((req, res) => {
        // res.write('Hola mundo');
        // res.end();

        // declaro tipo de aplicacion - salida : aplicacion JSON
        res.writeHead(200, { 'Content-Type': 'application/json' });

        let view = {
            nombre: 'Rodrigo',
            edad: '?',
            url: req.url
        };

        res.write(JSON.stringify(view));
        res.end();
    })
    .listen(8080);