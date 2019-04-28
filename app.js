var server = require('http');
server.createServer((req, res) => {
        res.writeHead(200, '', { 'Content-type': 'application/json' });
        res.statusCode = 200;
        res.statusMessage = 'success first server';

        const output = {
            nombre: 'Dennis Huallanca',
            edad: 38,
            url: req.url,
        };

        res.write(JSON.stringify(output));
        res.end();
    })
    .listen(8080);