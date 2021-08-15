// Sequelize を使用して CRUD を実装するために必要な import 群
const dbConfig = require('./db-config');       // 接続設定
const employee = require('../model/employee'); // モデル

/**
 * フロントエンドに返却するクエリ実行結果
 */
var result = {
  status: null,
  record: null,
  message: ""
};

/**
 * クエリ実行結果を初期化する
 */
var initializeResult = function initializeResult() {
  result.status = null,
  result.record = null,
  result.message = ""
};

/**
 * クエリ実行結果をセットする
 * @param {*} status 
 * @param {*} record 
 * @param {*} message 
 */
var setResult = function setResult(status, record, message) {
  initializeResult();
  result.status = status;
  if (record) {
    result.record = record;
  } else {
    result.message = message;
  }

  return result;
};

/** 
 * コンストラクタ
 */
var DbClient = function() {
  // db access
  dbConfig
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
}

/**
 * レコード全件取得
 * @param {*} callback 
 */
var findAll = function findAll(callback) {
  employee.findAll()
  .then((record) => {
    callback(setResult(200, record, null));
  })
  .catch((err) => {
    callback(setResult(500, null, err));
  });
};

/**
 * id に紐付くレコードを一件取得
 * @param {*} id 
 * @param {*} callback 
 */
var findById = function findById(id, callback) {
  employee.findByPk(id)
  .then((record) => {
    if (record) {
      callback(setResult(200, record, null));
    } else {
      callback(setResult(404, null, null));
    }
  })
  .catch((err) => {
    callback(setResult(500, null, err));
  });
};

/**
 * レコード取得
 * @param {*} query 
 * @param {*} callback 
 */
DbClient.prototype.find = function find(query, callback) {
  if (query.id) {
    findById(query.id, callback);
  } else {
    findAll(callback);
  }
};

/**
 * レコード登録
 * @param {*} param 
 * @param {*} callback 
 */
DbClient.prototype.register = function register(param, callback) {
  employee.create(param)
  .then((record) => {
    callback(setResult(200, record, null));
  })
  .catch((err) => {
    callback(setResult(500, null, err));
  });
};

/**
 * レコード更新
 * @param {*} param 
 * @param {*} query 
 * @param {*} callback 
 */
DbClient.prototype.update = function update(param, query, callback) {
  const filter = {
    where: {
        id: query.id
    }
  };

  employee.update(param, filter)
  .then((record) => {
    callback(setResult(200, record, null));
  })
  .catch((err) => {
    callback(setResult(500, null, err));
  });
};

/**
 * レコード削除
 * @param {*} query 
 * @param {*} callback 
 */
DbClient.prototype.remove = function remove(query, callback) {
  const filter = {
    where: {
        id: query.id
    }
  };

  employee.destroy(filter)
  .then((record) => {
    callback(setResult(200, record, null));
  })
  .catch((err) => {
    callback(setResult(500, null, err));
  });
};

module.exports = new DbClient();
