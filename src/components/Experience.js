import React from 'react';
import pic1 from '../img/tcs.jpg';
import pic2 from '../img/twowaits.png';
import pic3 from '../img/ieo.jpg';
import pic4 from '../img/IC-KIET.jpg';

const Experience = () => {
	return (
		<section className="experience" id="experience">
			<div className="max-width">
				<h2 className="title">Work Experience</h2>
				<div className="experience-content">
					<div className="column left">
						<img src={pic1} alt="Profile Pic" />
					</div>
					<div className="column right">
						<div className="text">
							TATA Consultancy Services <br />
							<span>(Systems Engineer - Digital Cadre)</span>
							<br />
							<h4>New Delhi | August 2021 - present</h4>
						</div>
						<ul>
							<li>Working as a Full Stack Developer (ReactJS + Java)</li>
							<li>Collaborated with 30+ colleagues On-Shore as well as Off-Shore locations</li>
							<li>Collaborated with an Agile Team of 16 Members</li>
							<li>
								Worked with product managers to re-architect a multi-page web app into a single page
								web-app
							</li>
							<li>Developed and Deployed changes as per requirement of Product Owner with accuracy</li>
							<li>Tested software for bugs, ﬁxed them along with documentation to increase clarity</li>
						</ul>
						<a href="https://www.tcs.com/" target="_blank">
							Visit Company
						</a>
					</div>
				</div>
				<br />
				<hr />
				<br />
				<div className="experience-content">
					<div className="column right">
						<div className="text">
							Tathastu by TwoWaits <br />
							<span>(Web Development Mentor)</span>
							<br />
							<h4>Remote | April 2021 - July 2021</h4>
						</div>
						<ul>
							<li>
								Mentored over 100+ students in web development (HTML, CSS, JS and Bootstrap) and MERN
								stack
							</li>
							<li>
								2 content classes per week with daily doubt clearing sessions and 3 projects per course
							</li>
							<li>Trained students in MERN Stack under internship provided by TwoWaits</li>
							<li>Hosted many free live YouTube sessions weekly on TwoWaits YouTube Channel</li>
							<li>Provided additional free sessions on Git, GitHub, Heroku, etc.</li>
							<li>Guided students with their ﬁnal year projects</li>
						</ul>
						<a href="http://tathastu.twowaits.in/" target="_blank">
							Visit Company
						</a>
					</div>
					<div className="column left">
						<img src={pic2} alt="Profile Pic" className="image-right" />
					</div>
				</div>
				<br />
				<hr />
				<br />
				<div className="experience-content">
					<div className="column left">
						<img src={pic3} alt="Profile Pic" />
					</div>
					<div className="column right">
						<div className="text">
							Innovatecraft (IEO MAKERS FABLAB PVT. LTD.) <br />
							<span>(Full Stack Web Development Intern)</span>
							<br />
							<h4>Remote | April 2020 - September 2020</h4>
						</div>
						<ul>
							<li>Worked as a Full Stack Developer (HTML, CSS, NodeJS, MongoDB)</li>
							<li>
								Dedicated 100 Hours Learning based upon Web Development (HTML, CSS, JS, Express,
								Node.js, MongoDB)
							</li>
							<li>Implemented my skills on a project while collaborating in a team.</li>
							<li>
								Took the permission of Product Owner and continued to work and add features to the
								website even after the internship was over
							</li>
						</ul>
						<a href="http://innovatecraft.com/" target="_blank">
							Visit Company
						</a>
					</div>
				</div>
				<br />
				<hr />
				<br />
				<div className="experience-content">
					<div className="column right">
						<div className="text">
							Innovation Center, KIET Group of Institutions <br />
							<span>(Student Teaching Assistant)</span>
							<br />
							<h4>Ghaziabad | January 2020 - June 2020</h4>
						</div>
						<ul>
							<li>
								Responsible for Mentoring and training over 75+ first year students in basics of Web Development (HTML, CSS, JS and Bootstrap)
							</li>
							<li>
								2 classes per week (2 hour theory + 2 hour practical) within academic hours with doubt clearing sessions
							</li>
							<li>Trained students in Front-End Web Development under "Additional Skills" Subject added by College to curriculum</li>
							<li>Hosted many live project demos for practical understanding of students</li>
							<li>Provided additional sessions on Git, GitHub, Heroku, etc.</li>
							<li>Guided students in choosing the correct career path for them</li>
						</ul>
						<a href="https://www.kiet.edu/innovation-center" target="_blank">
							Visit Company
						</a>
					</div>
					<div className="column left">
						<img src={pic4} alt="Profile Pic" className="image-right" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
