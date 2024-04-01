// index.js is a central file that exports all models in the models directory. This imports all models from a single location.
const User = require('./User');
const Product = require('./Product');

module.exports = { User, Product };
