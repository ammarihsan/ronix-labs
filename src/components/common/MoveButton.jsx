import React from 'react';
import { Link } from 'react-router-dom';

const MoveButton = ({ to, className = "move-btn", btnClassName = "gt-hover-btn gt-hover-btn-item gt-btn-circle-2 d-flex align-items-center justify-content-center flex-column" }) => {
    return (
        <div className={className}>
            <div className="gt-hover-btn-wrapper-two">
                <Link to={to} className={btnClassName}>
                    <span className="gt-btn-circle-text-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                            <path d="M30.6737 18.0435L14.177 34.5402L11.4668 31.8301L27.9616 15.3333H13.4237V11.5H34.507V32.5833H30.6737V18.0435Z" fill="black"></path>
                        </svg>
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default MoveButton;
