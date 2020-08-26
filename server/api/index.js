const router = require('express').Router();
const { Item, User, Order } = require('../db/models');

router.get('/students', async (req, res) => {
    let items = await Item.findAll();
    res.send(items)
});

module.exports = router;