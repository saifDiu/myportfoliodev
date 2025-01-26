import React from 'react';

const BlogDetailsModal = ({ blog, onClose }) => {

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const day = date.getDate();
        const month = date.toLocaleString("default", { month: "short" }); // e.g., "Oct"
        const year = date.getFullYear();
        return `${month} ${day}, ${year}`; // Format: Oct 10, 2023
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg w-11/12 md:w-3/4 lg:w-1/2 p-6 overflow-y-auto max-h-[90vh] animate-modal">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">{blog.title}</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-600 hover:text-gray-800 transition-colors"
                    >
                        &times;
                    </button>
                </div>
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <div className="flex items-center text-gray-600 mb-6">
                    <span className="mr-4">By: {blog.author}</span>
                    <span>{formatDate(blog.date)}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                    {blog.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs"
                        >
              {tag}
            </span>
                    ))}
                </div>
                <div
                    className="prose"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                />
            </div>
        </div>
    );
};

export default BlogDetailsModal;