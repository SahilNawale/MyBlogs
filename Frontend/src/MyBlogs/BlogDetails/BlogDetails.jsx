import React from 'react'

function BlogDetails() {
    return (
        <div>
        <div className="container">
        <div>
          <div className="py-5 text-center">
            <h2>Edit blog</h2>
            <p className="lead">Fill the form below correctly</p>
          </div>
      
          <div className="row g-5">
            <div className="col-md-5 col-lg-4 order-md-last">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-primary">Your Blogs</span>
                <span className="badge bg-primary rounded-pill">3</span>
              </h4>
              <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">Blog name</h6>
                    <small className="text-muted">Brief description</small>
                  </div>
                  <span className="text-muted">$12</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">Second product</h6>
                    <small className="text-muted">Brief description</small>
                  </div>
                  <span className="text-muted">$8</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">Third item</h6>
                    <small className="text-muted">Brief description</small>
                  </div>
                  <span className="text-muted">$5</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>$20</strong>
                </li>
              </ul>
            </div>
            <div className="col-md-7 col-lg-8">
              <h4 className="mb-3">Details</h4>
              <form className="needs-validation" noValidate>
                <div className="row g-3">
      
                  <div className="col-12">
                    <label htmlFor="title" className="form-label">Title</label>
                    <div className="input-group has-validation">
                      <input type="text" className="form-control" id="title" placeholder="Title" required/>
                    <div className="invalid-feedback">
                        Title is required.
                      </div>
                    </div>
                  </div>
      
                  <div className="col-12">
                    <label htmlFor="subject" className="form-label">Subject <span className="text-muted">(Optional)</span></label>
                    <input type="subject" className="form-control" id="subject"/>
                    <div className="invalid-feedback">
                      Please enter a valid subject.
                    </div>
                  </div>
      
                  <div className="col-12">
                    <label htmlFor="Description" className="form-label">Description</label>
                    <textarea type="text" className="form-control" id="Description" placeholder="This is description of my blog" required/>
                    <div className="invalid-feedback">
                      Please enter a Description.
                    </div>
                  </div>
      
                  <div className="col-md-5">
                    <label htmlFor="Category" className="form-label">Category</label>
                    <select className="form-select" id="Category" required>
                      <option value="">Choose...</option>
                      <option>United States</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select a valid Category.
                    </div>
                  </div>
                </div>
      
                <hr className="my-4"/>
      
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="is_private"/>
                  <label className="form-check-label" htmlFor="is_private">Private Post</label>
                </div>
      
      
                <hr className="my-4"/>
                <button className="w-100 btn btn-primary btn-lg" type="submit">Save Changes</button>
              </form>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default BlogDetails
