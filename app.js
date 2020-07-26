var express = require('express');
var request = require('request');
var mysql = require('mysql');

var app = express();

app.set('view engine', 'ejs');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'admin',
    database : 'bookings'
  });
  
  connection.connect(function(err){
  if(!err) {
      console.log("Database is connected ... \n\n");  
  } else {
      console.log("Error connecting database ... \n\n");  
  }
  });

app.get('/', function(req, res){
    res.render('welcome');
    
});

app.get('/bookingform', function(req, res) {
    res.render('booking_form');
})

app.post('/booking', function(req, res) {
    $query = INSERT 
    console.log("aya");
    let response = {
        "message": "Saved"
    };
    return res.send(response);
    // res.render('welcome');
})

app.listen((process.env.PORT || 3000), () =>  {
    console.log("App started on port: " + 3000);
});