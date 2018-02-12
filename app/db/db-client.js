const Sequelize = require('sequelize');
const connect = require('./connect');
const project = require('../model/project');
const team = require('../model/team');
const member = require('../model/member');

// relation ship
// has many
project.hasMany(Team, {foreignKey: 'project_id', targetKey: 'project_id'});
team.hasMany(Member, {foreignKey: 'project_id', targetKey: 'project_id'});

// belongsTo
team.belongsTo(project, {foreignKey: 'project_id', targetKey: 'project_id'});
member.belongsTo(team, {foreignKey: 'project_id', targetKey: 'project_id'});

/** 
 * コンストラクタ
 */
var DbClient = function() {}

/**
 * レコード全件取得
 */
DbClient.prototype.findAll = function findAll() {
  // 次のSQLが生成-実行される
  // member_tbl M inner join team_tbl T on M.project_id = T.project_id and M.team_id and T.team_id;
  return member.findAll({
    include: [{
      model: team,
      where: {
       team_id: {
         $eq : Sequelize.col('member_tbl.team_id')
        }
      },
      require: true
    }]
  })
};

module.exports = new DbClient();
