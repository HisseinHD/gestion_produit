const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stockStatus: {
        type: String,
        enum: ['en stock', 'petite stock', 'pas en stock'],
        default:"en stock",
      
    }
});

module.exports = mongoose.model('Product', productSchema);
