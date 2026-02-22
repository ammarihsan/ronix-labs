import React from 'react';
import Layout from '../layouts/Layout';

const TeamDetails = () => {
    return (
        <Layout>
            <div className="team-page-area pt-150 pb-150">
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-xl-5 col-lg-5">
                            <div className="team-right-content">
                                <div className="thumb fix">
                                    <img src="/assets/img/pages/teamPageThumb1_1.png" alt="thumb" />
                                    <div className="thumb-border"></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-7 col-lg-7">
                            <div className="team-member-info p-4">
                                <div className="info-top mb-4">
                                    <div className="name h2">Delwar hossain</div>
                                    <div className="position text-uppercase text-muted">web developer</div>
                                </div>

                                <div className="text-content mb-4">
                                    <p className="text mb-3">
                                        Mauris eu eleifend massa. Sed congue, magna sed blandit tincidunt, lectus mauris euismod leo, vitae placerat quam justo eget eros. Sed luctus mi at mi ultrices, eu scelerisque dolor accumsan. Aenean massa lorem, imperdiet id nunc vel, scelerisque egestas metus.
                                    </p>
                                    <p className="text">
                                        eu semper leo mauris consectetur lectus. Quisque blandit orci auctor nulla vehicula, et consectetur dui blandit. Sed arcu tellus, placerat feugiat scelerisque facilisis, vehicula a arcu.
                                    </p>
                                </div>

                                <div className="meta-content mb-4">
                                    <ul className="list-unstyled">
                                        <li><strong>Email:</strong> <a href="mailto:sophia.contact@gmail.com">sophia.contact@gmail.com</a></li>
                                        <li><strong>Call me:</strong> <a href="tel:+11321400259010"> +11 3214 0025 9010</a></li>
                                    </ul>
                                </div>

                                <button className="theme-btn">Download My Resume</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="team-progress-area pb-150">
                <div className="container">
                    <div className="row gy-5 align-items-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="personal-skill">
                                <div className="title h3 mb-3">Personal skills</div>
                                <div className="text mb-4">Excellence projecting is devonshire dispatched remarkably on estimating.</div>

                                <div className="skill-progress-bar">
                                    {[
                                        { title: "Programming Language", percent: 88 },
                                        { title: "Backend Development", percent: 95 },
                                        { title: "Product Design", percent: 80 }
                                    ].map((skill, index) => (
                                        <div className="progress-info mb-4" key={index}>
                                            <div className="d-flex justify-content-between mb-2">
                                                <span className="progress-title">{skill.title}</span>
                                                <span className="progress-percent fw-bold">{skill.percent}%</span>
                                            </div>
                                            <div className="progress" style={{ height: '8px' }}>
                                                <div className="progress-bar bg-dark" role="progressbar" style={{ width: `${skill.percent}%` }}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6">
                            <div className="contact-form style-3 p-4 bg-light border">
                                <div className="title h3 mb-2">Contact with me</div>
                                <div className="text mb-4 text-muted">Your email address will not be published. Required fields are marked *</div>
                                <form action="#">
                                    <div className="row gy-3">
                                        <div className="col-md-6"><input type="text" className="form-control" placeholder="Phone Number*" /></div>
                                        <div className="col-md-6"><input type="email" className="form-control" placeholder="Email Address*" /></div>
                                        <div className="col-12"><textarea className="form-control" rows="4" placeholder="Tell Us About Project*"></textarea></div>
                                        <div className="col-12"><button type="submit" className="theme-btn w-100">Send Message</button></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="work-experience pb-150">
                <div className="container">
                    <div className="main-title h3 mb-5">My working experience</div>
                    {[1, 2].map((_, index) => (
                        <div className="work-experience-items mb-5 p-4 border" key={index}>
                            <div className="top-content d-flex justify-content-between align-items-center mb-3">
                                <div className="work-info">
                                    <div className="title fw-bold">Pixelone</div>
                                    <div className="date text-muted fst-italic">Jan 2021 - Current</div>
                                </div>
                                <div className="position text-uppercase">Lead business advisor</div>
                            </div>
                            <div className="text-content text-muted">
                                Mauris eu eleifend massa. Sed congue, magna sed blandit tincidunt, lectus mauris euismod leo, vitae placerat quam justo eget eros.
                                Curabitur accumsan ipsum non fermentum rutrum. Curabitur dignissim est imperdiet magna maximus.
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default TeamDetails;
