const { Schema, Types } = require('mongoose');
const cartSchema = require('./Cart');



const clientSchema = new Schema(
    {
        clientId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        firstname: {
            type: String,
            required: true,

        },
        lastname: {
            type: String,
            required: true,

        },
        contact: {
            type: String,
            required: true,
        },
        cart: [{cartSchema}]



    },

    {
        toJSON: {
            virtuals: true,
        },
    }
);









module.exports = clientSchema;
