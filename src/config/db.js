const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('university_erp', 'root', 'Root@123', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;