const {sequelize} = require('../db/connection');
const { DataTypes,Model } = require('sequelize');

class Post extends Model{};

Post.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    createdAt: DataTypes.STRING
  },
  {
    sequelize: sequelize,
    modelName: 'Post'
  }
);

module.exports = Post;