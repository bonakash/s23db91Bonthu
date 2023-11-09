const mongoose = require("mongoose")
const kitchenSchema = mongoose.Schema({
    itemName: String,
    category: String,
    quantity: Number
})
module.exports = mongoose.model("Kitchen",kitchenSchema)