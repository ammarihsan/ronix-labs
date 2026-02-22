import React from 'react';
import Layout from '../layouts/Layout';
import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import ProjectSection from '../components/home/ProjectSection';
import WorkProcess from '../components/home/WorkProcess';
import ServiceSection from '../components/home/ServiceSection';
import LabSection from '../components/home/LabSection';
import TestimonialSection from '../components/home/TestimonialSection';
import CTASection from '../components/home/CTASection';

const Home = () => {
    return (
        <Layout>
            <Hero />
            <AboutSection />
            <ProjectSection />
            <LabSection />
            <WorkProcess />
            <ServiceSection />

            <div className="border-wrap pt-150 fix">
                <div className="line-shape-1 mb-10"></div>
                <div className="line-shape-3 mb-10"></div>
                <div className="line-shape-1"></div>
            </div>

            <TestimonialSection />
            <CTASection />
        </Layout>
    );
};

export default Home;
