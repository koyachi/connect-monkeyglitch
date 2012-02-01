# connect-monkeyglitch

 A monkeyglitch middleware for [Connect](http://github.com/senchalabs/connect).

## Example

```js
var connect = require('connect');
var monkeyglitch = require('connect-monkeyglitch');

connect(
    connect.logger()
  , monkeyglitch(__dirname + '/public')
  , function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.end('<img src="/001.jpg" /><img src="/002.gif" /><img src="/003.png" />');
  }
).listen(3001);
```

![example_result](https://github.com/koyachi/connect-monkeyglitch/raw/master/examples/example_result.png)

## about "Monkey Glitch"

- [Visual Glitch, using Ruby | RubyKaigi 2011(July 16 - 18)](http://rubykaigi.org/2011/en/schedule/details/18S02)
- [蒸し蒸しした曇り空 - ずっと君のターン](http://d.hatena.ne.jp/technohippy/20110806#1312604810)
- [youpy/rack-middleware-glitch - GitHub](https://github.com/youpy/rack-middleware-glitch)

## License 

(The MIT License)

Copyright (c) 2012 koyachi &lt;rtk2106@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
