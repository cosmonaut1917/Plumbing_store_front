const { Schema } = require('mongoose');




const cartSchema = new Schema(
    {
        cartId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),

            
        },
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









module.exports = cartSchema;
