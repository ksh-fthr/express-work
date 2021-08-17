const Sequelize = require('sequelize');
const dbConfig = require('../db/db-config');

/**
 * team_tbl テーブルの Entity モデル
 */
const team = dbConfig.define('team', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true 
  },
  project_id: {
    type: Sequelize.STRING
  },
  team_id: {
    type: Sequelize.STRING
  },
  team_name: {
    type: Sequelize.STRING
  }
}, {
  // don't add the timestamp attributes (updatedAt, createdAt)
  timestamps: false,

  // disable the modification of table names; By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  // if you don't want that, set the following
  freezeTableName: true
});

module.exports = team;
