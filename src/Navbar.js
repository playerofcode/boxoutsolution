import {useState} from 'react'
import './index.css';
import { Link } from "react-router-dom";
const Navbar = () => {
    const [toggle,setToggle]=useState(false);
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
  <div className="container">
    <Link  className="navbar-brand" to="/">  <img src="./images/logo.jpg" alt='Boxout Solution' className='logo_style'/>
</Link> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
    onClick={()=>setToggle(!toggle)}
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${toggle ? "show" : ""}`}>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
        <li className="nav-item">
          <Link  className="nav-link" aria-current="page" to="/"  onClick={()=>setToggle(!toggle)}>Home</Link> 
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to="/appointment"  onClick={()=>setToggle(!toggle)}>Appointment</Link> 
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to="/solution"  onClick={()=>setToggle(!toggle)}>Solution</Link> 
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to="/contact"  onClick={()=>setToggle(!toggle)}>Contact</Link> 
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar