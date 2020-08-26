const router = require('express').Router();

router.get('/students', (req, res) => {
    res.send(['hello'])
});

module.exports = router;