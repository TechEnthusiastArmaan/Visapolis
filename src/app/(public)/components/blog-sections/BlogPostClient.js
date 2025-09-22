// src/app/(public)/components/blog-sections/BlogPostClient.js
'use client'; // This is a client component

import Image from 'next/image';
import Link from 'next/link'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faUserCircle } from '@fortawesome/free-solid-svg-icons';

export default function BlogPostClient({ post }) {
    // A safeguard in case the post prop is missing
    if (!post) {
        return (
            <div className="text-center">
                <h2>Post Not Found</h2>
                <p>Sorry, we couldn&apos;t find the post you were looking for.</p>
                <Link href="/blog">Back to Blog</Link>
            </div>
        );
    }

    // Format the date for a readable display
    const formattedDate = new Date(post.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className="item">
            {/* 1. Blog Post Image (Thumb) */}
            <div className="thumb" style={{ textAlign: 'center', marginBottom: '20px' }}>
                {post.imageUrl ? (
                    <Image 
                        src={post.imageUrl} 
                        alt={post.title}
                        width={1200}
                        height={600}
                        style={{ width: 'auto', height: '500px', borderRadius: '5px' }} 
                        priority // Load this image with high priority
                    />
                ) : (
                    // Optional: Render a placeholder if no image exists
                    <div style={{ height: '300px', backgroundColor: '#f0f0f0', borderRadius: '5px' }}></div>
                )}
            </div>

            {/* 2. Post Information (Meta, Title, and Content) */}
            <div className="info">
                {/* 2a. Meta Data (Date & Author) */}
                <div className="meta">
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faCalendar} /> {formattedDate}
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faUserCircle} /> By {post.author || 'Admin'}
                        </li>
                    </ul>
                </div>
                
                {/* 2b. Blog Title */}
                <h2 className="title mt-3">{post.title}</h2>
                
                {/* 
                  2c. Content from WYSIWYG Editor.
                  This div will render the bold text, paragraphs, lists, etc.,
                  saved from your admin panel's rich text editor.
                */}
                <div
                    className="blog-content-html mt-4" 
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* The "Post Author" div has been completely removed as requested. */}
            </div>
        </div>
    );
}