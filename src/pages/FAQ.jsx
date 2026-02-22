import React from 'react';
import Layout from '../layouts/Layout';

const FAQ = () => {
    const faqs = [
        {
            id: "One",
            question: "Design research",
            answer: "We create the standout work your brand deserves. Bold ideas that capture attention and inspire action. Designs that turn viewers into customers and deliver results worth celebrating."
        },
        {
            id: "Two",
            question: "Wireframing and prototyping",
            answer: "We create the standout work your brand deserves. Bold ideas that capture attention and inspire action. Designs that turn viewers into customers and deliver results worth celebrating.",
            show: true
        },
        {
            id: "Three",
            question: "Create design system",
            answer: "We create the standout work your brand deserves. Bold ideas that capture attention and inspire action. Designs that turn viewers into customers and deliver results worth celebrating."
        },
        {
            id: "Four",
            question: "High fidelity design",
            answer: "We create the standout work your brand deserves. Bold ideas that capture attention and inspire action. Designs that turn viewers into customers and deliver results worth celebrating."
        },
        {
            id: "Five",
            question: "Design validation",
            answer: "We create the standout work your brand deserves. Bold ideas that capture attention and inspire action. Designs that turn viewers into customers and deliver results worth celebrating."
        },
        {
            id: "Six",
            question: "Deliver your design",
            answer: "We create the standout work your brand deserves. Bold ideas that capture attention and inspire action. Designs that turn viewers into customers and deliver results worth celebrating."
        }
    ];

    return (
        <Layout>
            <div className="breadcrumb-page-area-one">
                <div className="breadcrumb-page-wrap">
                    <div className="container">
                        <div className="gt-breadcrumb-wrapper">
                            <div className="meta-title">
                                FA
                                <img src="/assets/img/pages/faqPageTextBg1_1.png" alt="Shape" />
                            </div>
                            <div className="right-contents">
                                <p className="pra-text faq-text">Frequently asked question (FAQ) pages to find answers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="faq-page-area faq-service-4 fix pb-150">
                <div className="faq-page-wrapper">
                    <div className="container">
                        <div className="faq-content">
                            <div className="row gy-5 justify-content-center">
                                <div className="col-xl-8 col-lg-10">
                                    <div className="faq-main-content">
                                        <div className="section-title mb-50 text-center">
                                            <div className="title">Comprehensive design process</div>
                                        </div>

                                        <div className="accordion style3 accordion-flush" id="accordionFlushExample">
                                            {faqs.map((faq, index) => (
                                                <div className="accordion-item" key={index}>
                                                    <h2 className="accordion-header">
                                                        <button
                                                            className={`accordion-button ${faq.show ? '' : 'collapsed'}`}
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target={`#collapse${faq.id}`}
                                                            aria-expanded={faq.show ? "true" : "false"}
                                                            aria-controls={`#collapse${faq.id}`}
                                                        >
                                                            {faq.question}
                                                        </button>
                                                    </h2>
                                                    <div
                                                        id={`collapse${faq.id}`}
                                                        className={`accordion-collapse collapse ${faq.show ? 'show' : ''}`}
                                                        data-bs-parent="#accordionFlushExample"
                                                    >
                                                        <div className="accordion-body">
                                                            {faq.answer}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default FAQ;
