import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { blogsData } from "./Blog"; // Ensure this import path is correct

const BlogDetails = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const selectedBlog = blogsData.blogs.find((blog) => blog.id === Number(id));
    if (selectedBlog) {
      setBlog(selectedBlog);
    } else {
      console.error(`Blog with id ${id} not found`);
    }
  }, [id]);

  useEffect(() => {
    if (blog) {
      document.title = `${blog.title} | Blog Details`;
    }
  }, [blog]);

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl mb-4 animate-pulse">
            Loading blog details or blog not found...
          </p>
          <Link
            to="/blog"
            className="inline-block bg-white/5 border border-white/10 text-white py-2 px-6 rounded-full hover:bg-white/10 transition-all"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white">
      <div className="container mx-auto px-6 py-16">
        <article className="max-w-3xl mx-auto">
          {/* Blog Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              {blog.title}
            </h1>
            <div className="flex items-center text-white/70">
              <span className="mr-4">{blog.date}</span>
            </div>
          </header>

          {/* Blog Content */}
          <div className="prose prose-invert">
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p>{blog.content.introduction}</p>
            </section>

            {/* Key Points */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Key Points</h2>
              {blog.content.key_points.map((point) => (
                <div key={point.heading} className="mb-6">
                  <h3 className="text-xl font-semibold mb-2 text-purple-400">
                    {point.heading}
                  </h3>
                  <p>{point.details}</p>
                </div>
              ))}
            </section>

            {/* Conclusion */}
            <section className="mt-8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-6 rounded-xl border border-white/10">
              <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
              <p>{blog.content.conclusion}</p>
            </section>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex justify-between items-center">
            <Link
              to="/blog"
              className="inline-block bg-white/5 border border-white/10 text-white font-medium py-3 px-8 rounded-full hover:bg-white/10 transition-all"
            >
              Back to Insights
            </Link>

            {/* Optional Previous & Next Blog Navigation */}
            <div className="flex gap-4 text-sm text-white/70">
              {Number(id) > 0 && (
                <Link
                  to={`/blog/${Number(id) - 1}`}
                  className="hover:underline"
                >
                  ← Previous
                </Link>
              )}
              {Number(id) < blogsData.blogs.length - 1 && (
                <Link
                  to={`/blog/${Number(id) + 1}`}
                  className="hover:underline"
                >
                  Next →
                </Link>
              )}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogDetails;
