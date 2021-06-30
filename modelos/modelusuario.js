const { Sequelize, DataTypes } = require('sequelize');
const conexion = require('../db/db');


const User = conexion.define('usuario', {
    idusuario: {type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true},
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    fecha_nacimiento : DataTypes.DATE,
    direccion: DataTypes.STRING,
    dpi: DataTypes.INTEGER
    
  }, {
    // Other model options go here
    freezeTableName: true
  });

  module.exports = User;