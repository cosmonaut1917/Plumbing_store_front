const { Schema, Types} = require('mongoose');
const bidSchema = require('./Bid');




const adminSchema = new Schema(
    {
        adminId: {
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
        company: {
            type: String,
            required: true,

        },
        bid: [{bidSchema}]




    },

    {
        toJSON: {
            virtuals: true,
        },
    }
);









module.exports = adminSchema;
