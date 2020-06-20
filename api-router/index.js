const express = require('express');
const app = express();


// MIDLEWARES
app.use( (req, res, next)=>{
    console.log('Fecha:', Date.now() );
    next();
})


// ROUTER
app.use(require('./routes/index'))


app.listen('5000')
console.log('API en ejecución en el puerto 5000');