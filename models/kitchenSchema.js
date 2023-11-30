const mongoose = require("mongoose")
const kitchenSchema = mongoose.Schema({
    itemName: String,
    category: {
        type:String,
        enum:['Cutlery','Utensils','Cookware','Bakeware']
    },
    quantity: {
        type:Number,
        min:1,
        max:15
    }
})
module.exports = mongoose.model("Kitchen",kitchenSchema)