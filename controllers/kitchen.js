var Kitchen = require('../models/kitchenSchema');
// List of all Kitchens
exports.kitchen_list = function(req, res) {
res.send('NOT IMPLEMENTED: Kitchen list');
};
// for a specific Kitchen.
exports.kitchen_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Kitchen detail: ' + req.params.id);
};
// Handle Kitchen create on POST.
exports.kitchen_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Kitchen create POST');
};
// Handle Kitchen delete form on DELETE.
exports.kitchen_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Kitchen delete DELETE ' + req.params.id);
};
// Handle Kitchen update form on PUT.
exports.kitchen_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Kitchen update PUT' + req.params.id);
};