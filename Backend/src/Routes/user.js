const express = require('express');
const router = express.Router();
const {User} = require('../Models/user')
const jwt = require('jsonwebtoken');

router.post('/',async (req,res)=>{
    const {full_name,username,email,password} = req.body;
    user = new User({
        full_name,
        username,
        email,
        password
    })
    await user.save();
    res.send(user);
});

router.post('/login',async (req,res)=>{
    try{
    const {username,password} = req.body;
    const user = await User.findOne({username,password});
    const token = jwt.sign({_id:user._id},'jwtPrivateKey',{algorithm:'HS256'});
    res.send(token);
    }catch(err){
        console.log(err)
    }
});

module.exports = router;