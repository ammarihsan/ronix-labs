import React from 'react';
import Layout from '../layouts/Layout';
import Breadcrumb from '../components/common/Breadcrumb';

const Services = () => {
    return (
        <Layout>
            <Breadcrumb
                title="AI Automation Services"
                text="We build intelligent workflows and custom SaaS products that streamline your operations and drive measurable business growth."
                bgImg="/assets/img/pages/breadcrumbPageBg1_2.png"
                wrapperClassName="gt-breadcrumb-wrapper mb-0"
            />

            {/* Service Page Section */}
            <div className="service-page-area-one fix mb-150">
                <div className="service-page-wrapper service-page pt-150 pb-150">
                    <div className="marquee-service-1">
                        <div className="marquee">
                            <div className="marquee-group">
                                <div className="text">AI Automation <span className="star-icon"><img src="/assets/img/star.png" alt="" /></span></div>
                                <div className="text">AI Automation <span className="star-icon"><img src="/assets/img/star.png" alt="" /></span></div>
                                <div className="text">AI Automation <span className="star-icon"><img src="/assets/img/star.png" alt="" /></span></div>
                                <div className="text">AI Automation <span className="star-icon"><img src="/assets/img/star.png" alt="" /></span></div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="service-main-content">
                            <section className="faq-area-four fix">
                                <div className="faq-wrapper custom-faq">
                                    <div className="faq-content">
                                        <div className="faq-main-content">
                                            <div className="accordion style3 add-faq accordion-flush" id="accordionFlushExample">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="false" aria-controls="collapseOne1">
                                                            <span className="number">01</span>
                                                            Intelligent Workflows
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                                        <div className="accordion-body">
                                                            <div className="body-wrap">
                                                                <div className="faq-thumb text-star">
                                                                    <img src="/assets/img/pages/servicePageThumb1_1.png" alt="thumb" />
                                                                </div>
                                                                <div className="faq-content-wrap">
                                                                    <div className="faq-content">
                                                                        <div className="items">
                                                                            <div className="title">Process Automation Blueprint</div>
                                                                            <p className="text">Mapping and automating high-impact tasks to save time and reduce errors.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* More services can be added here */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Services;
