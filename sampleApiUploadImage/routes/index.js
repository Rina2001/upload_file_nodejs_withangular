var express = require('express');
var router = express.Router();
var cors = require('cors');

var responseBack="";
/* GET home page. */
router.post('/upload',cors(), function(req, res, next) {
  console.log("work");
  res.writeHead(200, {'Content-Type': 'application/json'});
  responseBack=req.body;
  res.end(JSON.stringify(req.body));
});

router.post('/getImage', function(req, res, next) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.send(responseBack);
});


module.exports = router;
