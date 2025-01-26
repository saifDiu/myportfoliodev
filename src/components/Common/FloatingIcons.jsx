import React from 'react';

const FloatingIcons = () => {
    return (
        <div className="absolute inset-0 overflow-hidden">
            <div className="animate-float1 w-12 h-12 bg-blue-200 rounded-full absolute top-10 left-20"></div>
            <div className="animate-float2 w-16 h-16 bg-purple-200 rounded-full absolute top-40 right-32"></div>
            <div className="animate-float3 w-10 h-10 bg-blue-200 rounded-full absolute bottom-20 left-1/2"></div>
            <div className="animate-float4 w-14 h-14 bg-purple-200 rounded-full absolute bottom-10 right-20"></div>
        </div>
    );
};

export default FloatingIcons;