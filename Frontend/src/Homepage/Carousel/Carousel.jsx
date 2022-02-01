import React, { useContext } from "react";
import Blog from "../../Blog/Blog";
import blogDataProvider from "../../blogDataProvider";
import './styles.css'

function Carousel() {
  let blogData = useContext(blogDataProvider);
  let top3Blogs = [];
  for (let i=0;i<3;i++){
    let ratings = []; 
    blogData.map(o => ratings.push(o.rating.length));
    let max_rating = Math.max(...ratings); 
    let bestBlog = blogData.filter((blog)=>blog.rating.length===max_rating)
    top3Blogs.push(bestBlog[0]);
    blogData = blogData.filter((blog)=>blog.rating.length!==max_rating)
  }

  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
      style={{marginBottom:"50px"}}
    >
    <div className='top_posts'>Top Posts</div>
      <div className="carousel-inner">
      {top3Blogs.map((blog,index)=>(
        <div key={index} className={index===0?"carousel-item active":"carousel-item"} data-bs-interval="2000">
        <Blog id={blog._id} title={blog.title} subject={blog.subject} description={blog.description} date={blog.date} author={blog.full_name} width="70%" />
      </div>
      ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      <div className="carousel-indicators" style={{margin:"-20px 0px"}}>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
    </div>
  );
}

export default Carousel;
