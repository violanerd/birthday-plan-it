const db = require('../config/connection');
const { User, Party } = require('../models');

db.once('open', async () => {  
    await Party.deleteMany();

    const parties = await Party.insertMany([
        {
            hostName: 'Bobby',
            description:
            'A party to celebrate turning 30!',
            guests: ["alice@me.com", "steve@me.com"],
            date: '2022-12-09',
            time: '7 PM',
            location: "My house",
            theme: 1
        },
        {
            hostName: 'Alice',
            description:
            'A lowkey hang at my favorite bar',
            guests: ["bobby@testmail.com", "guillermo@me.com", "cheryl@mail.com"],
            date: '2022-12-01',
            location: "22 Main St.",
            time: '7 PM',
            theme: 2
        },
    ])
    console.log(parties)
    await User.deleteMany();

    const users = await User.insertMany([
      {
        username: 'Bobby',
        email: 'bobby@testmail.com',
        password: 'pass12345678',
        parties: [parties[0]._id]
      },
      {    
        username: 'Alice',
        email: 'alice@me.com',
        password: 'pass12345678',
        parties: [parties[1]._id]
      }
    ]);
    
    console.log('users and parties seeded');
    process.exit();
});