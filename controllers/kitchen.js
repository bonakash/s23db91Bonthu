var Kitchen = require('../models/kitchenSchema');
// List of all Kitchens
exports.kitchen_list = async function(req, res) {
    try{
    theItems = await Kitchen.find();
    res.send(theItems);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
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

// VIEWS
// Handle a show all view
exports.kitchen_view_all_Page = async function(req, res) {
    try{
    thekitchen= await kitchen.find();
    res.render('kitchen', { title: 'kitchen Search Results', results: thekitchen });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
