import React from 'react';
import pic from '../img/profile.png';
import resume from '../files/SanidhyaResume.pdf';

const About = () => {
	return (
		<section className="about" id="about">
			<div className="max-width">
				<h2 className="title">About Me</h2>
				<div className="about-content">
					<div className="column left">
						<img src={pic} alt="Profile Pic" />
					</div>
					<div className="column right">
						<div className="text">
							I'm Sanidhya, driven by <span className="curiosity">never-ending curiosity</span>
						</div>
						<p>
							With a strong foundation in <b>Computer Science, Web Development, and Databases</b>, I am passionate about building efficient, scalable, and secure systems.
						</p>
						<ul>
							<li>
								<b>Problem-Solving Mindset: </b>I identify critical issues before they escalate and optimize code for performance.
							</li>
							<li>
								<b>Automation Enthusiast: </b>I streamline workflows by automating repetitive tasks and improving efficiency.
							</li>
							<li>
								<b>Security-Focused Development: </b>I ensure robust security in applications, from frontend state management to backend authentication.
							</li>
							<li>
								<b>Innovation & Learning: </b>I actively explore new technologies and apply them to real-world challenges.
							</li>
							<li>
								<b>Full-Stack & Database Expertise: </b>I develop end-to-end solutions with a focus on modular, maintainable code.
							</li>
						</ul>
						<p className="open-to">
							🔍 <i>Open to opportunities in</i> <b>Full Stack Web Development, Database Management, and Automation-driven solutions.</b>
						</p>
						<a href={resume} target="_blank" rel="noreferrer">
							Download Resume
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
