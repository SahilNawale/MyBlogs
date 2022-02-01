const express = require('express');
const {Blog} = require('../Models/blog');
const { getUserDetails } = require('../Models/user');
const router = express.Router();

router.post('/sort',async (req,res)=>{
    const field = req.body.field;
    const order = req.body.order;

    try{
        if(field==="date"){
        const allBlogs = await Blog.find().sort({date:order});
        res.send(allBlogs);
        }
        else{
            const allBlogs = await Blog.find().sort({title:order});
            res.send(allBlogs);        
        }
    }catch(e){
        console.log(e)
    }

});
router.get('/',async(req,res)=>{
    const allBlogs = await Blog.find();
    res.send(allBlogs);
})

router.post('/',async (req,res)=>{
    console.log("hit")
    try{
    const user_details = await getUserDetails(req);
    const {title,subject,description,category,rating} = req.body
    if(['travel','art','technology','politics','other'].includes(category) === false){
        throw new Error("Not a valid Category")
    } 
    const blog = new Blog({
        title,
        full_name:user_details.full_name,
        subject,
        user_id,
        category,
        description
    });
    const result = await blog.save();
    res.send(user_details);
    }
    catch(err){
        res.send("some error "+err);
        console.log(err)
    }

});

router.put('/:id',async (req,res)=>{
    const {title,subject,description} = req.body;
    const user_details = await getUserDetails(req);
    const blog = await Blog.updateOne(
        {user_id:user_details._id,_id:req.params.id},
        {title,subject,description,full_name:user_details.full_name,user_id:user_details._id});
    res.send(blog);
});

router.get('/rate/:id',async (req,res)=>{
    try{
    const blogId = req.params.id;
    const user_details = await getUserDetails(req);
    const blog = await Blog.findOne({_id:blogId,rating:user_details._id});
    if(blog.length!==0){
        res.send("You have already rated this blog")
    }
    const result = await (blog.rating).push(user_details._id);
    await blog.save();
    res.send(blog.rating);
    }catch(err){
        console.log(err);
        res.send(err); 
    }
})

module.exports = router;