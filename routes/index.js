var express = require('express');
var router = express.Router();
var dbClient = require('../app/db/db-client');

var getMembers = function getMembers(callback) {
 dbClient.findAll(function(records) {
    callback(records);
  });
}

/**
 * HTTP の GET メソッドを待ち受けてステータスコードと文字列, メッセージリストを返す
 * レスポンスは下記のJSONフォーマットで返却する
 * {
 *   status: 200,
 *   response: 'メッセージリストを返却',
 *   messages: {{メッセージリスト}}
 * }
 * といった JSON が返却される
 */
router.get('/findAll', function(req, res, next) {
  getMembers(function(records) {
    res.json(records);
  });
});

/**
 * HTTP の POST メソッドを待ち受けてメッセージを登録する
 * 成功時､ステータスコードと文字列､登録後のメッセージリストを返す
 *
 * レスポンスは下記のJSONフォーマットで返却する
 * {
 *   status: 200,
 *   response: 'メッセージを登録',
 *   messages: {{メッセージリスト}}
 * }
 * といった JSON が返却される
 */
router.post('/post', function(req, res, next) {
});


/**
 * HTTP の PUT メソッドを待ち受けてメッセージを更新する
 * 成功時､ステータスコードと文字列､ 更新後のメッセージリストを返す
 *
 * レスポンスは下記のJSONフォーマットで返却する
 * {
 *   status: 200,
 *   response: 'メッセージを更新',
 *   messages: {{メッセージリスト}}
 * }
 * といった JSON が返却される
 */
router.put('/put', function(req, res, next) {
});

/**
 * HTTP の DELETE メソッドを待ち受けてメッセージを削除する
 * 成功時､ステータスコードと文字列､ 削除後のメッセージリストを返す
 *
 * レスポンスは下記のJSONフォーマットで返却する
 * {
 *   status: 200,
 *   response: 'メッセージを削除',
 *   messages: {{メッセージリスト}}
 * }
 * といった JSON が返却される
 */
router.delete('/delete', function(req, res, next) {
});

module.exports = router;
