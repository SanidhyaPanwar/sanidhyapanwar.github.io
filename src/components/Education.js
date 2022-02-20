import React from 'react'
import {Link} from 'react-router-dom'
import pic1 from '../img/kiet.jpg'
import pic2 from '../img/dps.png'
import pic3 from '../img/dps.jpg'

const Education = () => {
  return (
    <section className="education" id="education">
        <div className="max-width">
            <h2 className="title">Education</h2>
            <div className="education-content">
                <div className="column left">
                <img src={pic1} alt='Profile Pic' />
                </div>
                <div className="column right">
                    <div className="text">Bachelor of Technology <span>(CSE)</span></div>
                    <p>I have completed my Bachelors of Technology in Computer Science and Engineering branch
                        from KIET Group of Institutions, Ghaziabad affiliated to Dr. APJ Abdul Kalam Technical University
                        in August 2021.
                    </p>
                    <br/>
                    <p>
                        I have acquired various skills like Competetive Coding , Full Stack Web Development and many more 
                        throughout the 4 years of Learning.
                    </p>
                    <br/>
                    <div className="subtext">CGPA : <span>(8.78)</span> | Division Awarded :<span>(I-DIV HONS)</span></div>
                    <Link to="https://www.kiet.edu/" target="_blank">Visit College</Link>
                </div>
            </div>
            <br/><hr/><br/>
            <div className="education-content">
                <div className="column right">
                <div className="text">Higher Secondary School <span>(12<sup>th</sup> Class)</span></div>
                    <p>I have completed my Higher Secondary School with English, Physics, Chemistry, Mathematics, Physical Education 
                        and Computer Science(C++) as my subjects from Delhi Public School, Meerut affiliated to 
                        Central Board of Secondary Education in July 2016.
                    </p>
                    <br/>
                    <p>
                        I have acquired various skills like programming in C++, Problem Solving and many more 
                        throughout my years of Learning.
                    </p>
                    <br/>
                    <div className="subtext">Aggregate : <span>(83.80%)</span></div>
                    <Link to="https://www.dpsmeerut.in/" target="_blank">Visit School</Link></div>
                <div className="column left">
                <img src={pic2} alt='Profile Pic' className="image-right"/>
                </div>
            </div>
            <br/><hr/><br/>
            <div className="education-content">
                <div className="column left">
                <img src={pic3} alt='Profile Pic' />
                </div>
                <div className="column right">
                <div className="text">Senior Secondary School <span>(10<sup>th</sup> Class)</span></div>
                    <p>I have completed my Senior Secondary School with English, Mathematics, Science, Hindi, Social Studies
                        and Information Technology as my subjects from Delhi Public School, Meerut affiliated to 
                        Central Board of Secondary Education in July 2014.
                    </p>
                    <br/>
                    <p>
                        I have acquired various skills like English communication , basic of Information Technology and many more 
                        throughout my years of Learning.
                    </p>
                    <br/>
                    <div className="subtext">Aggregate : <span>(91.20%)</span> | CGPA : <span>(9.60)</span></div>
                    <Link to="https://www.dpsmeerut.in/" target="_blank">Visit School</Link></div>
            </div>
        </div>
    </section>
  )
}

export default Education