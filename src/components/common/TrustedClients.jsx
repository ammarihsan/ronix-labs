import React from 'react';

const TrustedClients = ({ className = "our-clint" }) => {
    const clients = [
        "/assets/img/home-1/hero/heroVector1_1.png",
        "/assets/img/home-1/hero/heroVector1_2.png",
        "/assets/img/home-1/hero/heroVector1_3.png",
        "/assets/img/home-1/hero/heroVector1_4.png"
    ];

    return (
        <div className={className}>
            <ul>
                {clients.map((src, index) => (
                    <li key={index}>
                        <img src={src} alt={`client-${index + 1}`} />
                    </li>
                ))}
            </ul>
            <p className="text">trusted clients world wide</p>
        </div>
    );
};

export default TrustedClients;
