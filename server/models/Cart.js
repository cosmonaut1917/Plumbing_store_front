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
        client: {
            type: Schema.Types.ObjectId,
            ref: 'Client',
        },






    },

    {
        toJSON: {
            virtuals: true,
        },
    }
);









module.exports = cartSchema;
