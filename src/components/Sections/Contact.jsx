import React from 'react';

const Contact = () => {
    return (
        <div className="mt-8 relative z-10">
            <h2 className="text-2xl font-bold text-gray-800">Contact</h2>
            <p className="mt-4 text-gray-600">
                Feel free to reach out to me for collaborations or just a friendly chat!
            </p>
            <div className="mt-2">
                <a
                    href="mailto:saif.swe.personal@Gmail.com"
                    className="text-blue-500 hover:text-blue-600 transition-colors"
                >
                    Contact Me
                </a>
            </div>
        </div>
    );
};

export default Contact;