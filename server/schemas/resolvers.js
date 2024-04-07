const { User, Product, Client } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const bcrypt = require('bcrypt');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('client');
        },
        user: async (parent, { email }) => {
            return User.findOne({ email }).populate('client');

        },

        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id })
            }
            throw AuthenticationError;
        },
        products: async () => {
            return Product.find()
        },
        
        product: async (parent, { _id }) => {
            return Product.findOne({ _id })

        },
        
        

    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw AuthenticationError;
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthenticationError;
            }

            const token = signToken(user);

            return { token, user };
        },
        addProduct: async (parent, { productname, description, price, stock, image }) => {
            return Product.create({ productname, description, price, stock, image });
        },
        deleteUser: async (parent, {_id}) =>{
            return User.findByIdAndDelete({_id})
        },
        updateUser: async (parent, {_id, username, email, password, firstname, lastname, contact},context) => {
            const update = {};
            // if (username) update.username = username;
            // if (email) update.email = email;
            // if (password) {
                // Hash the new password before saving it
                // const salt = await bcrypt.genSalt(10);
            //     update.password = await bcrypt.hash(password, salt);
            // }

            // Update the user in the database
            if (context.user){
                const updatedUser = await User.findByIdAndUpdate(
               { _id: context.user._id},
                { $set: {username, email,firstname, lastname, contact} }, 
                { new: true } // Return the updated document
            );
            return updatedUser;
            }
            

           throw new AuthenticationError('You need to be logged in!');
        },
   
        
        // addToCart: async (parent, { product }, context) => {
        //     if (context.user) {
        //         const updatedClient = await Client.findOneAndUpdate({_id: context.user._id}, { $push: {cart: {product}} }, { new: true });
        //         console.log(updatedClient);
        //         return updatedClient;
        //     } 
        //     throw new AuthenticationError('You need to be logged in!');
        // }
    },
};

module.exports = resolvers;

