import React, { useEffect, useState } from 'react';
import './App.css';
import { Route } from 'react-router';
import Footer from './Footer/Footer';
import Homepage from './Homepage/Homepage';
import Navbar from './Navbar/Navbar';
import WriteBlog from './WriteBlog/WriteBlog';
import Login from './Auth/Login/Login';
import Signup from './Auth/Signup/Signup';
import MyBlogs from './MyBlogs/MyBlogs';
import BlogDetails from './MyBlogs/BlogDetails/BlogDetails';
import blogDataProvider from './blogDataProvider';
import axiosInstance from './Axios';
import CompleteBlog from './CompleteBlog/CompleteBlog';

function App() {

  const [blogData,setBlogData] = useState();

  useEffect(()=>{ 
    const getBlogs = async () => {
    const response = (await axiosInstance.get('/blog')).data;
    setBlogData(response)
  }
  getBlogs();
  },[]);
  
  if(blogData===undefined){
    return<h1>Loading</h1>
  }
  return (
    <React.Fragment>
    <blogDataProvider.Provider value={blogData}> 
        <Navbar/>  
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/blogdetails/:id' component={CompleteBlog}/>
        <Route exact path='/writeblog' component={WriteBlog}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={Signup}/>
        <Route exact path='/myblogs' component={MyBlogs}/>
        <Route exact path='/myblogs/:id' component={BlogDetails}/>
        <Footer/>
    </blogDataProvider.Provider>    
    </React.Fragment>    
  );
}

export default App;
