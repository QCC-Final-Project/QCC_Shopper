const db = require('./db');
const { Item, Order, User } = require('./models');
const userData = [{name: 'David RubeusH', address: '17091 Knots Landing, Addison, Texas 75001', email: 'RubeusH@msn.com', password: 'C8nUgue$5i7'},
  {name: 'Joe Baddock', imageUrl: 'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png',address:'17091 Knots Landing, Addison, Texas 75001', email: 'Baddock@gmail.com', password: 'kn0wH0w$123'},
  {name: 'Cindy Hetty', address:'500 Oracle Parkway Redwood Shores, CA 94065', email: 'hetty@oracle.com', password: 'take8Gue$s'},
  {name: 'George Alpharde', imageUrl: 'https://cdn.pixabay.com/photo/2016/11/01/21/11/avatar-1789663__340.png', address: '6320 Golden Triangle Dr, Greenbelt, MD 20770-3230', email: 'Alphard@gmail.com', password: '1D0n7#venTry'},
  {name: 'John Baruffio',  address:'20 W Main St Bloomsburg, PA 17815', email: 'Baruffio@yahoo.com', password: '1My$try9u#st'},
  {name: 'Tina Hbeery', imageUrl: 'https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807__340.png', address:'9113 Sleepyhorse Ln, Greenbelt, MD 20770-3230', email: 'Hbeery@msn.com', password: '1Uwi1ln#v3r'}  
];
const itemData = [{name: 'Red', price: 80, description: 'A super premium-quality, 100% acrylic interior coating, formulated using our proprietary Color Lock® Technology.', imageUrl: 'https://media4.picsearch.com/is?hWdrry4gwxKi_sfcTI1dPQcsMo4XEhXAt7yCeNiPLFQ&height=341'},
  {name: 'Blue', price: 43, description: 'A premium-quality acrylic latex paint designed for easy application to a wide variety of interior surfaces.', imageUrl: 'https://media5.picsearch.com/is?AM821UvYZrDGXfmmH4dqpvuVltIBmwjMM9mb8PaPyCQ&height=227'},
  {name: 'Green', price: 64, description: 'A premium-quality paint which adheres powerfully to exterior substrates. With easy application by brush, roller, or spray, this coating delivers a durable finish. Exterior paint may require additional time for pick up availability.'}
];
const seedDb = async () => {
    try {
        await db.sync({force: true});
        const users = await User.bulkCreate(userData);
        const items = await Item.bulkCreate(itemData);
        console.log('db synced')
    } catch(err) {
        console.log(err.message);
    } finally {
        await db.close();
        console.log('closing db');
    }
};
seedDb();