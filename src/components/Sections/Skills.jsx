import React from 'react';

const Skills = () => {
    return (
        <div className="mt-5 relative z-10">
            <h2 className="text-2xl font-bold text-gray-800">Skills</h2>
            <div className="mt-4 flex flex-wrap gap-2">
                {['Python','Odoo','Django','React', 'JavaScript','Linux','Postgresql','Mysql','Mongodb','Git', 'HTML'].map((skill) => (
                    <span
                        key={skill}
                        className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
            {skill}
          </span>
                ))}
            </div>
        </div>
    );
};

export default Skills;