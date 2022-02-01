const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const jwtDecode = require('jwt-decode');

const User = mongoose.model('User',new mongoose.Schema({
    full_name:String,
    username:String,
    email:String,
    password:String
}))

const getUserDetails = async (req) =>{
    const token = req.headers.authorization;
    jwt.verify(token, 'jwtPrivateKey',{algorithms:['HS256']})
    user_id = jwtDecode(token)._id
    const user_details = await User.findOne({_id:user_id})
    return user_details
}

exports.User = User;
exports.getUserDetails = getUserDetails;