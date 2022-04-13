const createError = require('http-errors');
const url = require('url');

// catch 404 and forward to error handler
const notFound =
  (req, res, next) => {
    return res.redirect('/');
  };


// error handler
const handleError =
  (err, req, res, next) => {

    return res.redirect("/");
  
  }

module.exports.notFound = notFound;
module.exports.handleError = handleError;
