var express = require('express');
var app = express();

app.use(express.static('public'));

const port  = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});