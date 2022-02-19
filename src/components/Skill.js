import React from 'react'

const Skill = () => {
    return (
            <section className="skill" id="skill">
                <div className="max-width">
                    <h2 className="title">My skill</h2>
                    <div className="skill-content">
                        <div className="column left">
                            <div className="text">My Skill in Front End Development</div>
                            <p>I have acquired knowledge of Front End Development through constantly 
                                updating myself with new and improved ways of doing things.
                                <br />
                                I always try to learn something new and try it out with practical implementation through Projects.
                            </p>
                            <a href="/skill">Technologies Known</a>
                        </div>
                        <div className="column right">
                            <div className="bars">
                                <div className="info">
                                    <span>HTML</span>
                                    <span>80%</span>
                                </div>
                                <div className="line html"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>CSS</span>
                                    <span>85%</span>
                                </div>
                                <div className="line css"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>JavaScript</span>
                                    <span>70%</span>
                                </div>
                                <div className="line js"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>React.JS</span>
                                    <span>75%</span>
                                </div>
                                <div className="line react"></div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <hr/>
                    <br />
                    <div className="skill-content">
                        <div className="column right">
                            <div className="bars">
                                <div className="info">
                                    <span>Node.JS</span>
                                    <span>75%</span>
                                </div>
                                <div className="line node"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>MongoDB</span>
                                    <span>70%</span>
                                </div>
                                <div className="line mongo"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>Mongoose</span>
                                    <span>80%</span>
                                </div>
                                <div className="line mongoose"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>MySQL</span>
                                    <span>70%</span>
                                </div>
                                <div className="line mysql"></div>
                            </div>
                        </div>
                        <div className="column left">
                        <div className="text">My Skill in Back End Development</div>
                            <p>I am very much fascinated by the inner workings of things which made me interested in Back End Development.
                                <br />
                                To implement my Knowledge of Back End Development , I have developed some major projects like OSI Farming Equipment on Rent , Instagram Clone.
                            </p>
                            <a href="https://www.linkedin.com/in/sanidhya-panwar-824504180/">Go to my LinkedIn</a>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Skill