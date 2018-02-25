const Sequelize = require('sequelize');
const dbConfig = require('./db-config');
const project = require('../model/project');
const team = require('../model/team');
const member = require('../model/member');

// relation ship
// has many
project.hasMany(team, {foreignKey: 'project_id', targetKey: 'project_id'});
team.hasMany(member, {foreignKey: 'project_id', targetKey: 'project_id'});

// belongsTo
team.belongsTo(project, {foreignKey: 'project_id', targetKey: 'project_id'});
member.belongsTo(team, {foreignKey: 'project_id', targetKey: 'project_id'});

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
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
}

/**
 * レコード全件取得
 */
DbClient.prototype.findAll = function findAll(callback) {

  // 次のSQLが生成-実行される
  // member M inner join team_tbl T on M.project_id = T.project_id and M.team_id and T.team_id;
  member.findAll({
    include: [{
      model: team,
      where: {
       team_id: {
         $eq : Sequelize.col('member.team_id')
        }
      },
      require: true
    }]
  })
  .then((result) => {
    callback(result);
  });
};

module.exports = new DbClient();
