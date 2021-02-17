'use strict';

module.exports = function validator (request, response, next) {
  const name = request.query.name;
  if(!name){
    next(console.error('no name'))
  }
  next();
}