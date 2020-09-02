const db = require('./db');
const { Item, Order, User } = require('./models');
const userData = [{name: 'Mike', imageUrl: 'address', email: 'a@a.com', password: '123'},
                {name: 'Mike2', imageUrl: 'address', email: 'a@a.com', password: '123'}  
];

const seedDb = async () => {
    try {
        await db.sync({force: true});
        const users = await User.bulkCreate(userData);
        console.log('db synced')
    } catch(err) {
        console.log(err.message);
    } finally {
        await db.close();
        console.log('closing db');
    }
};

seedDb();