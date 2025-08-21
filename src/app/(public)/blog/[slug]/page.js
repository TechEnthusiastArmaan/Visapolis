// src/app/blog/[slug]/page.js

import Breadcrumb from "../../../components/about-sections/Breadcrumb";
import BlogPostClient from "../../../components/blog-sections/BlogPostClient";
import Link from 'next/link';
import Image from "next/image";

// This function could fetch metadata from a CMS in the future
export async function generateMetadata({ params }) {
  // For now, we'll use a static title.
  // In a real app: const post = await getPost(params.slug);
  const postTitle = "Partiality indulgence dispatched to of celebrated.";
  return {
    title: postTitle,
    description: "Read our detailed blog post on immigration and visa topics.",
  };
}

export default function SingleBlogPage({ params }) {
    // In the future, you'd use params.slug to fetch specific post data
    // const post = await getPost(params.slug);

    return (
        <>
            <Breadcrumb title="Partiality indulgence dispatched to of celebrated." breadcrumbText="Blog Single" />

            <div className="blog-area single full-blog default-padding">
                <div className="container">
                    <div className="blog-items">
                        <div className="row">
                            <div className="blog-content wow fadeInUp col-lg-10 offset-lg-1 col-md-12">
                                <BlogPostClient />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}