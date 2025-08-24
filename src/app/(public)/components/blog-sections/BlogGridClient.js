// src/app/components/blog-sections/BlogGridClient.js
"use client";
import { useTemplateScripts } from "@/app/(public)/hooks/useTemplateScripts";
import BlogCard from "./BlogCard";

// Note: Removed Link, FontAwesomeIcon, and hardcoded blogPosts data.

// This component now accepts the real 'posts' data fetched from the server.
export default function BlogGridClient({ posts }) {
    // Initializes WOW.js animations
    useTemplateScripts();

    return (
        <div className="home-blog-area blog-grid default-padding">
            <div className="container">
                <div className="blog-item-box">
                    <div className="row">
                        {/* 
                          Check if posts exist and have data. If not, show a message.
                          If they exist, map over them to render a BlogCard for each post.
                        */}
                        {posts && posts.length > 0 ? (
                            posts.map((post, index) => (
                                <BlogCard 
                                    key={post._id || index} // Use post._id for a unique key
                                    post={post} 
                                    delay={`${index * 100}ms`} 
                                />
                            ))
                        ) : (
                            <div className="col-12 text-center">
                                <h2>No Posts Yet</h2>
                                <p>Come back later to read our latest articles.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* 
                  Pagination is commented out for now.
                  Implementing dynamic pagination requires a more complex setup (e.g., fetching total post count, handling page state).
                  We can add this back as a future enhancement.
                */}
                {/* 
                <div className="row">
                    <div className="col-md-12 pagi-area text-center">
                        <nav aria-label="navigation">
                            <ul className="pagination">
                                ...
                            </ul>
                        </nav>
                    </div>
                </div> 
                */}
            </div>
        </div>
    );
}