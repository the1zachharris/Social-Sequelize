const {sequelize} = require('../db/connection');
const { DataTypes,Model } = require('sequelize');

class Comment extends Model{};

Comment.init(
  {
    body: DataTypes.STRING,
    createdAt: DataTypes.STRING
  },
  {
    sequelize: sequelize,
    modelName: 'Comment'
  }
);

module.exports = Comment;