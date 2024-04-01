const { User, Product } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find()
        },
        user: async (parent, { email }) => {
            return User.findOne({ email })
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

        }

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
       





    },
};

module.exports = resolvers;
