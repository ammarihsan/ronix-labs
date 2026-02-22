import React from 'react';
import Layout from '../layouts/Layout';

const BlogTwo = () => {
    return (
        <Layout>
            <div className="breadcrumb-page-area-one py-5">
                <div className="container py-5 mt-5">
                    <div className="gt-breadcrumb-wrapper text-center">
                        <p className="text h4 text-muted">Explore insights, ideas, and stories that inspire creativity</p>
                    </div>
                </div>
            </div>

            <div className="blog-page-area pb-150">
                <div className="container">
                    <div className="row gy-5">
                        {[
                            { img: "/assets/img/pages/blogPageThumb1_5.png", title: "Unlocking the future of business how smart innovation", date: "25th Dec, 2023", type: "Marketing" },
                            { img: "/assets/img/pages/blogPageThumb1_6.png", title: "Unlocking the future of business how smart innovation", date: "25th Dec, 2023", type: "Marketing" },
                            { img: "/assets/img/pages/blogPageThumb1_7.png", title: "Unlocking the future of business how smart innovation", date: "25th Dec, 2023", type: "Marketing" },
                            { img: "/assets/img/pages/blogPageThumb1_8.png", title: "Unlocking the future of business how smart innovation", date: "25th Dec, 2023", type: "Marketing" },
                            { img: "/assets/img/pages/blogPageThumb1_9.png", title: "Unlocking the future of business how smart innovation", date: "25th Dec, 2023", type: "Marketing" },
                            { img: "/assets/img/pages/blogPageThumb1_10.png", title: "Unlocking the future of business how smart innovation", date: "25th Dec, 2023", type: "Marketing" }
                        ].map((blog, index) => (
                            <div className="col-xl-4 col-lg-4 col-md-6" key={index}>
                                <div className="blog-item bg-white border h-100 p-3">
                                    <div className="blog-thumb mb-3 fix">
                                        <img src={blog.img} alt="thumb" className="w-100" />
                                    </div>
                                    <div className="blog-content">
                                        <div className="meta-content mb-3 small text-muted text-uppercase">
                                            <span>{blog.type}</span> • <span>{blog.date}</span>
                                        </div>
                                        <h5 className="title mb-4">{blog.title}</h5>
                                        <button className="theme-btn btn-sm">Read More</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="content-pagination mt-5 pt-5 text-center">
                        <ul className="list-inline">
                            <li className="list-inline-item mx-2"><a href="#" className="fw-bold text-dark">01</a></li>
                            <li className="list-inline-item mx-2"><a href="#" className="text-muted">02</a></li>
                            <li className="list-inline-item mx-2"><a href="#" className="text-muted">03</a></li>
                            <li className="list-inline-item mx-2"><a href="#" className="text-muted">04</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default BlogTwo;
