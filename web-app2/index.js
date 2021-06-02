var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.setHeader('test2.foo.io','test2')
  res.send('test2');
});
app.listen(9095, function () {
  console.log('App listening on port 9095!');
});
