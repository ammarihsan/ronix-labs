import React from 'react';

const SectionTitle = ({
    title,
    subtitle,
    className = "section-title-three mb-75",
    titleClassName = "title",
    children
}) => {
    return (
        <div className={className}>
            <div className={titleClassName}>
                {subtitle && <span>{subtitle}</span>} {title}
            </div>
            {children}
        </div>
    );
};

export default SectionTitle;
