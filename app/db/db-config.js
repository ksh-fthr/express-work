const Sequelize = require('sequelize');
const dbConfig = new Sequelize('company', 'postgres', 'pgadmin', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = dbConfig;
