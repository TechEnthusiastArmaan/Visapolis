// src/app/components/blog-sections/BlogCard.js
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ post, delay }) => {
    return (
        <div className="col-lg-4 col-md-6 mb-50">
            <div className="home-blog-style-three wow fadeInUp" data-wow-delay={delay}>
                <div className="thumb">
                    <Image src={post.image} alt={post.title} width={411} height={261} style={{ objectFit: 'cover' }} />
                    <div className="meta">
                        <ul>
                            <li><i className="fas fa-clock"></i> {post.date}</li>
                            <li><Link href="#">{post.author}</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="info">
                    <div className="inner">
                        <div className="content">
                            <h4><Link href="/blog-single-with-sidebar">{post.title}</Link></h4>
                            <Link className="circle-icon-btn" href="/blog-single-with-sidebar">
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