var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var kitchen_controller = require('../controllers/kitchen');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/kitchen', kitchen_controller.kitchen_create_post);
// DELETE request to delete Costume.
router.delete('/kitchen/:id', kitchen_controller.kitchen_delete);
// PUT request to update Costume.
router.put('/kitchen/:id', kitchen_controller.kitchen_update_put);
// GET request for one Costume.
router.get('/kitchen/:id', kitchen_controller.kitchen_detail);
// GET request for list of all Costume items.
router.get('/kitchen', kitchen_controller.kitchen_list);
module.exports = router;