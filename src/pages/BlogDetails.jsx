import React from 'react';
import Layout from '../layouts/Layout';

const BlogDetails = () => {
    return (
        <Layout>
            <div className="blog-page-area pt-150 pb-150">
                <div className="container">
                    <div className="author text-center mb-4">
                        <div className="author-thumb mb-3">
                            <img src="/assets/img/pages/blogPageVactor1_1.png" alt="author" style={{ width: '60px', borderRadius: '50%' }} />
                        </div>
                        <div className="author-name">
                            <div className="name fw-bold">Pixelone</div>
                            <span className="text-muted small">Composed by</span>
                        </div>
                    </div>

                    <div className="section-title text-center mb-5">
                        <div className="title h2">Unlocking the future of business how smart innovation creates lasting impact</div>
                    </div>

                    <div className="main-thumb mb-5">
                        <img src="/assets/img/pages/blogPageThumb1_14.png" alt="thumb" className="w-100" />
                    </div>

                    <div className="middle-content max-width-800 mx-auto">
                        <div className="text-content mb-5">
                            <p className="text text-muted mb-4">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                            </p>
                            <p className="text text-muted">
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                            </p>
                        </div>

                        <div className="content-title h4 mb-3">Where does it come from?</div>
                        <div className="text-content mb-5">
                            <p className="text text-muted">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            </p>
                        </div>

                        <ul className="list-unstyled mb-5 text-muted">
                            <li className="mb-2">• Duis sagittis nisl nec dolor efficitur fringilla sed at velit.</li>
                            <li className="mb-2">• Curabitur ac est porta, lobortis ante vitae, fermentum nulla.</li>
                            <li className="mb-2">• Proin pretium erat et vehicula maximus.</li>
                            <li>• Pellentesque consequat orci eu viverra sodales.</li>
                        </ul>

                        <div className="blog-cta mb-5 p-4 bg-light border-start border-4 border-dark">
                            <div className="text fst-italic">
                                "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                            </div>
                        </div>

                        <div className="main-thumb mb-5">
                            <img src="/assets/img/pages/blogPageThumb1_15.png" alt="thumb" className="w-100" />
                        </div>

                        <div className="content-title h4 mb-3">Where can I get some?</div>
                        <div className="text-content mb-5 border-bottom pb-5 text-muted">
                            <p className="mb-4">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            </p>
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                            </p>
                        </div>

                        <div className="meta-content d-flex justify-content-between py-4 text-uppercase small fw-bold">
                            <div className="tags">Tags: <span className="text-muted">design, Articles, Corporate</span></div>
                            <div className="share">Share: <span className="text-muted">FB, TW, LI</span></div>
                        </div>
                    </div>
                </div>

                <div className="related-articles bg-light py-5 mt-5">
                    <div className="container py-5">
                        <div className="h3 mb-5">Related articles</div>
                        <div className="row gy-4">
                            {[
                                { img: "/assets/img/pages/blogPageThumb1_5.png", title: "Unlocking the future of business how smart innovation" },
                                { img: "/assets/img/pages/blogPageThumb1_6.png", title: "Unlocking the future of business how smart innovation" },
                                { img: "/assets/img/pages/blogPageThumb1_7.png", title: "Unlocking the future of business how smart innovation" }
                            ].map((article, index) => (
                                <div className="col-xl-4 col-md-6" key={index}>
                                    <div className="blog-item bg-white p-3 border h-100">
                                        <img src={article.img} alt="thumb" className="w-100 mb-3" />
                                        <div className="meta small text-muted mb-2">Marketing • 25th Dec, 2023</div>
                                        <h6 className="title mb-3">{article.title}</h6>
                                        <button className="theme-btn btn-sm">Read More</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default BlogDetails;
