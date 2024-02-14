const { Comment, Like, Post, Profile, User } = require("./models/index");
//const seedUsers = require('./seed/users.json');
//const seedProfiles = require('./seed/profiles.json');

// Define your associations here
User.hasOne(Profile);
Profile.belongsTo(User);

User.hasMany(Post);
Post.belongsTo(User); 

Post.hasMany(Comment);
Comment.belongsTo(Post);

User.belongsToMany(Like, {through: 'user_like'});
Like.belongsToMany(User, {through: 'user_like'});

module.exports = {
    Comment,
    Like,
    Post,
    Profile,
    User
}