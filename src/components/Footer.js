import React from 'react';

const Footer = () => {
  return (
    <footer className='center'>
            <span>Come Hang out with me!</span>  
            <span>
            <div className="social">
                <a href="https://twitter.com/sanidhya_panwar"> <i className="fab fa-twitter" aria-hidden="true"></i></a>
                <a href="https://www.instagram.com/sanidhya_panwar/"> <i className="fab fa-instagram" aria-hidden="true"></i></a>
                <a href="https://www.linkedin.com/in/sanidhya-panwar-824504180/"> <i className="fab fa-linkedin" aria-hidden="true"></i></a>
                <a href="https://github.com/SanidhyaPanwar"> <i className="fab fa-github" aria-hidden="true"></i></a>
            </div>
        </span>
        <span>Created By Sanidhya Panwar</span><br/>
        {/* <h4><span>Switch to <a href="https://sanidhyaportfolio.herokuapp.com/">Single page version</a></span></h4> */}
    </footer>
  )
}

export default Footer
