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

var challenge = "";

router.get('/', function(req, res) {
  res.render("index", {challenge: "", answer: ""});
});

router.get('/challenge', function(req, res) {
  res.sendFile(path.join(__dirname+'/challenge.html'));
});

router.get('/superhardchallenge', function(req, res){
  challenge = "decrypt 5A4739756458513D";
  res.render("index", {challenge: challenge, answer: ""});

});

router.get('/challengebad', function(req, res){
  challenge = "how many bits are in 4096 Bytes?";
  res.render("index", {challenge: challenge, answer: ""});
});

router.get('/gudChallenge', function(req, res){
  challenge = "check out http://db6735a5.ngrok.io/challenge";
  res.render("index", {challenge: challenge, answer: ""});
});

router.get('/badChallenge', function(req, res){
  challenge = "what is the hex value of an RGB white pixel";
  res.render("index", {challenge: challenge, answer: ""});
});

router.get('/badAnswer', function(req, res){
  var answer = req.query.answer;
  var response = ""
  
  switch(answer.toLowerCase()){
    case "donut":
      response = "Correct flag!";
    break;
    case "32768":
      response = "gud, you got the flag";
    break;
    case "32":
      response = "coooorect";;
    break;
    case "ffffff":
      response = "nice job searching that up";
    break;
    default:
      response = "lmao, wrong answer";
  }
  res.render("index", {answer: response, challenge: challenge});
});

  
  app.use('/', router);
  
  
  app.listen(port, hostname, () => {
    console.log(`App running at http://${hostname}:${port}/`);
  });