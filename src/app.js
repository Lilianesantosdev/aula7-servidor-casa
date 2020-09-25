const express = require('express');
const app = express ();

//importando arquivos de rota
const index = require('./route/index');
const mulheres = require('./route/mulheresRoute')


app.use ((req,res, next) => {
console.log ('nova requisicao realizada')

next ()
});

app.use('/', index);
app.use('/mulheres',mulheres);


module.exports = app;