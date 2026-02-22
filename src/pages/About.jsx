import React from 'react';
import Layout from '../layouts/Layout';
import Breadcrumb from '../components/common/Breadcrumb';
import AboutCard from '../components/cards/AboutCard';

const About = () => {
    return (
        <Layout>
            <Breadcrumb
                title="About Us"
                text="We are an automation-first digital engineering partner, delivering intelligent workflows and custom SaaS products that help businesses scale effortlessly."
                thumbImg="/assets/img/pages/aboutPageThumb1_1.png"
                bgImg="/assets/img/pages/aboutPageBg1_2.png"
            />

            {/* Stats Section */}
            <div className="about-area fix">
                <div className="about-wrapper style-3 pb-150">
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <AboutCard
                                    icon="/assets/img/home-3/about/aboutIcon1_1.png"
                                    number="40"
                                    text="% Increase in Process Efficiency"
                                />
                            </div>
                            <div className="col-xl-6 col-md-12">
                                <AboutCard
                                    style={2}
                                    number="100"
                                    text="SaaS Products & Automations"
                                    thumbOne="/assets/img/home-3/about/aboutIThumb1_1.png"
                                    thumbTwo="/assets/img/home-3/about/aboutIThumb1_2.png"
                                />
                            </div>
                            <div className="col-xl-3 col-md-6 col-lg-6">
                                <AboutCard
                                    icon="/assets/img/home-3/about/aboutIcon1_2.png"
                                    number="10k"
                                    text="Hours Saved for Clients Annually"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Partner Section */}
            <div className="about-page-area-two gt-sticky-wrap pb-150 fix">
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-xl-6">
                            <div className="section-title gt-sticky">
                                <p>Why partner with us</p>
                                <div className="title gt_text_invert_3">At Ronix Labs, we blend AI automation, custom SaaS engineering, and intelligent workflows to streamline your business.</div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="main-content">
                                <div className="card-item">
                                    <div className="title">Automation expertise, seamless execution</div>
                                    <p className="text">Recognized for our ability to deliver high-impact automation tools that solve complex operational challenges.</p>
                                </div>
                                <div className="card-item">
                                    <div className="title">Your vision, our focus</div>
                                    <p className="text">We craft high-performance SaaS solutions, removing manual bottlenecks and maximizing your team's productivity.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default About;
