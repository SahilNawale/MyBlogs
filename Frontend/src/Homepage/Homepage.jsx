import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axiosInstance from '../Axios'
import Blog from '../Blog/Blog'
import blogDataProvider from '../blogDataProvider'
import Carousel from './Carousel/Carousel'
import './styles.css'

function Homepage() {
    const [blogData,setBlogData] = useState(useContext(blogDataProvider));

    const handleClick =(field,order)=>{
        axiosInstance.post('/blog/sort',{field:field,order:order}).then((res)=>{
            setBlogData(res.data);
        })
    }
    
    if(blogData===undefined){
      return<h1>Loading</h1>
    }
    return (
        <div>
            <div className='homepage_header'>
           <div className='homepage_header_title'>Publish your passions, your way</div>
           <div style={{widows:'100%'}}>
           Create a unique and beautiful blog. It’s easy and free.
           </div>
           <button className='btn btn-warning header_button'><Link to='/writeblog' style={{textDecoration:"none",color:"black"}}>Write a Blog</Link></button>
           </div>
           <Carousel/>
           <div className="container">
           
           <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary">Sort</button>
                <button onClick={()=>{handleClick('date','1')}} type="button" className="btn btn-primary">Oldest</button>
                <button onClick={()=>{handleClick('date','-1')}} type="button" className="btn btn-primary">Newest</button>
                <button onClick={()=>{handleClick('title','1')}} type="button" className="btn btn-primary">Title A-Z</button>
                <button onClick={()=>{handleClick('title','-1')}} type="button" className="btn btn-primary">Title Z-A</button>
            </div>
            <div className="row">
            {blogData.map((blog,index)=>(
                <div key={index} className="col-md-6 col-sm-12 col-xs-12">
                <Blog id={blog._id} title={blog.title} subject={blog.subject} description={blog.description} date={blog.date} author={blog.full_name} style={{width:"100%"}}/>
                </div>
            ))}
            </div>
            </div>
        </div>
    )
}
export default Homepage
