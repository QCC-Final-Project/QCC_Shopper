const router = require('express').Router();
const { User, Item, Order }  = require('../db/models');

router.get('/', async(req, res, next) => {
    try {
        const users = await User.findAll();
        res.send(users);
    } catch(err) { next(err) }
})

router.get('/:userId', async(req, res, next) => {
    try {
        const users = await User.findByPk(req.params.userId)
        res.send(users)
    } catch(err) { next(err) }
})

router.get('/:userId/order', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId, {
      include: { model: Order, attribute: ['id'], include: Item },
    });
    const order = user.order;
    const item = user.order.item;
    res.send(userOrder(user, order, item));
  } catch (err) {
    next(err);
  }
});

module.exports = router