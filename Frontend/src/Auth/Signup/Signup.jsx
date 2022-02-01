import React from 'react'

function Signup() {
    return (
        <div class="text-center">
        <div class="form-signin">
          <form>
            <h2>BLOGS</h2>
            <h1 class="h3 mb-3 fw-normal">Please sign up</h1>
            <div class="form-floating">
                    <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
                    <label for="floatingInput">Full Name</label>
            </div>
            <div class="form-floating">
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username"/>
                    <label for="floatingInput">Username</label>
            </div>
            <div class="form-floating">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input type="password" class="form-control" id="floatingInput" placeholder="name@example.com"/>
              <label for="floatingInput">Password</label>
            </div>
            <div class="form-floating">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
              <label for="floatingPassword">Confirm Password</label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
          </form>
        </div>  
        </div>
    )
}

export default Signup
