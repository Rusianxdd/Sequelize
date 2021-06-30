const Sequelize = require('sequelize');


const sequelize = new Sequelize('banco_vr', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' 
  });


  module.exports = sequelize;