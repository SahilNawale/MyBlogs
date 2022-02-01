const mongoose = require('mongoose');

const Blog = mongoose.model("blog", new mongoose.Schema({
    title:String,
    full_name:String,
    subject:String,
    description:String,
    user_id:String,
    category:String,
    rating:[String],
    date:{type:Date,default:Date.now}
}));

exports.Blog = Blog;