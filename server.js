var express = require("express");
var app = express();
var path = require('path');

var port = process.env.PORT;

app.set('view engine', 'egj');
app.set('views', path.resolve(__dirname, 'client', 'views'));

app.get('/', function(req, res){
  res.render('index.ejs');  
});

app.listen(port, function(){
   console.log('Sever running on port: ' + port); 
});