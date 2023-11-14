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
exports.kitchen_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Kitchen.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
    exports.kitchen_update_put = async function(req, res) {
        console.log(`update on id ${req.params.id} with body
        ${JSON.stringify(req.body)}`)
        try {
        let toUpdate = await Kitchen.findById( req.params.id)
        // Do updates of properties
        if(req.body.itemName) toUpdate.itemName = req.body.itemName;
        if(req.body.quantity) toUpdate.quantity = req.body.quantity;
        if(req.body.category) toUpdate.category = req.body.category;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
        } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
        failed`);
        }
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
