const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const helmet = require('helmet');
const mongoose = require('mongoose');
const allBlogs = require('./Routes/blog');
const user = require('./Routes/user');
const app = express();

// app.use(express.static(path.join(__dirname,'../public')));
app.use(express.json());
app.use(cors({
    origin:'http://localhost:3000'
}));
app.use(
    express.urlencoded({
      extended: true
    })
  )
app.use(helmet());
if(app.get('env')==="development"){
    app.use(morgan('tiny'));
}
app.use('/blog',allBlogs);
app.use('/user',user);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

mongoose.connect('mongodb://localhost/blog').then(()=>console.log("Connencted to MongoDB")).catch((err)=>{console.error("Some error while connnecting to mongodb",err)});

const course = [
    {id:1,title:"post1"},
    {id:2,title:"psost2"},
]

app.get('/',(req,res)=>{
    res.send(course);   
})


const port = process.env.PORT || 80 ;

app.listen(port,()=>{
    console.log('Server running on port',port);
})