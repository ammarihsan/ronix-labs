import React from 'react';

const LabSection = () => {
    const labItems = [
        {
            icon: "🧪",
            title: "Experiments",
            text: "Pushing the boundaries of digital interaction through experimental prototypes and novel interfaces.",
        },
        {
            icon: "🚀",
            title: "Ventures",
            text: "Building and backing the next generation of SaaS products and digital infrastructure.",
        },
        {
            icon: "🧠",
            title: "R&D",
            text: "Deep research into AI workflows, automation patterns, and intelligent systems architecture.",
        },
        {
            icon: "🔥",
            title: "Skunkworks",
            text: "High-stakes, rapid-delivery projects for businesses ready to leapfrog the competition.",
        }
    ];

    return (
        <section className="lab-section pt-150 pb-150 fix">
            <div className="container">
                <div className="section-title text-center mb-60">
                    <span className="sub-title wow fadeInUp" data-wow-delay=".2s">The Innovation Lab</span>
                    <h2 className="title wow fadeInUp" data-wow-delay=".4s">Built for what’s next.</h2>
                </div>
                <div className="row gy-4">
                    {labItems.map((item, index) => (
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={`${0.2 * (index + 1)}s`} key={index}>
                            <div className="lab-card glassmorphism-card">
                                <div className="icon mb-30">{item.icon}</div>
                                <div className="content">
                                    <h3 className="title mb-15">{item.title}</h3>
                                    <p className="text">{item.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                .lab-section {
                    background-color: #F8F9FA;
                    position: relative;
                }
                .glassmorphism-card {
                    background: rgba(0, 0, 0, 0.03);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    border: 1px solid rgba(0, 0, 0, 0.08);
                    border-radius: 20px;
                    padding: 40px;
                    height: 100%;
                    transition: all 0.4s ease-in-out;
                    position: relative;
                    overflow: hidden;
                }
                .glassmorphism-card:hover {
                    transform: translateY(-10px);
                    background: rgba(0, 0, 0, 0.06);
                    border-color: #00D8FF;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
                }
                .lab-card .icon {
                    font-size: 40px;
                }
                .lab-card .title {
                    color: #1C1C1C;
                    font-size: 24px;
                }
                .lab-card .text {
                    color: #4A4A4A;
                    font-size: 16px;
                }
                .lab-section .sub-title {
                    color: #00768B;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    font-weight: 600;
                    margin-bottom: 20px;
                    display: block;
                }
                .lab-section .title {
                    color: #1C1C1C !important;
                }
            `}</style>
        </section >
    );
};

export default LabSection;
