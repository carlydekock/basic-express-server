'use strict';

module.exports = function (err, request, response, next) {
  // const error = err.message ? err.message : err;

  // const errorObject = {
  //   status: 404,
  //   message: error,
  // };

  response.status(404).json({status: 500, error: 'error'});
};