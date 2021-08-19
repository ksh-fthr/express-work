var express = require('express');
var router = express.Router();
var dbClient = require('../app/db/db-client');

/**
 * HTTP の GET メソッドを待ち受けて employee テーブルからレコードを全件取得して返す
 */
router.get('/employee/find', function(req, res, next) {
  const query = req.query;
  dbClient.find(query, function(result) {
    res.json(result);
  });
});

/**
 * HTTP の POST メソッドを待ち受けて employee 情報を登録する
 */
router.post('/employee/register', function(req, res, next) {
  const addData = req.body;
  dbClient.register(addData, function(result) {
    res.json(result);
  });
});

/**
 * HTTP の PUT メソッドを待ち受けて employee 情報を更新する
 */
router.put('/employee/update', function(req, res, next) {
  const query = {
    id: req.body.id
  };
  const addData = req.body;
  dbClient.update(addData, query, function(result) {
    res.json(result);
  });
});

/**
 * HTTP の DELETE メソッドを待ち受けて employee 情報を削除する
 */
router.delete('/employee/remove', function(req, res, next) {
  const query = {
    id: req.body.id
  };
  dbClient.remove(query, function(result) {
    res.json(result);
  });
});

module.exports = router;
