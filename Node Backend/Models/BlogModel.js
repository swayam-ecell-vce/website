const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BlogSchema = new Schema({
    Title: String,
    Author: String,
    Content: String,
    Date: String,
    Image: String,
    Tags: [String],
})

module.exports = mongoose.model('Blog', BlogSchema);