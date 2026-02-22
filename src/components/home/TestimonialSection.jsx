import React from 'react';
import SectionTitle from '../common/SectionTitle';
import TestimonialCard from '../cards/TestimonialCard';

const TestimonialSection = () => {
    const testimonials = [
        { id: 1, page: "01", text: "Ronix Labs's automation hub streamlined our entire financial reporting process. We've seen a 40% reduction in manual tasks and our team can finally focus on high-value strategy.", name: "Alex Chen", title: "CTO, FinTech Global", clientThumb: "/assets/img/home-3/testimonial/testimonialThumb1_2.png", thumb: "/assets/img/home-3/testimonial/testimonialThumb1_1.png" },
        { id: 2, page: "02", text: "The custom SaaS product Ronix Labs built for our team has become the backbone of our operations. Their ability to integrate smart AI tools into our existing workflow was seamless.", name: "Sarah Jenkins", title: "Head of Ops, HealthTech", clientThumb: "/assets/img/home-3/testimonial/testimonialThumb1_2.png", thumb: "/assets/img/home-3/testimonial/testimonialThumb1_1.png" },
        { id: 3, page: "03", text: "Partnering with Ronix Labs for our automation roadmap was a game-changer. They didn't just give us code; they gave us a scalable system that grows with our business.", name: "Michael Ross", title: "Director of Product, LogiScale", clientThumb: "/assets/img/home-3/testimonial/testimonialThumb1_2.png", thumb: "/assets/img/home-3/testimonial/testimonialThumb1_1.png" },
    ];

    return (
        <section className="testimonial-area-three pt-150 fix">
            <div className="testimonial-wrapper pb-150">
                <div className="container">
                    <SectionTitle
                        title="Success Stories"
                        className="section-title-three mb-75"
                        titleClassName="title text-start title-anim"
                    >
                        <div className="slider-control">
                            <div className="array-nav gt_fade_anim">
                                <button className="array-prev">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M9.414 7.9961L18.021 16.6031L16.607 18.0171L8 9.4111L8 16.9961L6 16.9961L6 5.9961L17 5.9961L17 7.9961L9.414 7.9961Z" fill="black" />
                                    </svg>
                                </button>
                                <button className="array-next">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M14.586 16.0039L5.979 7.39691L7.393 5.98291L16 14.5889L16 7.00391L18 7.00391L18 18.0039L7 18.0039L7 16.0039L14.586 16.0039Z" fill="black" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </SectionTitle>

                    <div className="testimonial-slider-wrap">
                        <div className="swiper testimonial-slider-three">
                            <div className="swiper-wrapper">
                                {testimonials.map((testimonial) => (
                                    <div key={testimonial.id} className="swiper-slide">
                                        <TestimonialCard
                                            page={testimonial.page}
                                            text={testimonial.text}
                                            name={testimonial.name}
                                            title={testimonial.title}
                                            clientThumb={testimonial.clientThumb}
                                            thumb={testimonial.thumb}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
