const { Schema, model } = require('mongoose');




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
       



    },

    {
        toJSON: {
            virtuals: true,
        },
    }
);







const Client = model('Client', clientSchema);


module.exports = Client;
