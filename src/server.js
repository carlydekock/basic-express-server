'use strict';

const express = require('express');
const app = express();

const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const errorHandler404 = require('./error-handlers/404.js');
const errorHandler500 = require('./error-handlers/500.js');

app.use(express.json());

//put validator into person route
app.get('/person', logger, validator, getName); 

function getName(request, response, next){
  const person = {
    name: request.query.name,
  }
  console.log('hello');
  console.log(person);
  if (!person) {
    response.status(500);
  }
  response.status(200).json(person);
}

app.use('*', errorHandler404);
app.use(errorHandler500);

module.exports = {
  app: app,
  start: function(port) {
    app.listen(port, () => {
      console.log('App is running on port:', port)
    });
  }
}