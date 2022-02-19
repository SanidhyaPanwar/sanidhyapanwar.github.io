import {Link} from 'react-router-dom'
import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className="scroll-up-btn">
        <i className="fas fa-angle-up"></i>
    </div>
        <nav className="navbar">
        <div className="max-width">
            <div className="logo"><Link to="/"><span>Portfo</span>lio.</Link></div>
            <ul className="menu">
                <li><Link to="/home" className="menu-btn">Home</Link></li>
                <li><Link to="/about" className="menu-btn">About</Link></li>
                <li><Link to="/experience" className="menu-btn">Experience</Link></li>
                <li><Link to="/education" className="menu-btn">Education</Link></li>
                <li><Link to="/interests" className="menu-btn">Interests</Link></li>
                <li><Link to="/skills" className="menu-btn">Skills</Link></li>
                <li><Link to="/projects" className="menu-btn">Projects</Link></li>
                <li><Link to="/contact" className="menu-btn">Contact</Link></li>
            </ul>
            <div className="menu-btn">
                <i className="fas fa-bars"></i>
            </div>
        </div>
    </nav>
    <br/>
    </>
  )
}

export default Navbar