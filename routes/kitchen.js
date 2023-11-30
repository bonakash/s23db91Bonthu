var express = require('express');
const kitchen_controlers= require('../controllers/kitchen');
var router = express.Router();

const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    res.redirect("/login");
}

/* GET kitchens */
router.get('/', kitchen_controlers.kitchen_view_all_Page );
/* GET detail kitchen page */
router.get('/detail', kitchen_controlers.kitchen_view_one_Page);
/* GET create kitchen page */
router.get('/create', kitchen_controlers.kitchen_create_Page);
/* GET create update page */
router.get('/update',secured, kitchen_controlers.kitchen_update_Page);
/* GET delete kitchen page */
router.get('/delete', kitchen_controlers.kitchen_delete_Page);

module.exports = router;

// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//     res.render('kitchen', { title: 'Search Results - Kitchen Items' });
// });

// module.exports = router;
