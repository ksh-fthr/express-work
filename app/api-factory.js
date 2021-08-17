// *******************************************
// サービスごとのモジュールを管理する Factory
// *******************************************

const employeeApi = require('./employee-api.js');
const messageApi = require('./message-api.js');
const memberApi = require('./member-api.js');

// サービス管理テーブル
const serviceTable = [
  employeeApi,
  messageApi,
  memberApi,
];

/**
 * REST-API を作る
 *
 * @param {oject} router 'express.Router()' で生成されるオブジェクト｡コール元で生成されたもの｡
 */
function createApi(router) {
  serviceTable.forEach(function(elm, _) {
    elm.createApi(router);
  });
}

/**
 * コンストラクタ
 */
const ApiFactory = function ApiFactory() {}

// prototype 継承に突っ込む
ApiFactory.prototype.createApi = createApi;

module.exports = new ApiFactory();
