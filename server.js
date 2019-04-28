const express = require('express');

const app = express();

app.get('/', (req, res) => {
    const output = {
        nombre: 'Dennis Huallanca',
        edad: 38,
        url: req.url,
    };
    res.json(output);
});

app.listen(3000);