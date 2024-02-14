const {sequelize} = require('../db/connection');
const { DataTypes,Model } = require('sequelize');

class Profile extends Model{};

Profile.init(
  {
    bio: DataTypes.STRING,
    profilePicture: DataTypes.STRING,
    birthday: DataTypes.STRING
  },
  {
    sequelize: sequelize,
    modelName: 'Profile'
  }
);

module.exports = Profile;