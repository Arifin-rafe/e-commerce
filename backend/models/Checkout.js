const mongoose = require('mongoose');

const checkoutSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
},
{_id: false}
);
const checkoutSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
    }
})