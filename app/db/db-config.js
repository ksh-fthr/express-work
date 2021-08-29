const Sequelize = require('sequelize');

/**
 * company に対する接続設定を定義
 */
const dbConfig = new Sequelize('company', 'postgres', 'pgadmin', {
  //
  // 接続先ホストを指定
  // ( 環境変数から取得する )
  host: (() => {
    console.log(`DB_HOST: ${process.env.DB_HOST}`);
    return process.env.DB_HOST ? process.env.DB_HOST : 'localhost';
  })(),

  // 使用する DB 製品を指定
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
// DB との接続は下記の方法でも行える
// const dbConfig = new Sequelize(
//   'postgres://postgres:pgadmin@postgresql:5432/company',
//   {
//     dialect: 'postgres',
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     },
//     logging: false 
//   }
// );
module.exports = dbConfig;
