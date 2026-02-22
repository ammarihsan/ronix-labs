import React from 'react';
import Layout from '../layouts/Layout';

const ProjectDetails = () => {
    return (
        <Layout>
            <div className="breadcrumb-page-area-one pt-150 pb-50">
                <div className="container border-bottom pb-4">
                    <div className="d-flex justify-content-between align-items-end flex-wrap">
                        <div className="title h2">Website development case study</div>
                        <div className="meta-data">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item me-4 text-muted small"><strong>Category:</strong> Software development</li>
                                <li className="list-inline-item me-4 text-muted small"><strong>Client:</strong> Pixelone</li>
                                <li className="list-inline-item text-muted small"><strong>Delivery date:</strong> 25 Aug, 2026</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="project-page-area pb-150">
                <div className="container">
                    <div className="main-content">
                        <div className="thumb fix mb-60">
                            <img src="/assets/img/pages/projectPageThumb1_11.png" alt="thumb" className="w-100" />
                        </div>

                        <div className="project-cta mb-100">
                            <div className="row gy-5">
                                <div className="col-xl-6">
                                    <div className="title h3">Crafted with Precision Services designed to make a difference</div>
                                </div>
                                <div className="col-xl-6">
                                    <ul className="list-unstyled row gy-2">
                                        <li className="col-md-6">+ Design & UI/UX</li>
                                        <li className="col-md-6">+ Frontend development</li>
                                        <li className="col-md-6">+ Backend development</li>
                                        <li className="col-md-6">+ CMS integration</li>
                                        <li className="col-md-6">+ Responsive design</li>
                                        <li className="col-md-6">+ Speed optimization</li>
                                        <li className="col-md-6">+ Web hosting & deployment</li>
                                        <li className="col-md-6">+ Analytics & tracking</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="middle-content mb-100">
                            <div className="row gy-5 align-items-center">
                                <div className="col-xl-8">
                                    <div className="project-text-content">
                                        <div className="title h4 mb-3">Website development case study</div>
                                        <div className="text text-muted mb-4">
                                            Fusce eros tellus, laoreet vitae purus in, auctor varius risus. Proin fringilla euismod molestie. Nunc tempus, quam nec consectetur pharetra, tortor arcu pretium quam, at sollicitudin tellus nibh ac mauris. Proin ultricies suscipit quam, a finibus dolor.
                                        </div>
                                        <div className="text text-muted">
                                            Curabitur dictum fermentum ex at accumsan. Aliquam gravida convallis sapien, quis pulvinar felis egestas in. Praesent consequat sit amet purus id posuere. Vestibulum facilisis interdum tortor, vel suscipit odio molestie a.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 text-end">
                                    <img src="/assets/img/pages/projectPageThumb1_12.png" alt="thumb" className="img-fluid" />
                                </div>
                            </div>
                        </div>

                        <div className="bottom-content mb-100">
                            <div className="title h4 mb-4">Crafted with Precision Services designed to make a difference</div>
                            <div className="text text-muted mb-60">
                                Nunc eget congue nulla. Pellentesque lectus est, imperdiet ac turpis tincidunt, semper varius ex. Ut semper justo metus, at viverra nisi posuere ut. Etiam enim leo, ullamcorper nec tortor vitae, sollicitudin semper leo. Integer erat nibh, cursus sed augue sed, molestie consequat arcu.
                            </div>

                            <div className="accolades-area-two">
                                <div className="row gy-4">
                                    {[
                                        { logo: "/assets/img/home-2/accolades/accoladesImage1_1.png", title: "Proven client satisfaction", text: "With a 5-star rating on Clutch and over 62 reviews." },
                                        { logo: "/assets/img/home-2/accolades/accoladesImage1_2.png", title: "Web design excellence", text: "Awarded Honorable Mentions by Awwwards." },
                                        { logo: "/assets/img/home-2/accolades/accoladesImage1_3.png", title: "High-Impact Design", text: "Our projects have earned ribbons on Behance." }
                                    ].map((card, index) => (
                                        <div className="col-xl-4 col-md-6" key={index}>
                                            <div className="accolades-card p-4 border text-center h-100">
                                                <img src={card.logo} alt="logo" className="mb-3" />
                                                <h6 className="title mb-3">{card.title}</h6>
                                                <p className="text small text-muted mb-0">{card.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="work-process-area-three bg-light py-5">
                <div className="container text-center py-5">
                    <div className="section-title-three mb-5">
                        <div className="title h3 text-uppercase">Our working process</div>
                    </div>
                    <div className="row justify-content-center text-start">
                        {["Briefing", "Discovery", "MVP Development", "Support & Grow"].map((step, index) => (
                            <div className="col-xl-3 col-md-6 mb-4" key={index}>
                                <div className="p-4 border bg-white h-100">
                                    <div className="h5 fw-bold mb-3">{index + 1}. {step}</div>
                                    <ul className="list-unstyled small text-muted mb-0">
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

            <div className="project-info pt-100 pb-150">
                <div className="container">
                    <div className="row gy-4 mb-5">
                        <div className="col-md-4"><img src="/assets/img/pages/projectPageThumb1_13.png" alt="img" className="w-100" /></div>
                        <div className="col-md-4"><img src="/assets/img/pages/projectPageThumb1_14.png" alt="img" className="w-100" /></div>
                        <div className="col-md-4"><img src="/assets/img/pages/projectPageThumb1_15.png" alt="img" className="w-100" /></div>
                    </div>
                    <div className="info-text text-muted mb-5">
                        Nunc eget congue nulla. Pellentesque lectus est, imperdiet ac turpis tincidunt, semper varius ex. Ut semper justo metus, at viverra nisi posuere ut. Etiam enim leo, ullamcorper nec tortor vitae, sollicitudin semper leo. Integer erat nibh, cursus sed augue sed.
                    </div>
                    <div className="d-flex justify-content-between border-top pt-4">
                        <span className="text-muted fw-bold text-uppercase pointer-event">Prev</span>
                        <span className="text-muted fw-bold text-uppercase pointer-event">Next</span>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProjectDetails;
