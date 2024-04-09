const { Schema, model } = require('mongoose');




const cartSchema = new Schema(
    {
       
        product: [{
            type: Schema.Types.ObjectId,
            ref: 'Product',

        }],
        quantity: {
            type: Number,
        
        },
        total: {
            type: Number,
            required: true,
        },
     






    },

    {
        toJSON: {
            virtuals: true,
        },
    }
);









const Cart = model('Cart', cartSchema);

module.exports =Cart;
