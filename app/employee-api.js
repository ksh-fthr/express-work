// *******************************************
// comapny-api
// *******************************************

const dbClientEmployee = require('./db/db-client-employee');

/**
 * REST-API を作る
 *
 * @param {oject} router 'express.Router()' で生成されるオブジェクト｡コール元で生成されたもの｡
 */
function createApi(router) {

  /**
   * HTTP の GET メソッドを待ち受けて employee テーブルからレコードを全件取得して返す
   */
  router.get('/employee/find', function(req, res, next) {
    const query = req.query;
    dbClientEmployee.find(query, function(result) {
      res.json(result);
    });
  });

  /**
   * HTTP の POST メソッドを待ち受けて employee 情報を登録する
   */
  router.post('/employee/register', function(req, res, next) {
    const addData = req.body;
    dbClientEmployee.register(addData, function(result) {
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
    dbClientEmployee.update(addData, query, function(result) {
      res.json(result);
    });
  });

  /**
   * HTTP の DELETE メソッドを待ち受けて employee 情報を全件削除する
   */
  router.delete('/employee/remove', function(req, res, next) {
    const query = {
      id: req.body.id
    };
    dbClientEmployee.remove(query, function(result) {
      res.json(result);
    });
  });
}

/**
 * コンストラクタ
 */
const CompanyApi = function CompanyApi() {};

// prototype 継承に突っ込む
CompanyApi.prototype.createApi = createApi;

module.exports = new CompanyApi();
