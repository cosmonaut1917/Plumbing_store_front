const { User, Product } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const bcrypt = require('bcrypt');

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },
        user: async (parent, { username }) => {
            return User.findOne({ username });
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError('Not logged in');
        },
        products: async () => {
            return Product.find();
        },
        product: async (parent, { _id }) => {
            return Product.findOne({ _id });
        },

        clients: async () => {
            return Client.find();
        }
    },

    Mutation: {
// <<<<<<< feature/deployment
//         addUser: async (parent, { username, email, password, phone }) => {
//             const user = await User.create({ username, email, password, phone });

        addUser: async (parent, { username, email, password, phone, admin }) => {
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await User.create({ username, email, password: hashedPassword, phone, admin });

            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },
        addProduct: async (parent, { productname, description, price, stock, image }) => {
            return Product.create({ productname, description, price, stock, image });
        },
        deleteUser: async (parent, { _id }) => {
            return User.findByIdAndDelete(_id);
        },

//         updateUser: async (parent, {_id, username, email, password, phone}) => {
//             const update = {};
//             if (username) update.username = username;
//             if (email) update.email = email;
//             if (phone) update.phone = phone;
//             // if (admin) update.admin = admin;
//             if (password) {
//                 // Hash the new password before saving it
//                 const salt = await bcrypt.genSalt(10);
//                 update.password = await bcrypt.hash(password, salt);
//             }
            

//             // Update the user in the database
//             if (context.user){
//                 const updatedUser = await User.findByIdAndUpdate(
//                { _id: context.user._id},
//                 { $set: {username, email,firstname, lastname, contact} }, 
//                 { new: true } // Return the updated document
//             );
//             return updatedUser;
//             }
            

//            throw new AuthenticationError('You need to be logged in!');


        updateUser: async (parent, { _id, username, email, password, phone, admin }) => {
            try{
                const update = {};
                if (username) update.username = username;
                if (email) update.email = email;
                if (phone) update.phone = phone;
                if (typeof admin !== 'undefined') update.admin = admin;
                if (password) {
                    update.password = await bcrypt.hash(password, 10);
                }

                const updatedUser = await User.findByIdAndUpdate(_id, { $set: update }, { new: true });

                if (!updatedUser) {
                throw new Error("User not found");
                }
            
                return updatedUser;
            } catch (error) {
                console.error("Error updating user:", error);
                throw new Error("Failed to update user");
            }
        },

        addProfile: async (parent, { firstname, lastname, contact }, context) => {
            if (!context.user) {
                throw new AuthenticationError('You must be logged in to perform this action');
            }
            
            const newClient = await Client.create({ firstname, lastname, contact });
            const updatedUser = await User.findByIdAndUpdate(
                context.user._id, 
                { $set: { firstname: newClient.firstname, lastname: newClient.lastname, contact: newClient.contact } }, 
                { new: true }
            );
            return updatedUser;
        },
   
        
        addToCart: async (parent, { productArray }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate({_id: context.user._id}, { $push: {cart: [productArray]} }, { new: true });
                console.log(updatedUser);
                return updatedUser;
            } 
            throw new AuthenticationError('You need to be logged in!');
        }
    },
};

module.exports = resolvers;
