import React from 'react';
import Layout from '../layouts/Layout';

const Blog = () => {
    const blogPosts = [
        {
            title: "Unlocking the future of busines show smart innovation creates lasting impact",
            description: "Awarded Honorable Mentions by Awwwards, highlighting our ability to deliver innovative and high-quality web designs. We craft high-performance websites and digital experiences, removing bottlenecks and maximizing efficiency.",
            image: "/assets/img/pages/blogPageThumb1_1.png",
            author: "Pixelone",
            authorImage: "/assets/img/pages/blogPageVactor1_1.png",
            date: "25th Dec, 2023",
            category: "Marketing"
        },
        {
            title: "Unlocking the future of busines show smart innovation creates lasting impact",
            description: "Awarded Honorable Mentions by Awwwards, highlighting our ability to deliver innovative and high-quality web designs. We craft high-performance websites and digital experiences, removing bottlenecks and maximizing efficiency.",
            image: "/assets/img/pages/blogPageThumb1_2.png",
            author: "Pixelone",
            authorImage: "/assets/img/pages/blogPageVactor1_1.png",
            date: "25th Dec, 2023",
            category: "Marketing"
        }
    ];

    return (
        <Layout>
            <div className="breadcrumb-page-area-one">
                <div className="breadcrumb-page-wrap">
                    <div className="container">
                        <div className="gt-breadcrumb-wrapper mb-60">
                            <div className="title title-1">Read our article</div>
                            <p className="text blog-text">Stay updated with tips, trends, and articles</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="blog-page-area blog-page-area21">
                <div className="blog-page-wrapper pb-150">
                    <div className="container">
                        <div className="blog-card tp-service-pin">
                            {blogPosts.map((post, index) => (
                                <div className="blog-card-item tp-service-panel bg-white mb-5" key={index}>
                                    <div className="row gy-5 align-items-center">
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="blog-thumb">
                                                <img src={post.image} alt="thumb" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="blog-content">
                                                <a href="#" className="title">{post.title}</a>
                                                <div className="text">{post.description}</div>
                                                <div className="meta-content">
                                                    <div className="author d-flex align-items-center">
                                                        <div className="author-thumb">
                                                            <img src={post.authorImage} alt="author" />
                                                        </div>
                                                        <div className="author-name">
                                                            <div className="name">{post.author}</div>
                                                            <span>Composed by</span>
                                                        </div>
                                                    </div>
                                                    <div className="post-date">
                                                        <span className="type">{post.category}</span>
                                                        <span>{post.date}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

export default Blog;
