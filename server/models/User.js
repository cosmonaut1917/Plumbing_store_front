// User.js is a model that defines the User schema and model. This model is exported from the models directory.
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const clientSchema = require('./Client');
const adminSchema = require('./Admin');



const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        password: {
            type: String,
            required: true,
            minlength: 8,

        },
        client: {
            clientSchema
        },
        admin: {
            adminSchema
        }
    },


    {
        toJSON: {
            virtuals: true,
        },
    }
);

// hash user password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};



const User = model('User', userSchema);

module.exports = User;