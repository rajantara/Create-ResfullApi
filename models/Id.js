const mongoose = require('mongoose');

const idSchema = new mongoose.Schema({
    Name: String,
    Email: String,
    Phone: Number,
    Profession: String
});

module.exports = mongoose.model('Id', idSchema);