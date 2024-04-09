const { Schema, model } = require('mongoose');
const cartSchema = require('./Cart');



const clientSchema = new Schema(
    {
        
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
            
        },
        cart: [{cartSchema}]

    },

    {
        toJSON: {
            virtuals: true,
        },
    }
);







const Client = model('Client', clientSchema);


module.exports = Client;
