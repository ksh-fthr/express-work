const Sequelize = require('sequelize');
const dbConfig = require('../db/db-config');

/**
 * employee テーブルの Entity モデル
 */
const employee = dbConfig.define('employee', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING
  },
  tel: {
    type: Sequelize.STRING
  }
}, {
  // タイムスタンプの属性 (updatedAt, createdAt) が不要ならば次のプロパティは false
  timestamps: false,

  // テーブル名を変更したくない場合は次のプロパティを true
  // デフォルトでは sequelize はテーブル名を複数形に変更する
  freezeTableName: true
});

module.exports = employee;
