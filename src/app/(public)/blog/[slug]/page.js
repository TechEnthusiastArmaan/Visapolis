// src/app/(public)/blog/[slug]/page.js

import Breadcrumb from "../../../(public)/components/about-sections/Breadcrumb";
import BlogPostClient from "../../../(public)/components/blog-sections/BlogPostClient";
import dbConnect from "../../../../lib/dbconnect";
import Blog from "../../../../models/Blog";
import { notFound } from "next/navigation";
// --- This is a new server-side function to fetch a single post by its slug ---
async function getPost(slug) {
    await dbConnect();
    const post = await Blog.findOne({ slug, isPublished: true });
    if (!post) {
        // If no post is found, trigger a 404 page
        notFound(); 
    }
    return JSON.parse(JSON.stringify(post));
}

// --- This function now generates dynamic metadata for SEO ---
export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  return {
    title: post.title,
    description: post.content.substring(0, 160), // Use the first 160 chars for the description
  };
}

// --- This is the main page component ---
export default async function SingleBlogPage({ params }) {
    // Fetch the specific post based on the URL's slug
    const post = await getPost(params.slug);

    return (
        <>
            {/* The Breadcrumb now uses the real post title */}
            <Breadcrumb title={post.title} breadcrumbText="Blog" />

            <div className="blog-area single full-blog default-padding">
                <div className="container">
                    <div className="blog-items">
                        <div className="row">
                            <div className="blog-content wow fadeInUp col-lg-10 offset-lg-1 col-md-12">
                                {/* Pass the fetched post data to the client component */}
                                <BlogPostClient post={post} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}