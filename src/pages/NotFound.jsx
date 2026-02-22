import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layouts/Layout';

const NotFound = () => {
    return (
        <Layout>
            <div className="error-wrapper section-padding pb-150 pt-150">
                <div className="container text-center">
                    <div className="error">
                        <h2 style={{ fontSize: '15vw', fontWeight: '900', color: '#f3f3f3' }}>404</h2>
                    </div>
                    <div className="error-content">
                        <h2><span>Oops!</span> Page not found</h2>
                        <p>Sorry, the page you’re looking for doesn’t exist or has been moved. <br /> Let’s get you back explore our Latest Posts</p>
                    </div>
                    <Link to="/" className="theme-btn mt-4">Back To Home <i className="fa-solid fa-arrow-right"></i></Link>
                </div>
            </div>
        </Layout>
    );
};

export default NotFound;
