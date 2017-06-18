var express  = require('express');
var app      = express();
var api      = require('./api');

app.use(express.static(__dirname + 'www'));

app.use('/api', api);

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});