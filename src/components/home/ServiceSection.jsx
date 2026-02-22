import React from 'react';
import ServiceCard from '../cards/ServiceCard';

const ServiceSection = () => {
    const services = [
        { id: '01', title: 'Automation', desc: 'Intelligent Workflows', img: '/assets/img/home-3/service/thumb1_1.png' },
        { id: '02', title: 'SaaS Build', desc: 'Custom AI SaaS Products', img: '/assets/img/home-3/service/thumb1_2.png' },
        { id: '03', title: 'Workflows', desc: 'Business Process Automation', img: '/assets/img/home-3/service/thumb1_1.png' },
        { id: '04', title: 'Platform', desc: 'SaaS Architecture & Design', img: '/assets/img/home-3/service/thumb1_2.png' },
        { id: '05', title: 'AI Tools', desc: 'Tailored AI Assistant Tools', img: '/assets/img/home-3/service/thumb1_2.png' }
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
