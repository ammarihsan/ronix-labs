import React from 'react';
import Layout from '../layouts/Layout';

const ServiceDetails = () => {
    return (
        <Layout>
            <div className="service-details-area pt-150 pb-150">
                <div className="service-details-wrapper mb-150">
                    <div className="container">
                        <div className="section-title text-center">
                            <div className="sub-title">Service details</div>
                            <div className="title title-anim">App design & development</div>
                        </div>

                        <div className="main-content">
                            <div className="thumb-content mb-40">
                                <div className="row gy-5">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="thumb fix">
                                            <img src="/assets/img/pages/servicePageThumb1_2.png" alt="thumb" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="thumb fix">
                                            <img src="/assets/img/pages/servicePageThumb1_3.png" alt="thumb" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-content mb-50">
                                <div className="text-title">Crafted with Precision Services designed to make a difference</div>
                                <div className="text">
                                    Fusce eros tellus, laoreet vitae purus in, auctor varius risus. Proin fringilla euismod molestie. Nunc tempus, quam nec consectetur pharetra, tortor arcu pretium quam, at sollicitudin tellus nibh ac mauris. Proin ultricies suscipit quam, a finibus dolor. Curabitur dictum fermentum ex at accumsan. Aliquam gravida convallis sapien, quis pulvinar felis egestas in. Praesent consequat sit amet purus id posuere. Vestibulum facilisis interdum tortor, vel suscipit odio molestie a. Donec.
                                </div>
                            </div>

                            <div className="content-card mb-25">
                                <div className="row gy-5">
                                    {[
                                        { title: "history & different cultures", image: "/assets/img/pages/servicePageThumb1_4.png" },
                                        { title: "history & different cultures", image: "/assets/img/pages/servicePageThumb1_6.png" },
                                        { title: "history & different cultures", image: "/assets/img/pages/servicePageThumb1_4.png" }
                                    ].map((item, index) => (
                                        <div className="col-xl-4 col-lg-4 col-md-6" key={index}>
                                            <div className="card-items p-4 border">
                                                <div className="card-title fw-bold mb-3">{item.title}</div>
                                                <p className="card-text mb-4">
                                                    Awarded Honorable Mentions by Awwwards, highlighting our ability to deliver innovative and high-quality web designs.
                                                </p>
                                                <div className="card-thumb fix">
                                                    <img src={item.image} alt="thumb" />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section Shortcut */}
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="section-title text-center mb-50">
                                <div className="title">Frequently asked questions</div>
                            </div>
                            <div className="accordion style3" id="serviceFaq">
                                {[
                                    { q: "What services does your agency provide?", a: "We create standout work your brand deserves..." },
                                    { q: "How long does it take to complete a project?", a: "We create standout work your brand deserves..." }
                                ].map((faq, index) => (
                                    <div className="accordion-item" key={index}>
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#faq${index}`}>
                                                {faq.q}
                                            </button>
                                        </h2>
                                        <div id={`faq${index}`} className="accordion-collapse collapse" data-bs-parent="#serviceFaq">
                                            <div className="accordion-body">{faq.a}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ServiceDetails;
