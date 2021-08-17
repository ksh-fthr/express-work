const Sequelize = require('sequelize');
const Op = Sequelize.Op;
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
var DbClientMember = function() {
  // db access
  dbConfig
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
};

/**
 * レコード全件取得
 */
DbClientMember.prototype.findAll = function findAll(callback) {

  // 次のSQLが生成-実行される
  //
  // SELECT
  //   "member"."id",
  //   "member"."project_id",
  //   "member"."team_id",
  //   "member"."member_id",
  //   "member"."member_name",
  //   "team"."id" AS "team.id",
  //   "team"."project_id" AS "team.project_id",
  //   "team"."team_id" AS "team.team_id",
  //   "team"."team_name" AS "team.team_name"
  // FROM
  //   "member" AS "member"
  // INNER JOIN
  //   "team" AS "team" ON "member"."project_id" = "team"."project_id"
  // AND
  //   "team"."team_id" = "member"."team_id";
  //
  member.findAll({
    include: [{
      model: team,
      where: {
        team_id: {
          [Op.eq]: Sequelize.col('member.team_id')
        }
      },
      require: true
    }]
  })
  .then((result) => {
    callback(result);
  });
};

module.exports = new DbClientMember();
