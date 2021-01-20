var express = require('express');
var router = express.Router();
var dbClient = require('../app/db/db-client');

var getMembers = function getMembers(callback) {
 dbClient.findAll(function(records) {
    callback(records);
  });
}

/**
 * HTTP の GET メソッドを待ち受けて member テーブルからレコードを全件取得して返す
 */
router.get('/findAll', function(req, res, next) {
  getMembers(function(records) {
    res.json(records);
  });
});

/**
 * HTTP の POST メソッドを待ち受ける
 * 
 * @note TBD...
 */
router.post('/post', function(req, res, next) {
});


/**
 * HTTP の PUT メソッドを待ち受ける
 * 
 * @note TBD...
 */
router.put('/put', function(req, res, next) {
});

/**
 * HTTP の POST メソッドを待ち受ける
 * 
 * @note TBD...
 */
router.delete('/remove', function(req, res, next) {
});

module.exports = router;
