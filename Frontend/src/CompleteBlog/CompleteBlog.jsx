import React, { useContext } from 'react'
import { useParams } from 'react-router';
import Blog from "../Blog/Blog";
import blogDataProvider from "../blogDataProvider";

function CompleteBlog() {
    const allBlogs = useContext(blogDataProvider);
    console.log(allBlogs)
    const blogId = useParams().id;
    console.log(blogId)
    const blog = allBlogs.filter((blog)=>blog._id===blogId)
    console.log(blog)
    return (
        <div>
        <Blog display='none' description={blog[0].description} title={blog[0].title} subject={blog[0].subject} description={blog[0].description} date={blog[0].date} author={blog[0].full_name} width="70%" />
        </div>
    )
}

export default CompleteBlog
