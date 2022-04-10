import React from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../img/kiet.jpg';
import pic2 from '../img/dps.png';
import pic3 from '../img/dps.jpg';

const Education = () => {
	return (
		<section className="education" id="education">
			<div className="max-width">
				<h2 className="title">Education</h2>
				<div className="education-content">
					<div className="column left">
						<img src={pic1} alt="Profile Pic" />
					</div>
					<div className="column right">
						<div className="text">
							Bachelor of Technology <span>(CSE)</span>
						</div>
						<p>
							In August 2021, I graduated with a Bachelor of Technology in Computer Science and
							Engineering from the KIET Group of Institutions in Ghaziabad, which is affiliated with Dr.
							APJ Abdul Kalam Technical University.
						</p>
						<br />
						<p>
							Throughout my four years of learning, I have acquired a variety of talents such as
							competetive coding, full stack web development, and many others.
						</p>
						<br />
						<div className="subtext">
							CGPA : <span>(8.78)</span> | Division Awarded :<span>(I-DIV HONS)</span>
						</div>
						<a href="https://www.kiet.edu/" target="_blank">
							Visit College
						</a>
					</div>
				</div>
				<br />
				<hr />
				<br />
				<div className="education-content">
					<div className="column right">
						<div className="text">
							Higher Secondary School{' '}
							<span>
								(12<sup>th</sup> Class)
							</span>
						</div>
						<p>
							In July 2016, I graduated from Delhi Public School, Meerut, which is affiliated with the
							Central Board of Secondary Education, with English, Physics, Chemistry, Mathematics,
							Physical Education, and Computer Science(C++) as my subjects.
						</p>
						<br />
						<p>
							Throughout my years of learning, I have mastered a variety of abilities such as programming
							in C++, Problem Solving and many more.
						</p>
						<br />
						<div className="subtext">
							Aggregate : <span>(83.80%)</span>
						</div>
						<a href="https://www.dpsmeerut.in/" target="_blank">
							Visit School
						</a>
					</div>
					<div className="column left">
						<img src={pic2} alt="Profile Pic" className="image-right" />
					</div>
				</div>
				<br />
				<hr />
				<br />
				<div className="education-content">
					<div className="column left">
						<img src={pic3} alt="Profile Pic" />
					</div>
					<div className="column right">
						<div className="text">
							Senior Secondary School{' '}
							<span>
								(10<sup>th</sup> Class)
							</span>
						</div>
						<p>
							In July 2014, I graduated from Delhi Public School, Meerut, which is accredited with the
							Central Board of Secondary Education, with English, Mathematics, Science, Hindi, Social
							Studies, and Information Technology as my subjects.
						</p>
						<br />
						<p>
							Throughout my years of learning, I have mastered a variety of abilities such as English
							communication, basic information technology, and many more.
						</p>
						<br />
						<div className="subtext">
							Aggregate : <span>(91.20%)</span> | CGPA : <span>(9.60)</span>
						</div>
						<a href="https://www.dpsmeerut.in/" target="_blank">
							Visit School
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Education;
