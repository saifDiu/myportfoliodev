import React from 'react';

const BlogCard = ({blog, onClick}) => {

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const day = date.getDate();
        const month = date.toLocaleString("default", { month: "short" }); // e.g., "Oct"
        const year = date.getFullYear();
        return `${month} ${day}, ${year}`; // Format: Oct 10, 2023
    };

    return (
        <div
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer flex flex-col h-full"
            onClick={onClick}
        >
            <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4 flex flex-col flex-grow"> {/* Add flex-grow here */}
                <h3 className="text-xl font-bold text-gray-800">{blog.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{formatDate(blog.date)}</p>
                <div className="mt-2 flex flex-wrap gap-1">
                    {blog.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs"
                        >
                    {tag}
                </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogCard;