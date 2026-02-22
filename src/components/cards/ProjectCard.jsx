import React from 'react';
import { Link } from 'react-router-dom';
import MoveButton from '../common/MoveButton';

const ProjectCard = ({ title, category, year, img, isActive, to = "/project-details" }) => {
    return (
        <div className={`thumb thumb-active ${isActive ? 'active' : ''}`}>
            <Link to={to} style={{ backgroundImage: `url(${img})` }}>
                <div className="card-text-content">
                    <h4 className="title">{title}</h4>
                    <p>{category} - {year}</p>
                </div>
                <MoveButton to={to} className="project-btn move-btn" />
            </Link>
        </div>
    );
};

export default ProjectCard;
