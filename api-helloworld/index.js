

const express = require('express');

let app = express();  

app.get('/', function(req, res){
    res.send('HOLA MUNDO');
})

app.post('/', function(req, res){
    res.send('POST request');
})

app.put('/', function(req, res){
    res.send('PUT request');
})

app.delete('/', function(req, res){
    res.send('DELETE request');
})

// USERS
app.get('/users', function(req, res){
    res.send('HOLA MUNDO');
})

app.post('/users', function(req, res){
    res.send('POST request');
})

app.put('/users', function(req, res){
    res.send('PUT request');
})

app.delete('/users', function(req, res){
    res.send('DELETE request');
})

app.listen(4000, function(){
    console.log('API Corriendo en el puerto 4000')

});
