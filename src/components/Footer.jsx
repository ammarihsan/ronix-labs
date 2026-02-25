import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer-area-three fix">
            <div className="footer-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-12 col-md-12">
                            <div className="left-content">
                                <div className="footer-items">
                                    <div className="title">Our company</div>
                                    <ul className="footer-menu">
                                        <li><Link to="/services">Services</Link></li>
                                        <li><Link to="/projects">Cases</Link></li>
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/contact">Team & Advisors</Link></li>
                                        <li><Link to="/contact">Career</Link></li>
                                        <li><Link to="/blog">Blog</Link></li>
                                    </ul>
                                </div>

                                <div className="footer-items">
                                    <div className="title">Main services</div>
                                    <ul className="footer-menu">
                                        <li><Link to="/services">AI Strategy Consulting</Link></li>
                                        <li><Link to="/services">Custom ML Models</Link></li>
                                        <li><Link to="/services">Natural Language Processing</Link></li>
                                        <li><Link to="/services">Computer Vision Services</Link></li>
                                        <li><Link to="/services">Intelligent Automation</Link></li>
                                        <li><Link to="/services">MLOps Solutions</Link></li>
                                    </ul>
                                </div>

                                <div className="footer-items">
                                    <div className="title">Industries</div>
                                    <ul className="footer-menu">
                                        <li><Link to="/services">FinTech</Link><span>AI-First</span></li>
                                        <li><Link to="/services">HealthTech</Link></li>
                                        <li><Link to="/services">E-commerce AI</Link></li>
                                        <li><Link to="/services">Logistics & Supply Chain</Link></li>
                                        <li><Link to="/services">Cyber Security</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="footer-items">
                                <div className="title">let’s talk</div>
                                <div className="contact-info">
                                    <a className="maill" href="mailto:hello@ronixlabs.com">hello@ronixlabs.com</a>
                                    <div className="company-copy-right">
                                        <span>©
                                            <Link to="/">Ronix Labs</Link>
                                            , 2026
                                        </span>

                                        <Link class="policy" to="/contact">Privacy Policy</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-12 col-md-12">
                            <div className="footer-items border-content">
                                <div className="title">Works around the world</div>
                                <div className="company-info mb-20">
                                    <h3 className="title">16:36<span>(UTC+3)</span></h3>
                                    <p className="text">tuesday, aug 25</p>
                                    <p className="location">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                viewBox="0 0 18 18" fill="none">
                                                <path
                                                    d="M9.00036 0C5.40581 0 2.48145 2.92437 2.48145 6.51888C2.48145 10.9798 8.31524 17.5287 8.56362 17.8053C8.79691 18.0651 9.20423 18.0647 9.43711 17.8053C9.68549 17.5287 15.5193 10.9798 15.5193 6.51888C15.5192 2.92437 12.5949 0 9.00036 0ZM9.00036 9.79871C7.19186 9.79871 5.72057 8.32739 5.72057 6.51888C5.72057 4.71037 7.19189 3.23909 9.00036 3.23909C10.8088 3.23909 12.2801 4.71041 12.2801 6.51892C12.2801 8.32743 10.8088 9.79871 9.00036 9.79871Z"
                                                    fill="black" />
                                            </svg>
                                        </span>
                                        Philippines, kyiv office
                                    </p>
                                </div>

                                <div className="company-info ">
                                    <h3 className="title">14:56<span>(UTC+3)</span></h3>
                                    <p className="text">wednesday, aug 29</p>
                                    <p className="location">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                viewBox="0 0 18 18" fill="none">
                                                <path
                                                    d="M9.00036 0C5.40581 0 2.48145 2.92437 2.48145 6.51888C2.48145 10.9798 8.31524 17.5287 8.56362 17.8053C8.79691 18.0651 9.20423 18.0647 9.43711 17.8053C9.68549 17.5287 15.5193 10.9798 15.5193 6.51888C15.5192 2.92437 12.5949 0 9.00036 0ZM9.00036 9.79871C7.19186 9.79871 5.72057 8.32739 5.72057 6.51888C5.72057 4.71037 7.19189 3.23909 9.00036 3.23909C10.8088 3.23909 12.2801 4.71041 12.2801 6.51892C12.2801 8.32743 10.8088 9.79871 9.00036 9.79871Z"
                                                    fill="black" />
                                            </svg>
                                        </span>
                                        norway, king city office
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container">
                        <div className="footer-bottom-content justify-content-center">
                            <div className="logo">
                                <img src="/assets/img/logo/official-logo.png" alt="Ronix Labs" style={{ height: '40px', width: 'auto' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

