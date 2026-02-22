import React from 'react';

const TestimonialCard = ({ page, text, name, title, clientThumb, thumb }) => {
    return (
        <div className="testimonial-card">
            <div className="card-cta">
                <div className="cta-left">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M22.4329 10.3126L17.7611 14.8666L18.8644 21.2986C18.9124 21.5798 18.7969 21.864 18.5659 22.0321C18.4354 22.1273 18.2801 22.1753 18.1249 22.1753C18.0056 22.1753 17.8856 22.1468 17.7761 22.0891L11.9996 19.0523L6.22388 22.0883C5.97188 22.2218 5.66513 22.2001 5.43413 22.0313C5.20313 21.8633 5.08763 21.5791 5.13563 21.2978L6.23888 14.8658L1.56638 10.3126C1.36238 10.1131 1.28813 9.81455 1.37663 9.5438C1.46513 9.27305 1.69988 9.0743 1.98263 9.03305L8.43938 8.09555L11.3269 2.24405C11.5796 1.7318 12.4196 1.7318 12.6724 2.24405L15.5599 8.09555L22.0166 9.03305C22.2994 9.0743 22.5341 9.2723 22.6226 9.5438C22.7111 9.8153 22.6369 10.1123 22.4329 10.3126Z" fill="black" />
                        </svg>
                        <div className="number">5</div>
                    </div>
                    <div className="thumb">
                        <img src={thumb} alt="testimonial-thumb" />
                    </div>
                    <p className="text">Quality 5.0 Schedule 5.0 Cost 5.0</p>
                </div>
                <div className="page">
                    <span className="page-1">{page}</span>
                    <span className="page-2">07</span>
                </div>
            </div>
            <h4 className="title">{text}</h4>
            <div className="bottom-cta">
                <div className="client-data">
                    <div className="thumb">
                        <img src={clientThumb} alt="client-thumb" />
                    </div>
                    <div className="info-text">
                        <h4 className="name">{name}</h4>
                        <p className="title">{title}</p>
                    </div>
                </div>
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <circle cx="20" cy="20" r="20" fill="black" />
                        <path d="M24.5192 19.1362C25.1807 19.5221 25.1807 20.4779 24.5192 20.8638L15.5039 26.1227C14.8372 26.5116 14 26.0308 14 25.259L14 14.741C14 13.9692 14.8372 13.4884 15.5039 13.8773L24.5192 19.1362Z" fill="#D4EE36" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
