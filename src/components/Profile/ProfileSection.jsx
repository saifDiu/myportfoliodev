import React from 'react';
import SocialMediaButtons from '../Common/SocialMediaButtons';

const ProfileSection = () => {
    return (
        <div className="text-center relative z-10">
            <img
                src="https://avatars.githubusercontent.com/u/33100614?v=4"
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg"
            />
            <h1 className="mt-3 text-4xl font-bold text-gray-800">Md. Saif Islam</h1>
            <p className="mt-2 text-lg text-gray-600">Software Engineer | Tech Enthusiast | Odoo Expert</p>

            {/* Social Media Buttons */}
            <SocialMediaButtons />
        </div>
    );
};

export default ProfileSection;