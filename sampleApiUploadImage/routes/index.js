var express = require('express');
var router = express.Router();


/* GET home page. */
router.post('/upload', function(req, res, next) {
  console.log("work");
  res.writeHead(200, {'Content-Type': 'application/json'});
  console.log(req.body);
});

module.exports = router;
