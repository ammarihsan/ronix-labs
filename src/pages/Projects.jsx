import React from 'react';
import Layout from '../layouts/Layout';

const Projects = () => {
    const projects = [
        {
            title: "Yoga online school platform",
            category: "Design - 2024",
            image: "/assets/img/home-4/featured/featuredThumb1_1.png"
        },
        {
            title: "Virtual yoga classes & wellness LMS template",
            category: "Design - 2024",
            image: "/assets/img/home-4/featured/featuredThumb1_2.png"
        },
        {
            title: "Yoga studio, courses & live session platform",
            category: "Design - 2024",
            image: "/assets/img/home-4/featured/featuredThumb1_3.png"
        },
        {
            title: "Yoga instructor, retreat & class booking portal",
            category: "Design - 2024",
            image: "/assets/img/home-4/featured/featuredThumb1_4.png"
        }
    ];

    return (
        <Layout>
            <div className="breadcrumb-page-area-one">
                <div className="breadcrumb-page-wrap">
                    <div className="container">
                        <div className="gt-breadcrumb-wrapper">
                            <div className="title title-1">Our case study</div>
                            <div className="right-contents">
                                <p className="text">We design intuitive digital experiences that prioritize users, elevate brands</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="project-page-area">
                <div className="project-page-wrapper one pb-150">
                    <div className="container">
                        <div className="row gy-5">
                            {projects.map((project, index) => (
                                <div className="col-xl-6 col-lg-6 col-md-6" key={index}>
                                    <div className="featured-card">
                                        <div className="hover-item">
                                            <a href="#" className="thumb">
                                                <img src={project.image} alt={project.title} />
                                            </a>
                                        </div>
                                        <div className="card-content">
                                            <div className="card-title"><a href="#">{project.title}</a></div>
                                            <p className="text">{project.category}</p>
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

export default Projects;
