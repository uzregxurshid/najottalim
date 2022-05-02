const { default: mongoose } = require("mongoose");

/* Creating a new schema for the flowers collection. */

const flowers = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:'Number',
        default:0,
        required:true
    }
});


const flowersmodel = mongoose.model('flowers',flowers);

module.exports = flowersmodel;