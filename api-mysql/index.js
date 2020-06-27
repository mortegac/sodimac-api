
const express = require('express');
const bodyParser  =require('body-parser');
const helmet  =require('helmet');
const methodOverride  =require('method-override');

const app = express();

app.use(helmet())

app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// MANEJADORES ROUTES
app.use(require('./routes/index'));








app.listen('3000')
console.log('Api inicializada');