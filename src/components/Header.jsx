import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header-section">
            <div id="header-sticky" className="header-3">
                <div className="container-fluid">
                    <div className="mega-menu-wrapper">
                        <div className="header-main">
                            <div className="logo d-flex align-items-center">
                                <Link to="/" className="header-logo-2">
                                    <img className="navbar-logo" src="/assets/img/logo/official-logo.png" alt="Ronix Labs" style={{ height: '40px', width: 'auto' }} />
                                </Link>
                            </div>

                            <div className="header-left">
                                <div className="mean__menu-wrapper">
                                    <div className="main-menu">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li className="has-dropdown active menu-thumb">
                                                    <Link to="/">Home <i className="fa-solid fa-chevron-down"></i></Link>
                                                    <ul className="submenu has-homemenu">
                                                        <li>
                                                            <div className="homemenu-items">
                                                                <div className="row row-cols-xl-4 row-cols-md-2 row-cols-2">
                                                                    <div className="col homemenu">
                                                                        <div className="homemenu-thumb">
                                                                            <img src="/assets/img/header/home-01.jpg" alt="img" />
                                                                            <div className="demo-button">
                                                                                <Link to="/" className="theme-btn">Light Mode</Link>
                                                                                <a href="#" className="theme-btn">Dark Mode</a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="homemenu-content text-center">
                                                                            <h4 className="homemenu-title"><Link to="/">Digital Marketing</Link></h4>
                                                                        </div>
                                                                    </div>
                                                                    {/* Add other home variants if needed */}
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="has-dropdown">
                                                    <Link to="/about">About Us <i className="fa-solid fa-chevron-down"></i></Link>
                                                    <ul className="submenu">
                                                        <li><Link to="/about">About Us One</Link></li>
                                                        <li><Link to="/about-2">About Us Two</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="has-dropdown">
                                                    <Link to="/services">Services <i className="fa-solid fa-chevron-down"></i></Link>
                                                    <ul className="submenu">
                                                        <li><Link to="/services">Service One</Link></li>
                                                        <li><Link to="/services-2">Service Two</Link></li>
                                                        <li><Link to="/service-details">Service Details</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="has-dropdown">
                                                    <a href="javascript:void(0)">Pages <i className="fa-solid fa-chevron-down"></i></a>
                                                    <ul className="submenu">
                                                        <li><Link to="/projects">Project page 01</Link></li>
                                                        <li><Link to="/projects-2">Project page 02</Link></li>
                                                        <li><Link to="/project-details">Project Details</Link></li>
                                                        <li><Link to="/team">Our Team</Link></li>
                                                        <li><Link to="/team-details">Team Details</Link></li>
                                                        <li><Link to="/faq">faq Page</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="has-dropdown">
                                                    <Link to="/blog">Our News <i className="fa-solid fa-chevron-down"></i></Link>
                                                    <ul className="submenu">
                                                        <li><Link to="/blog">Blog One</Link></li>
                                                        <li><Link to="/blog-2">Blog Two</Link></li>
                                                        <li><Link to="/blog-details">Blog Details</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link to="/contact">Contact Us</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>

                            <div className="header-right d-flex justify-content-end align-items-center">
                                <a href="#" className="main-header__search search-toggler">
                                    <i className="fa-regular fa-magnifying-glass"></i>
                                </a>

                                <div className="header__hamburger">
                                    <div className="sidebar__toggle">
                                        <div className="header-bar">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M19.375 5H0.625C0.45924 5 0.300269 4.93415 0.183058 4.81694C0.065848 4.69973 0 4.54076 0 4.375C0 4.20924 0.065848 4.05027 0.183058 3.93306C0.300269 3.81585 0.45924 3.75 0.625 3.75H19.375C19.5408 3.75 19.6997 3.81585 19.8169 3.93306C19.9342 4.05027 20 4.20924 20 4.375C20 4.54076 19.9342 4.69973 19.8169 4.81694C19.6997 4.93415 19.5408 5 19.375 5Z" fill="#121212" />
                                                <path d="M19.375 11.25H0.625C0.45924 11.25 0.300269 11.1842 0.183058 11.0669C0.065848 10.9497 0 10.7908 0 10.625C0 10.4592 0.065848 10.3003 0.183058 10.1831C0.300269 10.0658 0.45924 10 0.625 10H19.375C19.5408 10 19.6997 10.0658 19.8169 10.1831C19.9342 10.3003 20 10.4592 20 10.625C20 10.7908 19.9342 10.9497 19.8169 11.0669C19.6997 11.1842 19.5408 11.25 19.375 11.25Z" fill="#121212" />
                                                <path d="M19.375 17.5H0.625C0.45924 17.5 0.300269 17.4342 0.183058 17.3169C0.065848 17.1997 0 17.0408 0 16.875C0 16.7092 0.065848 16.5503 0.183058 16.4331C0.300269 16.3158 0.45924 16.25 0.625 16.25H19.375C19.5408 16.25 19.6997 16.3158 19.8169 16.4331C19.9342 16.5503 20 16.7092 20 16.875C20 17.0408 19.9342 17.1997 19.8169 17.3169C19.6997 17.4342 19.5408 17.5 19.375 17.5Z" fill="#121212" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
