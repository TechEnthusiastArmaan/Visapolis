// BlogSection.js

import Image from 'next/image';
import Link from 'next/link';
// 1. Import the server action to fetch blogs.
//    Adjust this path based on your actual file structure.
import { getPublishedBlogs } from '@/app/admin/blog/actions';

// 2. Convert the component to an 'async' function to allow server-side data fetching.
const BlogSection = ({ blogs }) => {

    // 3. Fetch the latest 4 published blog posts. We fetch 4 because the design shows 1 large + 3 small.
    // Remove the async/await since blogs are passed as props
    if (!blogs || blogs.length === 0) {
        // You could return a message here, but returning null will simply hide the section.
        return null; 
    }

    // 5. Separate the latest blog for the featured section and the rest for the grid.
    const featuredBlog = blogs[0];
    const otherBlogs = blogs.slice(1); // Takes the 2nd, 3rd, and 4th posts

    // Helper function to get a fallback image
    const getFallbackImage = (index) => {
        const fallbackImages = [
            '/assets/img/blog/1.jpg',
            '/assets/img/blog/2.jpg', 
            '/assets/img/blog/3.jpg',
            '/assets/img/blog/4.jpg',
            '/assets/img/blog/5.jpg',
            '/assets/img/blog/6.jpg'
        ];
        return fallbackImages[index % fallbackImages.length];
    };

    return (
        <div id="blog" className="blog-style-two-area default-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                        <div className="site-heading text-center">
                            <h4 className="sub-title">News Updates</h4>
                            <h2 className="title split-text">Recent story articles <br /> in our community</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="blog-grid-items wow fadeInUp">
                            {/* 6. Dynamically render the smaller blog posts */}
                            {otherBlogs.map((blog, index) => (
                                <div className="blog-grid-item" key={blog.slug}>
                                    <div className="thumb">
                                        <Image 
                                            src={blog.imageUrl || getFallbackImage(index)} 
                                            alt={blog.title} 
                                            width={100} 
                                            height={100} 
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div className="info">
                                        <ul className="blog-meta">
                                            <li>
                                                <i className="far fa-clock"></i> 
                                                {/* Format the date for display */}
                                                {new Date(blog.createdAt).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </li>
                                        </ul>
                                        <h4>
                                            {/* Link to the blog post's detail page */}
                                            <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                                        </h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-xl-7 pl-80 pl-md-15 pl-xs-15">
                       {/* 7. Dynamically render the featured blog post */}
                       {featuredBlog && (
                            <div className="blog-style-two wow fadeInUp" data-wow-delay="100ms">
                               <div className="thumb">
                                   <Image 
                                       src={featuredBlog.imageUrl || '/assets/img/blog/6.jpg'} 
                                       alt={featuredBlog.title} 
                                       width={672} // Adjusted width based on 7-column layout
                                       height={460} // Adjusted height to maintain aspect ratio
                                       style={{ objectFit: 'cover', borderRadius: '8px' }}
                                   />
                               </div>
                               <div className="info">
                                   <h3>
                                       <Link href={`/blog/${featuredBlog.slug}`}>
                                           {featuredBlog.title}
                                       </Link>
                                   </h3>
                                   <Link className="circle-icon-btn" href={`/blog/${featuredBlog.slug}`}>
                                      <div className="button-icon">
                                          <Image src="/assets/img/icon/arrow-up.png" alt="Arrow" width={14} height={14} />
                                      </div>
                                      <span>Know More</span>
                                   </Link>
                               </div>
                           </div>
                       )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogSection;