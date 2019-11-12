const express = require('express');
const fs = require('fs');
const path = require('path');
var bodyParser = require("body-parser");
const app = express();
const hostname = '127.0.0.1';
const port = 8080;
const router = express.Router();

app.set("view engine", "ejs");

app.set("views", __dirname+"/views");

app.use(bodyParser.urlencoded({ extended: false })); 

router.get('/', function(req, res) {
  const style = "none"
  res.render("index", {challenge: "", style: style});
  });

router.get('/superhardchallenge', function(req, res){
  const chal = "decrypt 5A4739756458513D";
  const style = "block"
  res.render("index", {challenge: chal, style: style});

});

router.get('/challengebad', function(req, res){
  
});

router.get('/gudChallenge', function(req, res){
  
});

router.get('/badChallenge', function(req, res){
  
});

  
  app.use('/', router);
  
  
  app.listen(port, hostname, () => {
    console.log(`App running at http://${hostname}:${port}/`);
  });