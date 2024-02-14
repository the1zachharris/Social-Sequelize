const { Comment, Like, Post, Profile, User } = require("./index");
const { sequelize } = require('./db/connection.js');
const seedUsers = require('./seed/users.json');
const seedProfiles = require('./seed/profiles.json');
const seedPosts = require('./seed/posts.json');
const seedLikes = require('./seed/likes.json');
const seedComments = require('./seed/comments.json');

describe('Social Sequelzie Test', () => {
    /**
     * Runs the code prior to all tests
     */
    // 

    beforeAll(async () => {
        
        await sequelize.sync({ force: true });
    })

    // afterEach(async () => {
        
    //     await sequelize.close();
    // })

    //Write your tests here
    test("connects to the database", async () => {
        try {
          await sequelize.sync();
        } catch (err) {
          expect(err).toBeFalsy();
        }
    });

    test("Should associate", async () => {
        //await mockedSequelize.sync({ force: true });
        const myUsers = await User.create(seedUsers[0]);
        const myProfiles = await Profile.create(seedProfiles[0]);

        //await myUsers.setProfile(myProfiles);
        //const result = await User.findByPk(1, { include: Profile }); 
        //let test = await myUsers.getProfile();
        await expect(myUsers instanceof User).toBe(true);
        await expect(myProfiles instanceof Profile).toBe(true);
    });

})