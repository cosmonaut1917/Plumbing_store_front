const { Schema, model } = require('mongoose');




const productSchema = new Schema(
    {
        productname: {
            type: String,
            required: true,

        },
        description: {
            type: String,
            required: true,

        },
        price: {
            type: Number,
            required: true,


        },
        stock: {
            type: Number,
            required: true,
        },
        
        image: {
            type: String,
          default: 'https://via.placeholder.com/150',
        }
    },


    {
        toJSON: {
            virtuals: true,
        },
    }
);





const Product = model('Product', productSchema);

module.exports = Product;
