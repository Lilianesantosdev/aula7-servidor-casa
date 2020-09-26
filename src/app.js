const express = require ('express');
const app = express();

const index = require('./route/index');
const ricas = require('./route/ricasRoute')


app.use((req, res, next) => {
   console.log('Nova requisicão');
   next ()
});

app.use('/', index);
app.use ('./ricas', ricas);

module.exports = app;
