import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <div>
<nav className="navbar navbar-expand-sm navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Noxe</a>
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
        {props.userData?<ul className="navbar-nav me-auto mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to='home'>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='movies'>Movies</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='tvshows'>Tvshows</Link>
          </li>        
          <li className="nav-item">
            <Link className="nav-link"to='people'>People</Link>
          </li>
        </ul>:""}
            <ul className="ul navbar-nav ms-auto mt-lg-0">
             <div className="social-icons d-flex align-items-center">
            <i className='fab fa-facebook px-1'></i>
            <i className='fab fa-twitter px-1'></i>
            <i className='fab fa-instagram px-1'></i>
            </div>     
            {
            props.userData?<li className="nav-item">
                   <a className="nav-link logout" onClick={props.logout}>Logout</a>
               </li>
               :
               <>
                <li className="nav-item">
                   <Link className="nav-link" to="login">Login</Link>
               </li>
               <li className="nav-item">
                   <Link className="nav-link" to="register">Register</Link>
               </li>
               </>
               }
           </ul>
            </div>
           
        </div>
  
</nav>

    </div>
  )
}
