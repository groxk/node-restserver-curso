require('./config/config')

const mongoose = require('mongoose');
const path = require('path');

const bodyParser = require('body-parser');
const express = require('express');
const app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//habilitar la carpeta publica
app.use(express.static(path.resolve(__dirname, '../public')));


// Confugración global de rutas
app.use(require('./routes/index'));


mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true }, (err, res) => {
    if (err)
        throw error;
    else
        console.log('Base de datos online');



});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto 3000');
});