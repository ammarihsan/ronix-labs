import React from 'react';
import ServiceCard from '../cards/ServiceCard';

const ServiceSection = () => {
    const services = [
        { id: '01', title: 'AI Automation', desc: 'Intelligent Workflows', img: '/assets/img/home-3/service/ai-automation.png' },
        { id: '02', title: 'Software Development', desc: 'Custom SaaS & Product Build', img: '/assets/img/home-3/service/software-dev.png' },
        { id: '03', title: 'UI UX Design', desc: 'Architecture & User Experience', img: '/assets/img/home-3/service/ui-ux-design.png' },
        { id: '04', title: 'Mobile App Development', desc: 'iOS & Android Solutions', img: '/assets/img/home-3/service/mobile-app-dev.png' },
        { id: '05', title: 'CMS Development', desc: 'Scalable Content Systems', img: '/assets/img/home-3/service/cms-dev.png' }
    ];

    return (
        <div className="service-area-three fix">
            <div className="service-wrapper">
                <div className="services-card-wrap gt-funfact-panel-wrap">
                    <div className="wrapper-rolling-text">
                        <div className="rolling-text text">
                            <span className="marquee-text">AI Automation</span>
                            <span className="marquee-text">AI Automation</span>
                            <span className="marquee-text">AI Automation</span>
                        </div>
                    </div>

                    {services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            id={service.id}
                            title={service.title}
                            desc={service.desc}
                            img={service.img}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;
