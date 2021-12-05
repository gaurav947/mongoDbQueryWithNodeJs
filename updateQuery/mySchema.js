const mongoose = require('mongoose');
const dbInit = require('./Db_init');
var mySchema = mongoose.Schema({
    item:String,
    price:Number,
    myArr:Array,
    category:String,
    mydocument:[
        {
            name:String,
            price:Number    
        }
    ]
})

module.exports = myS = mongoose.model("mySchema",mySchema);