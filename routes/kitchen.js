var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('kitchen', { title: 'Search Results - Kitchen Items' });
});

module.exports = router;
