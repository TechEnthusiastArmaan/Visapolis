// src/app/components/blog-sections/BlogCard.js
import { faClock } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ post, delay }) => {
    // Format the date for display.
    const postDate = new Date(post.createdAt).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    // Construct the correct, dynamic URL for the blog post.
    const postUrl = `/blog/${post.slug}`;

    return (
        <div className="col-lg-4 col-md-6 mb-50">
            <div className="home-blog-style-three wow fadeInUp" data-wow-delay={delay}>
                <div className="thumb">
                    <Link href={postUrl}>
                        {/* Use post.imageUrl from your database. Fallback to a default if it doesn't exist. */}
                        <Image 
                            src={post.imageUrl || '/assets/img/blog/1.jpg'} 
                            alt={post.title} 
                            width={411} 
                            height={261} 
                            style={{ objectFit: 'cover', width: '100%', height: '261px' }} 
                        />
                    </Link>
                    <div className="meta">
                        <ul>
                            <li><FontAwesomeIcon icon={faClock} /> {postDate}</li>
                            <li>
                                {/* The author link can be made dynamic later if you have author pages. */}
                                <Link href="#">{post.author || 'Admin'}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="info">
                    <div className="inner">
                        <div className="content">
                            {/* The title now links to the dynamic post URL. */}
                            <h4><Link href={postUrl}>{post.title}</Link></h4>
                            <Link className="circle-icon-btn" href={postUrl}>
                                <div className="button-icon">
                                    <Image src="/assets/img/icon/arrow-up.png" alt="Arrow Icon" width={16} height={15} />
                                </div>
                                <span>Know More</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;