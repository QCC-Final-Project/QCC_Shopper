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

// Old method for handling asynchronous code (promises)
// router.get('/items', (req, res) => {
//     Item.findAll().then((items) => {
//         res.send(items)
//     }).catch((err) => {
//         res.send(err.message)
//     })

// });

module.exports = router;