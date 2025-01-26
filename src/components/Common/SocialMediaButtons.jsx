import React from 'react';

const SocialMediaButtons = () => {
    return (
        <div className="mt-4 flex justify-center space-x-4">
            <a
                href="https://github.com/saifDiu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 transition-colors"
            >
                <i className="fab fa-github text-2xl"></i>
            </a>
            <a
                href="https://linkedin.com/in/saifislamswe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 transition-colors"
            >
                <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a
                href="https://fiverr.com/pythoniantips"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 transition-colors"
            >
                <i className="fab fa-fonticons text-2xl"></i>
            </a>
        </div>
    );
};

export default SocialMediaButtons;