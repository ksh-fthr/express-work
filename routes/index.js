var express = require('express');
var router = express.Router();

var storage = {
  id: 0,
  message: 'デフォルトメッセージ'
};

const storages = [storage];

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
router.get('/get', function(req, res, next) {
  res.status(200);
  res.json({
    status: 200,
    response: 'メッセージリストを返却',
    messages: storages
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
  if (!req.body.id || req.body.id === '') {
    res.status(400);
    res.json({status: 400, response: 'IDが指定されていない'})
    return;
  }

  for (var i = 0; i < storages.length; i++) {
    if (req.body.id === storages[i].id) {
      res.status(409);
      res.json({
        status: 409,
        response: 'IDが重複',
        messages: req.body
      })
      return;
    }
  }

  const localStorage = {
    id: req.body.id,
    message: req.body.message
  };
  storages.push(localStorage);

  res.status(200);
  res.json({
    status: 200,
    response: 'メッセージを登録',
    messages: storages
  })
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
  if (!req.body.id || req.body.id === '') {
    res.status(400);
    res.json({
      status: 400,
      response: 'IDが指定されていない',
      message: req.body
    })
    return;
  }

  for (var i = 0; i < storages.length; i++) {
    if (req.body.id === storages[i].id) {
      storages[i].message = req.body.message;
      res.status(200);
      res.json({
        status: 200,
        response: 'メッセージを更新',
        messages: storages
      })
      return;
    }
  }

  res.status(404);
  res.json({
    status: 404,
    response: '対象のメッセージが存在しない',
    messages: req.body
  })
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
  if (!req.body.id || req.body.id === '') {
    res.status(400);
    res.json({
      status: 400,
      response: 'IDが指定されていない',
      message: req.body
    })
    return;
  }

  for (var i = 0; i < storages.length; i++) {
    if (req.body.id === storages[i].id) {
      storages.splice(i, 1);
      res.status(200);
      res.json({
        status: 200,
        response: 'メッセージを削除',
        messages: storages
      })
      return;
    }
  }

  res.status(404);
  res.json({
    status: 404,
    response: '対象のメッセージが存在しない',
    messages: req.body
  })
});

module.exports = router;
