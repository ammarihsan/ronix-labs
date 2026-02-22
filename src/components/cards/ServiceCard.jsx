import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ id, title, desc, img, to = "/service-details" }) => {
    return (
        <div className="services-card gt-funfact-panel">
            <div className="card-left-content">
                <div className="sub-title">service {id}</div>
                <div className="left-bottom-content">
                    <div className="title">{title}</div>
                    <div className="btn-wrap">
                        <Link to={to} className="solid-btn-2">{desc}
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <path d="M20.0048 11.7675L9.24602 22.5262L7.47852 20.7588L18.236 10L8.75477 10V7.5L22.5048 7.5V21.25H20.0048V11.7675Z" fill="black" />
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="card-right-content">
                <div className="thumb">
                    <img src={img} alt="thumb" />
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
