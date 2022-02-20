import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='center'>
            <span>Come Hang out with me!</span>  
            <span>
            <div className="social">
                <Link to="https://twitter.com/sanidhya_panwar"><i className="fab fa-twitter" aria-hidden="true"></i></Link>
                <Link to="https://www.instagram.com/sanidhya_panwar/"><i className="fab fa-instagram" aria-hidden="true"></i></Link>
                <Link to="https://www.linkedin.com/in/sanidhya-panwar-824504180/"><i className="fab fa-linkedin" aria-hidden="true"></i></Link>
                <Link to="https://github.com/SanidhyaPanwar"><i className="fab fa-github" aria-hidden="true"></i></Link>
            </div>
        </span>
        <span>Created By <a>Sanidhya Panwar</a></span><br/>
        <h4><span>Switch to <Link to="https://sanidhyaportfolio.herokuapp.com/">Single page version</Link></span></h4>
    </footer>
  )
}

export default Footer
