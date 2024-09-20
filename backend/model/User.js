const { DataTypes } = require('sequelize');
const db = require('../db.js');
const { v4: uuidv4 } = require('uuid');

const User = db.define('user', 
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: uuidv4,
      primaryKey: true,
      allowNull: false
    },
    login: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(155),
      allowNull: false
    }
  },
  {
    tableName: 'user',
    timestamps: false 
  }
);

module.exports = User;
