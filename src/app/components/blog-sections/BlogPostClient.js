// src/app/components/blog-sections/BlogPostClient.js
"use client";
import { useTemplateScripts } from "@/app/hooks/useTemplateScripts";
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPostClient() {
    // Initializes animations
    useTemplateScripts();

    return (
        <div className="item">
            <div className="blog-item-box">
            
                <div className="thumb">
                    <Image src="/assets/img/blog/v1.jpg" alt="Blog Post Thumbnail" width={988} height={450} style={{borderRadius: '8px'}} />
                </div>
                <div className="info">
                    <div className="meta">
                        <ul>
                            <li>
                                <i className="fas fa-calendar-alt"></i> March 16, 2025
                            </li>
                            <li>
                                <a href="#"><i className="fas fa-user-circle"></i> Md Sohag</a>
                            </li>
                        </ul>
                    </div>
                    <p>
                        Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her. 
                    </p>
                    <p>
                        New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves. 
                    </p>
                    <blockquote>
                        Celebrated share of first to worse. Weddings and any opinions suitable smallest nay. Houses or months settle remove ladies appear. Engrossed suffering supposing he recommend do eagerness.
                    </blockquote>
                    <p>
                        Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves. 
                    </p>
                    <h3>Conduct replied off led whether?</h3>
                    {/* **FIX: Added the correct className to this ul tag** */}
                    <ul className="list-style-four">
                        <li>Pretty merits waited six</li>
                        <li>General few civilly amiable pleased account carried.</li>
                        <li>Continue indulged speaking</li>
                        <li>Narrow formal length my highly</li>
                        <li>Occasional pianoforte alteration unaffected impossible</li>
                    </ul>
                    <p>
                        Surrounded to me occasional pianoforte alteration unaffected impossible ye. For saw half than cold. Pretty merits waited six talked pulled you. Conduct replied off led whether any shortly why arrived adapted. Numerous ladyship so raillery humoured goodness received an. So narrow formal length my highly longer afford oh. Tall neat he make or at dull ye. Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Iure, laudantium, tempore. Autem dolore repellat, omnis quam? Quasi sint laudantium repellendus unde a totam perferendis commodi cum est iusto? Minima, laborum. 
                    </p>
                </div>
            </div>

             {/* Post Author Box */}
             <div className="post-author">
                <div className="thumb">
                    <Image src="/assets/img/team/7.jpg" alt="Author Photo" width={150} height={150} />
                </div>
                <div className="info">
                    <h4><a href="#">Md Sohag</a></h4>
                    <p>
                        Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec at odio aea the dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit to the consectetur elit. All the Lorem Ipsum generators on the Internet tend.
                    </p>
                </div>
            </div>

            {/* Post Tags & Share */}
            <div className="post-tags share">
                <div className="tags">
                    <h4>Tags: </h4>
                    <Link href="#">Algorithm</Link>
                    <Link href="#">Data science</Link> 
                </div>

                <div className="social">
                    <h4>Share:</h4>
                    <ul>
                        <li><a className="facebook" href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a className="twitter" href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
                        <li><a className="pinterest" href="#" target="_blank"><i className="fab fa-pinterest-p"></i></a></li>
                        <li><a className="linkedin" href="#" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                    </ul>
                </div>
            </div>

            {/* Post Pagination */}
            <div className="post-pagi-area">
                <div className="post-previous">
                    <Link href="#">
                        <div className="icon"><i className="fas fa-angle-double-left"></i></div>
                        <div className="nav-title"> Previus Post <h5>Discovery incommode</h5></div>
                    </Link>
                </div>
                <div className="post-next">
                    <Link href="#">
                        <div className="nav-title">Next Post <h5>Discovery incommode</h5></div> 
                        <div className="icon"><i className="fas fa-angle-double-right"></i></div>
                    </Link>
                </div>
            </div>
        </div>
    );
}