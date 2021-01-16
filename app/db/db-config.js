const Sequelize = require('sequelize');

/**
 * company に対する接続設定を定義
 */
const dbConfig = new Sequelize('company', 'postgres', 'pgadmin', {
  // 接続先ホストを指定
  host: 'localhost',

  // 使用する DB 製品を指定
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = dbConfig;
