// src/app/blog/page.js

import Breadcrumb from '../../components/about-sections/Breadcrumb';
import BlogGridClient from "../../components/blog-sections/BlogGridClient";
import dbConnect from "@/lib/dbconnect"; // Import the database connection
import Blog from "@/models/Blog"; // Import your new Blog model

export const metadata = {
  title: 'Latest Blog Posts',
  description: 'Read the latest news and stories from the Visaco community. Stay updated on immigration and visa topics.',
};

/**
 * This is a new server-side function to fetch blog posts from MongoDB.
 * It only retrieves posts that have been marked as 'Published' in the admin panel.
 */
async function getPublishedPosts() {
    try {
        await dbConnect();
        const posts = await Blog.find({ isPublished: true }).sort({ createdAt: -1 });
        // We need to serialize the data to pass it from a Server Component to a Client Component.
        return JSON.parse(JSON.stringify(posts));
    } catch (error) {
        console.error("Failed to fetch blog posts:", error);
        return []; // Return an empty array on error to prevent the page from crashing.
    }
}

// The page is now an `async` component to allow for data fetching.
export default async function BlogPage() {
    // 1. Fetch the real post data from the database.
    const posts = await getPublishedPosts();

    return (
        <>
            <Breadcrumb title="Latest Blog" breadcrumbText="Blog" />

            {/* 2. Pass the fetched `posts` data as a prop to your client component. */}
            <BlogGridClient posts={posts} />
        </>
    );
}