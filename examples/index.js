var connect = require('connect');
var monkeyglitch = require('../');

connect(
    connect.logger()
  , monkeyglitch(__dirname + '/public')
  , function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.end('<img src="/001.jpg" /><img src="/002.gif" /><img src="/003.png" />');
  }
).listen(3001);