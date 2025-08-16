// src/app/blog/page.js

import Breadcrumb from "../components/about-sections/Breadcrumb";
import BlogGridClient from "../components/blog-sections/BlogGridClient";

export const metadata = {
  title: 'Latest Blog Posts',
  description: 'Read the latest news and stories from the Visaco community. Stay updated on immigration and visa topics.',
};

export default function BlogPage() {
    return (
        <>
            <Breadcrumb title="Latest Blog" breadcrumbText="Blog" />
            <BlogGridClient />
        </>
    );
}