var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/get', function(req, res, next) {
  res.json({status: 200, response: 'Expressから返却した'});
});

module.exports = router;
