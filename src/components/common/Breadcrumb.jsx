import React from 'react';

const Breadcrumb = ({ title, text, bgImg = "/assets/img/pages/breadcrumbPageBg1_2.png", thumbImg, wrapperClassName = "gt-breadcrumb-wrapper" }) => {
    return (
        <div className="breadcrumb-page-area-one pb-150">
            <div className="breadcrumb-page-wrap">
                <div className="bg-shape-1">
                    <img src={bgImg} alt="bg-shape" />
                </div>
                <div className="container">
                    <div className={wrapperClassName}>
                        <div className="title title-1">{title}</div>
                        {text && <p className="text">{text}</p>}
                    </div>
                    {thumbImg && (
                        <div className="thumb">
                            <img src={thumbImg} alt="thumb" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;
