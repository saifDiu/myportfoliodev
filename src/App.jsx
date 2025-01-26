import React, { useState } from 'react';
import MainCard from './components/MainCard';
import FloatingIcons from './components/Common/FloatingIcons';

const App = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 font-sans py-12 relative overflow-hidden">
            {/* Floating Animated Icons */}
            <FloatingIcons />

            {/* Main Card */}
            <MainCard />
        </div>
    );
};

export default App;