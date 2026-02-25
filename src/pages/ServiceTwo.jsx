import React from 'react';
import Layout from '../layouts/Layout';

const ServiceTwo = () => {
    const services = [
        { id: "01", title: "App Design", items: ["MOBILE APP UI/UX", "WIREFRAMING & PROTOTYPING", "CROSS-PLATFORM APP DESIGN"] },
        { id: "02", title: "Web Design", items: ["WEBSITE UI/UX", "RESPONSIVE DESIGN", "LANDING PAGE DESIGN"] },
        { id: "03", title: "Creative Media", items: ["GRAPHIC DESIGN", "VIDEO EDITING", "MOTION GRAPHICS"] },
        { id: "04", title: "Advertising", items: ["SOCIAL MEDIA ADS", "PPC CAMPAIGNS", "BRAND STRATEGY"] },
        { id: "05", title: "Digital Marketing", items: ["SEO OPTIMIZATION", "CONTENT MARKETING", "EMAIL CAMPAIGNS"] },
        { id: "06", title: "Consulting", items: ["BUSINESS STRATEGY", "TECH CONSULTING", "MARKET ANALYSIS"] }
    ];

    return (
        <Layout>
            <div className="breadcrumb-page-area-one style-2 py-5">
                <div className="container py-5 mt-5">
                    <div className="gt-breadcrumb-wrapper p-5 rounded" style={{ background: 'url(/assets/img/pages/breadcrumbPageThumb1_1.png)', backgroundSize: 'cover' }}>
                        <div className="title h2 text-white">Our service 02</div>
                    </div>
                </div>
            </div>

            <div className="service-page-cta py-150">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3"><img src="/assets/img/logo/official-logo.png" alt="logo" className="mb-4" style={{ height: '40px', width: 'auto' }} /></div>
                        <div className="col-lg-9">
                            <h4 className="text-muted fw-normal">We provide creative and professional design solutions that help brands stand out and connect with their audience. From concept to final delivery, every project is crafted with attention to detail and innovation.</h4>
                        </div>
                    </div>
                </div>
            </div>

            <section className="service-area-one pb-150">
                <div className="container">
                    <div className="row g-4">
                        {services.map((service, index) => (
                            <div className="col-xl-4 col-md-6" key={index}>
                                <div className="service-card p-4 bg-white border h-100">
                                    <div className="d-flex justify-content-between mb-4">
                                        <span className="h5 text-muted">{service.id}</span>
                                        <div className="avatars d-flex">
                                            {[1, 2, 3].map(i => <img key={i} src={`/assets/img/home-1/services/serviceVactor1_${i}.png`} alt="avatar" style={{ width: '30px', borderRadius: '50%', marginLeft: '-10px' }} />)}
                                        </div>
                                    </div>
                                    <h3 className="h4 mb-4">{service.title}</h3>
                                    <ul className="list-unstyled small text-muted mb-4">
                                        {service.items.map((item, i) => <li key={i} className="mb-2">• {item}</li>)}
                                    </ul>
                                    <button className="theme-btn btn-sm">Service Details</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ServiceTwo;
