// *******************************************
// member-api
// *******************************************

const dbClientMember = require('./db/db-client-member');

var getMembers = function getMembers(callback) {
  dbClientMember.findAll(function(records) {
     callback(records);
   });
 };
 
/**
 * REST-API を作る
 *
 * @param {oject} router 'express.Router()' で生成されるオブジェクト｡コール元で生成されたもの｡
 */
function createApi(router) {

  /**
   * HTTP の GET メソッドを待ち受けて member テーブルからレコードを全件取得して返す
   */
  router.get('/member/findAll', function(req, res, next) {
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
}

/**
 * コンストラクタ
 */
const MemberApi = function MemberApi() {};

// prototype 継承に突っ込む
MemberApi.prototype.createApi = createApi;

module.exports = new MemberApi();
