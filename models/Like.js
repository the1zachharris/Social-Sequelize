const {sequelize} = require('../db/connection');
const { DataTypes,Model } = require('sequelize');

class Like extends Model{};

Like.init(
  {
    reactionType: DataTypes.STRING,
    createdAt: DataTypes.STRING
  },
  {
    sequelize: sequelize,
    modelName: 'Like'
  }
);

module.exports = Like;