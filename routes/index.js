var express = require('express');
var router = express.Router();

/**
 * HTTP の GET メソッドを待ち受けてステータスコードと文字列を返すだけの単純なもの
 * レスポンスは下記の実装の通り
 * {
 *   status: 200,
 *   response: 'Expressから返却した'
 * }
 * といった JSON が返却される
 */
router.get('/get', function(req, res, next) {
  res.json({status: 200, response: 'Expressから返却した'});
});

module.exports = router;
