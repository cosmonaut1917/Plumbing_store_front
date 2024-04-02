const { Schema, Types } = require('mongoose');




const bidSchema = new Schema(
    {
        bidId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        product: [{
            type: Schema.Types.ObjectId,
            ref: 'Product',

        }],
       
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









module.exports = bidSchema;
