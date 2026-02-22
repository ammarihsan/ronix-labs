import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
    useEffect(() => {
        // Trigger WOW animation and other initializations if needed
        if (window.wow) {
            new window.wow().init();
        }
        // In a real scenario, we might need to re-initialize some of the legacy JS
        // but since we're using React, we might want to replace them with React libraries gradually.
    }, []);

    return (
        <>
            <Header />
            <main id="smooth-wrapper">
                <div id="smooth-content">
                    {children}
                    <Footer />
                </div>
            </main>
        </>
    );
};

export default Layout;
