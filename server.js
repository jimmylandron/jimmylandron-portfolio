// Jimmy Landron
// NodeJS Sever

// Initializ Express.
var express = require("express");
var app = express();

// Node module to set path.
var path = require('path');

// Port number from cloud9 inviroment variable.
var port = process.env.PORT;

// Set view engine to ejs.
app.set('view engine', 'ejs');

// Set the directory path to the views.
app.set('views', path.resolve(__dirname, 'client', 'views'));

// Set the path to where the static files are served from.
app.use(express.static(path.resolve(__dirname, 'client')));

// Set the first route.
app.get('/', function(req, res){
  res.render('index.ejs');  
});

// Set the port to listen from cloud9's process.env.PORT.
app.listen(port, function(){
   console.log('Sever running on port: ' + port); 
});
