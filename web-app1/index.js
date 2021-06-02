var express = require('express');
var app = express();
app.get('/', function (req, res) {
res.setHeader('test1.foo.io','test1') 
 res.send('test1');
});
app.listen(9090, function () {
  console.log('Example app listening on port 9090!');
});
