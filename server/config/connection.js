// MongoDB connection configuration
const mongoose = require('mongoose');
// MongoDB connection string
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/plumbingstore');

module.exports = mongoose.connection;
