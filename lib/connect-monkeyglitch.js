var fs = require('fs')
  , path = require('path')
  , join = path.join
  , normalize = path.normalize
  , parse = require('url').parse
;

module.exports = function monkeyGlitch(imageDir) {
  var imageDir = imageDir || __dirname + '/../public/';
  return function(req, res, next) {
    if (!req.url.match(/.[jpg|jpeg|gif|png]$/i)) return next();

    var url = parse(req.url)
    var path = decodeURIComponent(url.pathname);
    imageDir = normalize(imageDir);
    path = normalize(join(imageDir, path));
    var stream = fs.createReadStream(path, {});
    stream.on('data', function(data){
      var f = function(){ return parseInt((Math.random() * 16).toFixed()).toString(16) };
      var srcRegexp = new RegExp(f(), 'g');
      var dstString = f();
      data.write(data.toString('binary').replace(srcRegexp, dstString), 'binary');
    });
    stream.pipe(res);
  };
};
