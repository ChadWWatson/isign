var express = require('express')
var app = express()

app.use(express.static(__dirname + '/web/public'));

app.get('*', function(req, res){
  res.sendfile(__dirname + '/web/index.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})