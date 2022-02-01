import React from 'react'

function MyBlogs() {
    return (
        <div>
        <div className="container">
        <div>
          <div className="py-5 text-center">
            <h2>Your Posts</h2>
            <p className="lead">Select a post to edit</p>
          </div>
      
          <div className="row g-5">
            <div className="col-md-12 col-lg-12 order-md-last" style={{margin:"auto"}}>
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-primary">Your Blogs</span>
                <span className="badge bg-primary rounded-pill">3</span>
              </h4>
              <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">test Blog 1</h6>
                    <small className="text-muted">test subject 1</small>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">test Blog 2</h6>
                    <small className="text-muted">test subject 2</small>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">test Blog 3</h6>
                    <small className="text-muted">test subject 3</small>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total Posts</span>
                  <strong>3</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default MyBlogs
