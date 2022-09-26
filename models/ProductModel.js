const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true //khali hunu hunna
        
    },
    price:{
        type: Number,
        required : true,
        min: 1 //minimum price 
    },
    description:{
        type: String,
        minlength : 100
    },
    category: {
        type: String
    },
    image:{
        type: String
    },
    rating:{
        rate:{
            type:String
        },
        count:{
            type:Number
        }
    }
})

const ProductModel = mongoose.model('product',productSchema);//uta mongodb ma products banaeko cha tra eta che singula product lekhne and automatically plural ma change huncha

module.exports = ProductModel;