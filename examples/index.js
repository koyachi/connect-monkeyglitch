var connect = require('connect');
var monkeyglitch = require('../');

connect(
    connect.logger()
  , monkeyglitch()
  , connect.static(__dirname + '/public', {maxAge: 1})
  , function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.end('<img src="/001.jpg" /><img src="/002.gif" /><img src="/003.png" />');
  }
).listen(3001);