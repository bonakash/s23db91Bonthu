var express = require('express');
const kitchen_controlers= require('../controllers/kitchen');
var router = express.Router();
/* GET costumes */
router.get('/', kitchen_controlers.kitchen_view_all_Page );
module.exports = router;

// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//     res.render('kitchen', { title: 'Search Results - Kitchen Items' });
// });

// module.exports = router;
