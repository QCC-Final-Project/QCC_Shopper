const router = require('express').Router();
const { Item, User, Order } = require('../db/models');

router.get('/items', async (req, res) => {
    try {
        const items = await Item.findAll();
        res.send(items);
    } catch(err) {
        res.send(err.message)
    }
});

router.use('/users', require('./userRoute'));

//test code
// router.post('/items', async (req, res, next) => {
//     try {
//         const { name, price, description, imageUrl } = req.body;
//         const newItem = await Item.create({ name, price, description, imageUrl });
//         console.log(req.body)
//         res.send(newItem)
//     } catch (error) {
//         next(error)
//     }
// })

// Old method for handling asynchronous code (promises)
// router.get('/items', (req, res) => {
//     Item.findAll().then((items) => {
//         res.send(items)
//     }).catch((err) => {
//         res.send(err.message)
//     })

// });

module.exports = router;