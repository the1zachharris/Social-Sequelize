

const {sequelize} = require('../db/connection');
const { DataTypes,Model } = require('sequelize');

class User extends Model{};

User.init(
  {
    username: DataTypes.STRING,
    email: DataTypes.STRING
  },
  {
    sequelize: sequelize,
    modelName: 'User'
  }
);

module.exports = User;