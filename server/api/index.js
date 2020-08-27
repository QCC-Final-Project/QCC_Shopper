const router = require('express').Router();
const { Item, User, Order } = require('../db/models');

router.get('/items', async (req, res) => {
    const items = await Item.findAll();
    res.send(items);
});

module.exports = router;