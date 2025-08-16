import Image from 'next/image';
import Link from 'next/link';

const BlogSection = () => {
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
                            <div className="blog-grid-item">
                            <div className="thumb">
                                <Image src="/assets/img/blog/3.jpg" alt="Blog Main Image" width={100} height={100}/>
                            </div>
                            <div className="info">
                                <ul className="blog-meta">
                                    <li>
                                        <i className="far fa-clock"></i> 12 March, 2025
                                    </li>
                                    <li>
                                        <a href="#"><i className="far fa-comments"></i> 18 Comments</a>
                                    </li>
                                </ul>
                                <h4><a href="blog-single-with-sidebar.html">Picked up a Brussels burger Sprouts with ham</a></h4>
                            </div>
                        </div>
                        {/*  End Single Item  */}
                        {/*  Single Item  */}
                        <div className="blog-grid-item">
                            <div className="thumb">
                                <Image src="/assets/img/blog/4.jpg" alt="Blog Main Image" width={100} height={100}/>
</div>
<div className="info">
<ul className="blog-meta">
<li>
<i className="far fa-clock"></i> 24 June, 2025
                                    </li>
<li>
<a href="#"><i className="far fa-comments"></i> 18 Comments</a>
</li>
</ul>
<h4><a href="blog-single-with-sidebar.html">This prefabrice passive house is highly sustainable</a></h4>
</div>
</div>
                        {/*  End Single Item  */}
                         {/*  Single Item  */}
                        <div className="blog-grid-item">
                            <div className="thumb">
                                <Image src="/assets/img/blog/5.jpg" alt="Blog Main Image" width={100} height={100}/>
</div>
<div className="info">
<ul className="blog-meta">
<li>
<i className="far fa-clock"></i> 18 September, 2025
                                    </li>
<li>
<a href="#"><i className="far fa-comments"></i> 18 Comments</a>
</li>
</ul>
<h4><a href="blog-single-with-sidebar.html">Announcing if attachment resolution sentim.</a></h4>
</div>
</div>
                            {/* Blog Items */}
                        </div>
                    </div>
                    <div className="col-xl-7 pl-80 pl-md-15 pl-xs-15">
                       <div className="blog-style-two wow fadeInUp" data-wow-delay="100ms">
                           <div className="thumb"><Image src="/assets/img/blog/6.jpg" alt="Blog Main Image" width={308.39} height={422.41}/></div>
                           <div className="info">
                               {/* Blog Meta */}
                               <h3><Link href="/blog-single">Regulation of people attachment resolution sentim are estimate.</Link></h3>
                               <Link className="circle-icon-btn" href="/blog-single">
                                  <div className="button-icon"><Image src="/assets/img/icon/arrow-up.png" alt="Arrow" width={14} height={14} /></div>
                                  <span>Know More</span>
                               </Link>
                           </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BlogSection;