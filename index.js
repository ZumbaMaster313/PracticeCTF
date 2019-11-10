const express = require('express');
const path = require('path');
const app = express();
const hostname = '127.0.0.1';
const port = 8080;
const router = express.Router();

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/pctf.html'));
  });

router.post('/challenge', function(req, res) {
    res.sendFile(path.join(__dirname+'/challenge.html'));
  });
  
  app.use('/', router);
  
  
  app.listen(port, hostname, () => {
    console.log(`App running at http://${hostname}:${port}/`);
  });