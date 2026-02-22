import React from 'react';
import Layout from '../layouts/Layout';

const Contact = () => {
    return (
        <Layout>
            <div className="contact-page-area">
                <div className="contact-page-wrapper fix">
                    <div className="container">
                        <div className="row gy-5 align-items-center">
                            <div className="col-xl-6 col-lg-6">
                                <div className="content">
                                    <div className="title">Reach out, let’s create opportunities</div>
                                    <div className="text">
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                    </div>
                                </div>

                                <div className="contact-info">
                                    <div className="info-items">
                                        <div className="info-title">General Inquiries</div>
                                        <a href="mailto:hello@ronixlabs.com">hello@ronixlabs.com</a>
                                    </div>
                                    <div className="info-items">
                                        <div className="info-title">Talk with us</div>
                                        <a href="tel:+5284567592">+(528) 456-7592</a>
                                    </div>
                                    <div className="info-items">
                                        <div className="info-title">Our locations</div>
                                        <p>4821 Commerce Street, Dallas, TX 75226</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6 col-lg-6">
                                <div className="contact-form style-2">
                                    <form action="#" method="post" autoComplete="on">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label htmlFor="name">Enter name</label>
                                                <input type="text" className="form-control" id="name" name="name" autoComplete="name" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="email">Email address</label>
                                                <input type="email" className="form-control" id="email" name="email" autoComplete="email" />
                                            </div>
                                            <div className="col-12 mt-3">
                                                <label htmlFor="message">Write message</label>
                                                <textarea className="form-control" id="message" name="message" rows="5" required></textarea>
                                            </div>
                                            <div className="col-12 mt-4">
                                                <button type="submit" className="theme-btn">send message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
