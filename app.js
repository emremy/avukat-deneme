const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');

app.set('view engine', 'pug');
app.set('views', './app/views/');

const publicUrl = require('./app/router/publicUrl');


const sequelize = require('./private/database');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(publicUrl);



app.listen(80, () => {
    console.log('Is online 80 port');
});