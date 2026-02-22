import React from 'react';
import Layout from '../layouts/Layout';

const AboutTwo = () => {
    return (
        <Layout>
            <div className="breadcrumb-page-area-one style-2 pt-150 pb-150 fix">
                <div className="breadcrumb-page-wrap pt-150 pb-150" style={{ background: 'url(/assets/img/pages/aboutPageBg1_1.png)' }}>
                    <div className="container">
                        <div className="gt-breadcrumb-wrapper">
                            <div className="title h1 fw-bold">About us</div>
                            <div className="right-content">
                                <p className="text h5 mb-4">Blending design and tech to create inspiring digital experiences.</p>
                                <div className="our-clint d-flex align-items-center">
                                    <ul className="list-inline mb-0 me-3">
                                        <li className="list-inline-item"><img src="/assets/img/home-1/hero/heroVector1_1.png" alt="img" style={{ width: '40px' }} /></li>
                                        <li className="list-inline-item ms-n2"><img src="/assets/img/home-1/hero/heroVector1_2.png" alt="img" style={{ width: '40px' }} /></li>
                                        <li className="list-inline-item ms-n2"><img src="/assets/img/home-1/hero/heroVector1_3.png" alt="img" style={{ width: '40px' }} /></li>
                                        <li className="list-inline-item ms-n2"><img src="/assets/img/home-1/hero/heroVector1_4.png" alt="img" style={{ width: '40px' }} /></li>
                                    </ul>
                                    <p className="text-muted small mb-0">trusted clients world wide</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-area pb-150">
                <div className="container">
                    <div className="row gy-5 align-items-center">
                        <div className="col-xl-6">
                            <div className="about-left-content position-relative">
                                <div className="about-review bg-dark text-white p-3 position-absolute top-0 start-0 z-index-1 mt-n4 ms-n4">
                                    <span className="h3 fw-bold">4.9</span>
                                    <div className="small">Cluth.co</div>
                                </div>
                                <div className="thumb fix">
                                    <img src="/assets/img/home-4/about/aboutThumb1_1.png" alt="thumb" className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="about-right-content">
                                <div className="section-title mb-4">
                                    <div className="sub-title text-uppercase mb-2">About our agency</div>
                                    <div className="title h2 fw-bold">Innovative digital marketing, and smarter web experiences</div>
                                </div>
                                <div className="about-text-content mb-4 text-muted">
                                    <p className="fw-bold text-dark">Excellence in brand strategy</p>
                                    <p>Consumers today rely heavily on digital platforms to make informed decisions. Before engaging with a brand, more than half of them—around 51%—conduct online research.</p>
                                </div>
                                <div className="about-card mb-5">
                                    {[
                                        { id: "01", title: "Research & goal" },
                                        { id: "02", title: "Ideation & design" },
                                        { id: "03", title: "Development part" }
                                    ].map((item, index) => (
                                        <div className="d-flex align-items-center mb-3 pb-3 border-bottom" key={index}>
                                            <span className="h5 fw-bold me-3">{item.id}</span>
                                            <div className="card-title fw-bold">{item.title}</div>
                                        </div>
                                    ))}
                                </div>
                                <button className="theme-btn">Know More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="work-process-area-three py-5 bg-light">
                <div className="container py-5">
                    <div className="section-title-three text-center mb-5">
                        <div className="title h2">Our working process</div>
                    </div>
                    <div className="row justify-content-center">
                        {["Briefing", "Discovery", "MVP Development", "Support & Grow"].map((step, index) => (
                            <div className="col-xl-3 col-md-6 mb-4" key={index}>
                                <div className="p-4 bg-white border h-100">
                                    <div className="h5 fw-bold mb-3">{index + 1}. {step}</div>
                                    <ul className="list-unstyled small text-muted">
                                        {step === "Discovery" && (
                                            <><li>- Research</li><li>- User flow</li><li>- Prototyping</li></>
                                        )}
                                        {step === "MVP Development" && (
                                            <><li>- Frontend</li><li>- Backend</li><li>- QA</li></>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="about-counter-area py-150">
                <div className="container">
                    <div className="row g-4 text-center">
                        {[
                            { count: "2.5k+", label: "Happy Clients" },
                            { count: "125+", label: "Daily Transactions" },
                            { count: "360k+", label: "App Downloads" },
                            { count: "1k+", label: "Five Star Reviews" }
                        ].map((stat, index) => (
                            <div className="col-lg-3 col-md-6" key={index}>
                                <div className="stat-item">
                                    <div className="h2 fw-bold">{stat.count}</div>
                                    <div className="text-muted text-uppercase small">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AboutTwo;
