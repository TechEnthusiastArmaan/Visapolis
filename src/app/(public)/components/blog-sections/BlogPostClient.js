// src/app/components/blog-sections/BlogPostClient.js
"use client";
import { useTemplateScripts } from "@/app/(public)/hooks/useTemplateScripts";
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown'; // <-- Import the markdown renderer

// The component now accepts the full `post` object as a prop.
export default function BlogPostClient({ post }) {
    // Initializes animations
    useTemplateScripts();

    // Format the date for display.
    const postDate = new Date(post.createdAt).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });

    return (
        <div className="item">
            <div className="blog-item-box">
            
                <div className="thumb">
                    {/* Use the dynamic image URL from the post. Use a fallback if it's missing. */}
                    <Image 
                        src={post.imageUrl || "/assets/img/blog/v1.jpg"} 
                        alt={post.title} 
                        width={988} 
                        height={450} 
                        style={{borderRadius: '8px', width: '100%', height: 'auto', objectFit: 'cover'}} 
                    />
                </div>
                <div className="info">
                    <div className="meta">
                        <ul>
                            <li>
                                <i className="fas fa-calendar-alt"></i> {postDate}
                            </li>
                            <li>
                                {/* Use dynamic author name. The link can be a placeholder. */}
                                <a href="#"><i className="fas fa-user-circle"></i> {post.author || 'Admin'}</a>
                            </li>
                        </ul>
                    </div>
                    
                    {/* 
                      This is where the main content from your admin panel's textarea is rendered.
                      ReactMarkdown safely converts Markdown text into HTML.
                    */}
                    <div className="markdown-content">
                        <ReactMarkdown>{post.content}</ReactMarkdown>
                    </div>

                </div>
            </div>

            {/* Post Author Box (Now uses dynamic data) */}
            <div className="post-author">
                <div className="thumb">
                    {/* Placeholder author image, can be made dynamic later */}
                    <Image src="/assets/img/team/7.jpg" alt="Author Photo" width={150} height={150} />
                </div>
                <div className="info">
                    {/* Using dynamic author name */}
                    <h4><a href="#">{post.author || 'Admin'}</a></h4>
                    {/* A generic bio, can be added to the Blog model in the future */}
                    <p>
                        Our authors are dedicated to providing the most up-to-date and insightful information on immigration and visa processes.
                    </p>
                </div>
            </div>

            {/* NOTE: Post Tags & Share / Post Pagination are static for now */}
            {/* Building these dynamically requires adding 'tags' to your Blog model */}
            {/* and logic to find the next/previous post, which can be a future enhancement. */}
            
          

            {/* Post Pagination */}
            <div className="post-pagi-area">
                <div className="post-previous">
                    <Link href="/blog">
                        <div className="icon"><i className="fas fa-angle-double-left"></i></div>
                        <div className="nav-title"> Back to Blog</div>
                    </Link>
                </div>
                {/* <div className="post-next"> ... Next post logic can be added later ... </div> */}
            </div>

            {/* Simple CSS to style the Markdown output to look like your original content */}
            <style jsx global>{`
                .markdown-content p, .markdown-content ul, .markdown-content h3 {
                    margin-bottom: 20px;
                }
                .markdown-content h3 {
                    font-size: 24px;
                    font-weight: 700;
                    color: var(--color-heading);
                }
                .markdown-content ul {
                    list-style-type: none;
                    padding-left: 0;
                }
                .markdown-content ul li {
                    position: relative;
                    padding-left: 25px;
                    margin-bottom: 10px;
                }
                .markdown-content ul li::before {
                    content: "\\f00c"; /* Font Awesome check icon */
                    font-family: "Font Awesome 5 Free";
                    font-weight: 900;
                    position: absolute;
                    left: 0;
                    top: 2px;
                    color: var(--color-primary); /* Your theme's primary color */
                }
                .markdown-content blockquote {
                    font-size: 18px;
                    padding: 20px 30px;
                    margin: 20px 0;
                    border-left: 5px solid #eee;
                    font-style: italic;
                    color: #555;
                }
            `}</style>
        </div>
    );
}