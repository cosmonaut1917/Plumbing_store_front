const { Schema } = require('mongoose');




const cartSchema = new Schema(
    {
        //Not sure if this is needed since Mongo should create an ID by default
        // cartId: {
        //     type: Schema.Types.ObjectId,
        //     default: () => new Types.ObjectId(),
        // },
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
        //To simplify  You can add back if you have time adding user instead
        // client: {
        //     type: Schema.Types.ObjectId,
        //     ref: 'Client',
        // },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }

    },

    {
        toJSON: {
            virtuals: true,
        },
    }
);


module.exports = cartSchema;
