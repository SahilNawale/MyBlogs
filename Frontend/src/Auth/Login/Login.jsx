import React from 'react'
import axiosInstance from '../../Axios';
import './styles.css'
function Login() {

  const [formData,setFormData] = React.useState();

    const handleFormDataChange = (event) => {
      setFormData({
        ...formData,
        [event.target.name]:event.target.value
      });
    }

    const handleFormSubmit = (e)=>{
      e.preventDefault();
      axiosInstance.post("/user/login",{
        username:formData.username,
        password:formData.password,
      })
      .then((res)=>{
        sessionStorage.setItem('access_token',res.data.access);
        sessionStorage.setItem('refresh_token',res.data.refresh);
        console.log(res.data)
      })
      .then(()=>{
        // window.location = "/";
    });
    }

    return (
        <div class="text-center">
        <div class="form-signin">
          <form onChange={handleFormDataChange}>
            <h2>BLOGS</h2>
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
        
            <div class="form-floating">
              <input type="text" class="form-control" id="floatingInput" placeholder="abcd1234"/>
              <label for="floatingInput">Username</label>
            </div>
            <div class="form-floating">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
              <label for="floatingPassword">Password</label>
            </div>

            <button class="w-100 btn btn-lg btn-primary" type="submit" onClick={handleFormSubmit}>Sign in</button>
          </form>
        </div>  
        </div>
    )
}

export default Login
