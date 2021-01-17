var express = require('express');
var router = express.Router();
var dbClient = require('../app/db/db-client');

/**
 * HTTP の GET メソッドを待ち受けて employee テーブルからレコードを全件取得して返す
 */
router.get('/find', function(req, res, next) {
  const query = req.query;
  dbClient.find(query, function(result) {
    res.json(result);
  });
});

/**
 * HTTP の POST メソッドを待ち受けて employee 情報を登録する
 */
router.post('/register', function(req, res, next) {
  const addData = req.body;
  dbClient.register(addData, function(result) {
    res.json(result);
  });
});

/**
 * HTTP の PUT メソッドを待ち受けて employee 情報を更新する
 */
router.put('/update', function(req, res, next) {
  const query = req.query;
  const addData = req.body;
  dbClient.update(addData, query, function(result) {
    res.json(result);
  });
});

/**
 * HTTP の DELETE メソッドを待ち受けて employee 情報を全件削除する
 */
router.delete('/remove', function(req, res, next) {
  const query = req.query;
  dbClient.remove(query, function(result) {
    res.json(result);
  });
});

module.exports = router;
