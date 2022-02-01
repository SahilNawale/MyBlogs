
import { Link } from 'react-router-dom'
import './styles.css'

function Blog(props) {
    return (
        <div>
        <div className="card" style={{width:props.width}}>
        <div className="card-body">
        <div id='view_more_background' style={{display:props.display}}>
            <Link to={"/blogdetails/"+props.id} className='btn btn-light'>View Post</Link>
        </div>    
          <h5 className="card-title">{props.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.subject}</h6>
          {window.location.href !== 'http://localhost:3000/'?
          <div style={{
            margin:"5px 0px",
            fontWeight: "400",
            borderRadius: "5px",
            background: "#f3f3f3",
            padding: "5px 20px"
          }}>
            {props.description}
            </div>:null}
          <span className="card-link">{props.author}</span>
          <span className="card-link">{props.date}</span>
        </div>
      </div>
        </div>
    )
}

export default Blog
