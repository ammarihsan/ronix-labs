import React from 'react';
import SectionTitle from '../common/SectionTitle';
import TrustedClients from '../common/TrustedClients';
import ProjectCard from '../cards/ProjectCard';

const ProjectSection = () => {
    const projects = [
        { id: 1, title: "Automation Hub for FinTech", category: "AI Automation", year: "2024", img: "/assets/img/home-3/project/projectThumb1_1.jpg" },
        { id: 2, title: "Custom CRM SaaS Build", category: "SaaS Development", year: "2024", img: "/assets/img/home-3/project/projectThumb1_2.jpg" },
        { id: 3, title: "Intelligent Workflow Engine", category: "Automation Tools", year: "2024", img: "/assets/img/home-3/project/projectThumb1_3.jpg" },
        { id: 4, title: "AI-Powered Helpdesk SaaS", category: "SaaS Product", year: "2024", img: "/assets/img/home-3/project/projectThumb1_4.jpg" },
        { id: 5, title: "Supply Chain Automation Tool", category: "Automation", year: "2024", img: "/assets/img/home-3/project/projectThumb1_5.jpg" },
    ];

    return (
        <section className="project-area-three fix">
            <div className="project-wrapper pb-150">
                <div className="container">
                    <SectionTitle
                        title="Our Recent Automation Works"
                        className="section-title-three"
                        titleClassName="title text-start"
                    >
                        <TrustedClients className="our-clint-2 gt_fade_anim" />
                        <p className="text-2 title-anim">We build intelligent workflows and AI SaaS products that simplify operations and drive measurable business growth.</p>
                    </SectionTitle>

                    <div className="row gy-4">
                        <div className="col-xl-12">
                            <div className="thumb-wrap project-three-slider">
                                {projects.map((project, index) => (
                                    <ProjectCard
                                        key={project.id}
                                        title={project.title}
                                        category={project.category}
                                        year={project.year}
                                        img={project.img}
                                        isActive={index === 0}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
