import React from 'react';
import Layout from '../layouts/Layout';

const ProjectTwo = () => {
    const projects = [
        { img: "/assets/img/pages/projectPageThumb1_1.png", title: "Yoga online school platform", year: "2024" },
        { img: "/assets/img/pages/projectPageThumb1_2.png", title: "Yoga online school platform", year: "2024" },
        { img: "/assets/img/pages/projectPageThumb1_3.png", title: "Yoga online school platform", year: "2024" },
        { img: "/assets/img/pages/projectPageThumb1_4.png", title: "Yoga online school platform", year: "2024" },
        { img: "/assets/img/pages/projectPageThumb1_5.png", title: "Yoga online school platform", year: "2024" }
    ];

    return (
        <Layout>
            <div className="breadcrumb-page-area-one style-2 py-5">
                <div className="container py-5 mt-5">
                    <div className="gt-breadcrumb-wrapper p-5 rounded" style={{ background: 'url(/assets/img/pages/projectPageBg1_2.png)', backgroundSize: 'cover' }}>
                        <div className="title h2 text-white ml-60">Case Study</div>
                    </div>
                </div>
            </div>

            <div className="project-page-area pb-150">
                <div className="container">
                    <div className="section-title mb-5">
                        <div className="title h3 fw-bold text-center">We design intuitive digital experiences that prioritize users, elevate brands</div>
                    </div>

                    <div className="row g-4">
                        {projects.map((project, index) => (
                            <div className="col-lg-6" key={index}>
                                <div className="project-card border rounded overflow-hidden">
                                    <div className="thumb position-relative">
                                        <img src={project.img} alt="thumb" className="w-100" />
                                        <div className="thumb-content p-4 bg-dark text-white opacity-75 position-absolute bottom-0 w-100">
                                            <div className="h5 mb-0">{project.title}</div>
                                            <span className="small">Design - {project.year}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="contact-form-area bg-light py-150">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4">
                            <div className="address-meta p-4 bg-white border h-100">
                                <div className="mb-4">
                                    <div className="fw-bold mb-1">USA</div>
                                    <span className="text-muted small">New York, 287 Park Avenue South</span>
                                </div>
                                <div className="mb-4">
                                    <div className="fw-bold mb-1">Poland</div>
                                    <span className="text-muted small">Katowice, Armii Krajowej St., 322</span>
                                </div>
                                <div>
                                    <div className="fw-bold mb-1">Ukraine</div>
                                    <span className="text-muted small">Kyiv, Goncharnaya St., 9a</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8">
                            <div className="contact-form p-5 bg-white border h-100">
                                <h3 className="mb-4">Get a Design Consultation free quote</h3>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-6"><input type="text" className="form-control" placeholder="Name" /></div>
                                        <div className="col-md-6"><input type="email" className="form-control" placeholder="Email" /></div>
                                        <div className="col-md-6"><input type="text" className="form-control" placeholder="About project" /></div>
                                        <div className="col-md-6">
                                            <select className="form-select">
                                                <option selected disabled>Where did you hear about us?</option>
                                                <option>Web Development</option>
                                                <option>Web Design</option>
                                            </select>
                                        </div>
                                        <div className="col-12"><textarea className="form-control" rows="4" placeholder="Message"></textarea></div>
                                        <div className="col-12 mt-4"><button className="theme-btn">Send Message</button></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProjectTwo;
