import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import BlogCard from "./BlogCard";
import BlogDetailsModal from "./BlogDetailsModal";
import { databases } from "../../lib/appwrite";

const BlogSlider = () => {
    const [blogs, setBlogs] = useState([]); // State to store blogs
    const [selectedBlog, setSelectedBlog] = useState(null); // State for selected blog
    const [loading, setLoading] = useState(true); // State for loading
    const [error, setError] = useState(null); // State for error

    // Fetch blogs from Appwrite
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await databases.listDocuments(
                    import.meta.env.VITE_APPWRITE_DATABASE_ID,
                    import.meta.env.VITE_APPWRITE_COLLECTION_ID
                );
                setBlogs(response.documents); // Set blogs from response
            } catch (error) {
                setError("Failed to fetch blogs. Please try again later.");
                console.error("Error fetching blogs:", error);
            } finally {
                setLoading(false); // Stop loading
            }
        };

        fetchBlogs();
    }, []);

    // Open blog modal
    const openBlogModal = (blog) => {
        setSelectedBlog(blog);
    };

    // Close blog modal
    const closeBlogModal = () => {
        setSelectedBlog(null);
    };

    // Display loading state
    if (loading) {
        return (
            <div className="mt-5 text-center">
                <p>Loading blogs...</p>
            </div>
        );
    }

    // Display error state
    if (error) {
        return (
            <div className="mt-5 text-center text-red-500">
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div className="mt-5 relative z-10">
            <h2 className="text-2xl font-bold text-gray-800">Latest Blogs</h2>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="mt-4"
            >
                {blogs.map((blog) => (
                    <SwiperSlide key={blog.$id} className="h-auto">
                        <BlogCard blog={blog} onClick={() => openBlogModal(blog)} />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Blog Details Modal */}
            {selectedBlog && (
                <BlogDetailsModal blog={selectedBlog} onClose={closeBlogModal} />
            )}
        </div>
    );
};

export default BlogSlider;