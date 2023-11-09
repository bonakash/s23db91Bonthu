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
exports.kitchen_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Kitchen();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"kitchen_type":"goat", "cost":12, "size":"large"}
    document.itemName = req.body.itemName;
    document.quantity = req.body.quantity;
    document.category = req.body.category;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
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
    thekitchen= await Kitchen.find();
    res.render('kitchen', { title: 'kitchen Search Results', results: thekitchen });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
