import React from 'react'
import {Link} from 'react-router-dom'
import pic1 from '../img/osi.png'
import pic2 from '../img/ig.JPG'
import pic3 from '../img/Portfolio.JPG'
import pic4 from '../img/breakingbad.png'
import pic5 from '../img/covid.jpg'
import pic6 from '../img/SaaS.JPG'

const Projects = () => {
  return (
    <section className="projects" id="projects">
        <div className="max-width">
            <h2 className="title">My Projects</h2>
            <div className="project-content">
                <div className="card">
                    <div className="box">
                    <img src={pic1} alt=""/>
                        <div className="text">OSI Farming</div>
                        <p>
                            A Website to get Farming Equipments on Rent for the poor farmers who cannot afford to buy the Equipments for themselves.                       
                        </p>
                        <div className="projectLinks">
                        <div className="link1">
                                <a  href="https://osi-farming.herokuapp.com/" target="_blank">Visit Project</a>
                            </div>
                            <div className="link2">
                            <Link to="/project/osi-farming">Know More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <img src={pic2} alt=""/>
                        <div className="text">Sanidhya Insta</div>
                        <p>
                            A simple Instagram clone based on MERN Stack. It has features like Password reset , follow , unfollow , like comment and much more!
                        </p>
                        <div className="projectLinks">
                            <div className="link1">
                                <a  href="https://osi-farming.herokuapp.com/" target="_blank">Visit Project</a>
                            </div>
                            <div className="link2">
                            <Link to="/osi-farming">Know More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                    <img src={pic3} alt=""/>
                        <div className="text">Panwar Clinic</div>
                        <p>
                            A Website for my Father (Dr.Indra Pal Singh) & the services offered at his clinic.
                            I put my web development skills to practical use.
                            </p>
                        <div className="projectLinks">
                        <div className="link1">
                                <a  href="https://osi-farming.herokuapp.com/" target="_blank">Visit Project</a>
                            </div>
                            <div className="link2">
                            <Link to="/osi-farming">Know More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-content">
                <div className="card">
                    <div className="box">
                    <img src={pic4} alt=""/>
                        <div className="text">Breaking Bad Wiki</div>
                        <p>
                            A Website to get a list of characters and their details from the popular show Breaking Bad by using their public API.
                            </p>
                        <div className="projectLinks">
                        <div className="link1">
                                <a  href="https://osi-farming.herokuapp.com/" target="_blank">Visit Project</a>
                            </div>
                            <div className="link2">
                            <Link to="/osi-farming">Know More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                    <img src={pic5} alt=""/>
                        <div className="text">Covid-19 Tracker</div>
                        <p>
                            A simple covid-19 tracker website using public API to fetch the details of covid-19 by country.
                            </p>
                        <div className="projectLinks">
                        <div className="link1">
                                <a  href="https://osi-farming.herokuapp.com/" target="_blank">Visit Project</a>
                            </div>
                            <div className="link2">
                            <Link to="/osi-farming">Know More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                    <img src={pic6} alt="SaaS"/>
                        <div className="text">SaaS clone</div>
                        <p>
                            A Simple clone of a SaaS website (Freshworks). I cloned the Homepage and all the navigation links into a l  ook of my choice
                            </p>
                        <div className="projectLinks">
                        <div className="link1">
                                <a  href="https://osi-farming.herokuapp.com/" target="_blank">Visit Project</a>
                            </div>
                            <div className="link2">
                            <Link to="/osi-farming">Know More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects
