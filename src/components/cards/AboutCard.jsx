import React from 'react';

const AboutCard = ({ icon, number, text, style = 1, thumbOne, thumbTwo, videoLink }) => {
    if (style === 2) {
        return (
            <div className="about-card style-2">
                <div className="about-card-wrapper">
                    <div className="card-content">
                        <span>{number}</span><span>x</span>
                        <p className="text">{text}</p>
                    </div>
                    <div className="thumb-wrap">
                        <div className="thumb thumb-one">
                            <img src={thumbOne} alt="thumb" />
                        </div>
                        <div className="thumb thumb-two">
                            <img src={thumbTwo} alt="thumb" />
                            {videoLink && (
                                <a href={videoLink} className="video-btn video-popup">
                                    <span className="btn neon-pulse">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                                            <circle cx="50" cy="50" r="37" fill="white" />
                                            <circle cx="50" cy="50" r="49.5" stroke="white" strokeOpacity="0.3" />
                                            <path d="M58 50.5L42 60L42 41L58 50.5Z" fill="black" />
                                        </svg>
                                    </span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="about-card">
            <div className="about-card-wrapper">
                <div className="icon">
                    <img src={icon} alt="icon" />
                </div>
                <div className="card-content">
                    <span>{number}</span>{text.includes('recommendation') ? '' : <span>x</span>}
                    <p className="text">{text}</p>
                </div>
            </div>
        </div>
    );
};

export default AboutCard;
