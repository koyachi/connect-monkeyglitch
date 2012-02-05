var fs = require('fs')
  , path = require('path')
  , join = path.join
  , normalize = path.normalize
  , parse = require('url').parse
  , connectUtils = require('connect').utils
;

connectUtils.conditionalGET = function(req) {
  return (!req.url.match(/.[jpg|jpeg|gif|png]$/i));
};

module.exports = function monkeyGlitch() {
  return function(req, res, next) {
    if (!req.url.match(/.[jpg|jpeg|gif|png]$/i)) return next();

    req.on('static', function() {
      if (arguments.length == 0) return;
      var stream = arguments[0];
      stream.on('data', function(data){
        var f = function(){ return parseInt((Math.random() * 16).toFixed()).toString(16) };
        var srcRegexp = new RegExp(f(), 'g');
        var dstString = f();
        data.write(data.toString('binary').replace(srcRegexp, dstString), 'binary');
      });
      stream.pipe(res);
    });
    next();
  };
};
