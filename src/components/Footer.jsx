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
                                <svg xmlns="http://www.w3.org/2000/svg" width="137" height="36" viewBox="0 0 137 36"
                                    fill="none">
                                    <path
                                        d="M50 0H57.9818C63.3707 0.0509908 65.7094 2.09065 65.7094 6.78187V14.7875C65.7094 19.4278 63.3707 21.4674 57.9818 21.5184H55.0331V35.5921H50V0ZM60.6254 14.7875V6.78187C60.6254 2.19263 59.6086 0.509915 57.8293 0.509915H55.0331V21.0085H57.8293C59.6086 21.0085 60.6254 19.3258 60.6254 14.7875Z"
                                        fill="black" />
                                    <path
                                        d="M70.4104 8.31161C68.6819 8.31161 67.36 6.93484 67.36 5.20113C67.36 3.51841 68.6819 2.14164 70.4104 2.14164C72.0881 2.14164 73.4608 3.51841 73.4608 5.20113C73.4608 6.93484 72.0881 8.31161 70.4104 8.31161ZM67.8684 10.1983H72.9524V35.5921H67.8684V10.1983Z"
                                        fill="black" />
                                    <path
                                        d="M91.6644 14.7875C91.6644 18.5099 90.0884 20.6006 86.733 21.2635C90.0884 21.9263 91.6644 24.017 91.6644 27.7904V35.5921H86.5805V27.7904C86.5805 23.2011 85.5637 21.5184 83.7843 21.5184C82.0049 21.5184 80.9882 23.2011 80.9882 27.7904V35.5921H75.9551V27.7904C75.9551 24.017 77.4802 21.9263 80.8356 21.2635C77.4802 20.6006 75.9551 18.5099 75.9551 14.7875V10.1983H80.9882V14.7875C80.9882 19.3258 82.0049 21.0085 83.7843 21.0085C85.5637 21.0085 86.5805 19.3258 86.5805 14.7875V10.1983H91.6644V14.7875Z"
                                        fill="black" />
                                    <path
                                        d="M110.135 29.2691C110.135 34.0113 107.745 36 102.254 36C96.7638 36 94.4252 34.0113 94.4252 29.2691V16.5722C94.4252 11.83 96.7638 9.79037 102.254 9.79037C107.745 9.79037 110.135 11.83 110.135 16.5722V21.5184H99.4583V29.2691C99.4583 33.8584 100.475 35.5411 102.254 35.5411C104.034 35.5411 105.051 33.8584 105.051 29.2691V27.5864H110.135V29.2691ZM99.4583 21.0085H105.051V16.5722C105.051 11.983 104.034 10.3003 102.254 10.3003C100.475 10.3003 99.4583 11.983 99.4583 16.5722V21.0085Z"
                                        fill="black" />
                                    <path d="M112.95 0H117.983V35.5921H112.95V0Z" fill="black" />
                                    <path
                                        d="M121.291 10.1983H129.222C134.661 10.1983 137 12.289 137 16.9802V17.6941H131.916V16.9802C131.916 12.3909 130.899 10.7082 129.12 10.7082H126.324V35.5921H121.291V10.1983Z"
                                        fill="black" />
                                    <path
                                        d="M8.77266 9.34161C10.597 7.83128 10.8517 5.12797 9.34134 3.30362C7.83103 1.47926 5.12772 1.22469 3.30334 2.73503C1.47896 4.24536 1.22435 6.94866 2.73466 8.77302C4.24497 10.5974 6.94828 10.8519 8.77266 9.34161Z"
                                        fill="black" />
                                    <path
                                        d="M6.05792 0.776407C3.1512 0.765171 0.785691 3.11242 0.774454 6.01915C0.763218 8.92587 3.11047 11.2914 6.01719 11.3026C8.92392 11.3138 11.2894 8.96659 11.3007 6.05987C11.3119 3.15315 8.96464 0.787706 6.05792 0.776407ZM6.01949 10.6984C3.44645 10.6884 1.36869 8.59448 1.37868 6.02144C1.38868 3.44847 3.48258 1.3707 6.05562 1.38063C8.62866 1.39057 10.7064 3.48447 10.6965 6.05751C10.6864 8.63061 8.59253 10.7084 6.01949 10.6984Z"
                                        fill="black" />
                                    <path
                                        d="M40.4282 12.887C40.4282 12.8647 40.4268 12.8429 40.4268 12.8208C40.3701 18.516 35.8893 22.9836 30.1845 22.9615L7.67882 22.8744L7.64188 32.4135C7.63419 34.4021 5.9235 36.0076 3.93495 35.9998C1.94639 35.9921 0.248187 34.3734 0.255885 32.3849L0.293011 22.7833C0.309152 18.6207 3.90577 15.0391 8.0685 15.0553L30.3588 15.1416C31.8701 15.1474 33.0995 14.0567 33.1053 12.5454C33.1112 11.034 31.8903 9.93386 30.379 9.92796L11.2092 9.85377C11.2092 9.85377 13.9968 5.95426 11.2378 2.46777L30.2636 2.5414C35.9684 2.5635 40.4144 7.12473 40.4268 12.8208C40.427 12.7985 40.4285 12.7768 40.4286 12.7545L40.4282 12.887Z"
                                        fill="black" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

