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
    exports.kitchen_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Kitchen.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
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

    // Handle a show one view with id specified by query
    exports.kitchen_view_one_Page = async function(req, res) {
        console.log("single view for id " + req.query.id)
        try{
        result = await Kitchen.findById( req.query.id)
        res.render('kitchendetail',
        { title: 'Kitchen Detail', toShow: result });
        }
        catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
        }
    };

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.kitchen_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('kitchencreate', { title: 'Kitchen Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
};



// Handle building the view for updating a Kitchen.
// query provides the id
exports.kitchen_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Kitchen.findById(req.query.id)
    res.render('kitchenupdate', { title: 'Kitchen Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.kitchen_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Kitchen.findById(req.query.id)
    res.render('kitchendelete', { title: 'Kitchen Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };