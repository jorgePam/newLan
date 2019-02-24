var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get("/test", function(req, res, next) {
  res.set("Access-Control-Allow-Origin", "http://localhost:8080");
  res.json({
    aaa: 111,
    bbb: 68468
  });
});
module.exports = router;
