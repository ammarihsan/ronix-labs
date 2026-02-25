import React from 'react';
import TrustedClients from '../common/TrustedClients';
import MoveButton from '../common/MoveButton';

const CTASection = () => {
    return (
        <div className="cta-area-three fix">
            <div className="cta-wrapper pb-150">
                <div className="cta-content">
                    <div className="bg-shape float-bob-x">
                        <img src="/assets/img/logo/official-logo.png" alt="shape" style={{ height: '60px', width: 'auto' }} />
                    </div>
                    <div className="container">
                        <div className="cta-content-wrap">
                            <div className="title title-anim">
                                Let's Build The Best&nbsp;
                                <span>
                                    Automation Solutions
                                    <img src="/assets/img/home-3/cta/ctaLineShape.png" alt="shape" />
                                </span>
                                &nbsp;For Your Future
                            </div>

                            <div className="content-inner">
                                <TrustedClients className="our-clint-2 gt_fade_anim" />
                                <MoveButton to="/projects" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTASection;
