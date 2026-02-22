import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../common/SectionTitle';
import AboutCard from '../cards/AboutCard';

const AboutSection = () => {
    return (
        <section className="about-area fix">
            <div className="about-wrapper style-3 pb-150">
                <div className="container">
                    <SectionTitle title="Precision Engineering" subtitle="Why Ronix Labs?" />

                    <div className="row gy-4">
                        <div className="col-xl-3 order-xl-1 order-lg-1 order-md-1 col-lg-6 col-md-6">
                            <AboutCard
                                icon="/assets/img/home-3/about/aboutIcon1_1.png"
                                number="40"
                                text="% Increase in Process Efficiency"
                            />
                        </div>

                        <div className="col-xl-6 order-xl-2 order-lg-3 col-md-12">
                            <AboutCard
                                style={2}
                                number="75"
                                text="AI SaaS Product Deployments"
                                thumbOne="/assets/img/home-3/about/aboutIThumb1_1.png"
                                thumbTwo="/assets/img/home-3/about/aboutIThumb1_2.png"
                                videoLink="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                            />
                        </div>

                        <div className="col-xl-3 order-xl-3 order-lg-2 col-md-6">
                            <AboutCard
                                icon="/assets/img/home-3/about/aboutIcon1_2.png"
                                number="10k"
                                text="Hours Saved for Clients Annually"
                            />
                        </div>
                    </div>

                    <div className="about-bottom-content">
                        <h3 className="main-text title-anim">
                            We bridge the gap between complex engineering and elegant design. Our systems are built for performance and engineered for humans.
                        </h3>
                        <p className="text title-anim">
                            Ronix Labs is a UI/UX-first engineering collective. We don't just build software; we architect experiences that move businesses forward.
                        </p>
                        <div className="simple-btn-white gt_fade_anim">
                            <Link to="/about" className="gt-hover-btn gt-hover-btn-item gt-btn-circle-2 d-inline-flex align-items-center justify-content-center flex-column bg-2">
                                <span className="gt-btn-circle-text-2">
                                    learn more about us
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M16.0034 9.414L7.39642 18.021L5.98242 16.607L14.5884 8H7.00342V6H18.0034V17H16.0034V9.414Z" fill="black" />
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="thumb scroll-thumb img-container-2 fix">
                    <img className="scroll-img" src="/assets/img/home-3/about/aboutIThumb1_3.jpg" alt="thumb" />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
