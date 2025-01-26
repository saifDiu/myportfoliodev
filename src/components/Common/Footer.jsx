import React from 'react';

const Footer = () => {
    return (
        <div className="mt-8 text-center text-gray-500 relative z-10">
            &copy; {new Date().getFullYear()} Saif Islam. All rights reserved.
        </div>
    );
};

export default Footer;