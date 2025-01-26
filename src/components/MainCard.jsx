import React from 'react';
import ProfileSection from './Profile/ProfileSection';
import AboutMe from './Sections/AboutMe';
import Skills from './Sections/Skills';
import BlogSlider from './Blog/BlogSlider';
import Contact from './Sections/Contact';
import Footer from './Common/Footer';

const MainCard = () => {
    return (
        <div className="relative bg-white rounded-lg shadow-2xl p-8 max-w-5xl w-full mx-auto border-2 border-transparent animate-border">
            {/* Profile Section */}
            <ProfileSection />

            {/* About Me Section */}
            <AboutMe />

            {/* Skills Section */}
            <Skills />

            {/* Blog Section with Swiper */}
            <BlogSlider />

            {/* Contact Section */}
            <Contact />

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default MainCard;