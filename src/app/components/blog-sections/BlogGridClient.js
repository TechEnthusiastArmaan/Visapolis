// src/app/components/blog-sections/BlogGridClient.js
"use client";
import { useTemplateScripts } from "@/app/hooks/useTemplateScripts";
import Link from "next/link";
import BlogCard from "./BlogCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

// Hardcoded data for the blog posts. This can be replaced with an API fetch later.
const blogPosts = [
    {
        image: "/assets/img/blog/1.jpg",
        date: "15 July, 2025",
        author: "Md Sohag",
        title: "Picked up a Brussels burger Sprouts with ham"
    },
    {
        image: "/assets/img/blog/2.jpg",
        date: "25 August, 2025",
        author: "Md Sohag",
        title: "This prefabrice passive house is highly sustainable"
    },
    {
        image: "/assets/img/blog/7.jpg",
        date: "18 March, 2025",
        author: "Md Sohag",
        title: "Announcing if attachment resolution sentim."
    },
    {
        image: "/assets/img/blog/10.jpg",
        date: "15 July, 2025",
        author: "Md Sohag",
        title: "Picked up a Brussels burger Sprouts with ham"
    },
    {
        image: "/assets/img/blog/11.jpg",
        date: "25 August, 2025",
        author: "Md Sohag",
        title: "This prefabrice passive house is highly sustainable"
    },
    {
        image: "/assets/img/blog/12.jpg",
        date: "18 March, 2025",
        author: "Md Sohag",
        title: "Announcing if attachment resolution sentim."
    }
];

export default function BlogGridClient() {
    // Initializes WOW.js animations
    useTemplateScripts();

    return (
        <div className="home-blog-area blog-grid default-padding">
            <div className="container">
                <div className="blog-item-box">
                    <div className="row">
                        {blogPosts.map((post, index) => (
                            <BlogCard 
                                key={index} 
                                post={post} 
                                delay={`${index * 100}ms`} 
                            />
                        ))}
                    </div>
                </div>

                {/* Pagination */}
                <div className="row">
                    <div className="col-md-12 pagi-area text-center">
                        <nav aria-label="navigation">
                            <ul className="pagination">
                                <li className="page-item"><Link className="page-link" href="#"><FontAwesomeIcon icon={faAngleDoubleLeft} /></Link></li>
                                <li className="page-item active"><Link className="page-link" href="#">1</Link></li>
                                <li className="page-item"><Link className="page-link" href="#">2</Link></li>
                                <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                                <li className="page-item"><Link className="page-link" href="#"><FontAwesomeIcon icon={faAngleDoubleRight} /></Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}