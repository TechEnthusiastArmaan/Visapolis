import Image from "next/image";
import Link from "next/link";

const BannerSection = () => {
    return (
        <div className="banner-area banner-style-six text-center navigation-circle overflow-hidden text-light auto-height">
            <div className="banner-fade swiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide banner-style-six">
                        <div className="item bg-cover shadow dark" style={{ backgroundImage: `url(/assets/img/banner/4.jpg)` }}>
                            <div className="banner-syle-six-shape">
                                <Image src="/assets/img/shape/11.png" alt="Shape" width={1368} height={699} />
                                {/* <Image src="/assets/img/shape/10.png" alt="Shape" width={205} height={230} /> */}
                            </div>
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-xl-8 offset-xl-2">
                                        <div className="content">
                                            <h4>Solutions for all type of visa</h4>
                                            <h2>Immigration & visa consutants</h2>
                                            <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia.Dicta sunt explicabo. Nemo enim ipsam.</p>
                                            <div className="button"><Link href="/about" className="btn-style-one circle">Discover More <span></span></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide banner-style-six">
                        <div className="item bg-cover shadow dark" style={{ backgroundImage: `url(/assets/img/banner/6.jpg)` }}>
                           <div className="banner-syle-six-shape">
                                <Image src="/assets/img/shape/11.png" alt="Shape" width={1368} height={699} />
                                {/* <Image src="/assets/img/shape/10.png" alt="Shape" width={205} height={230} /> */}

                           </div>
                           <div className="container">
                              <div className="row align-items-center">
                                 <div className="col-xl-8 offset-xl-2">
                                    <div className="content">
                                       <h4>Welcome to visa service</h4>
                                       <h2>Best solution in al immigration</h2>
                                       <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia.Dicta sunt explicabo. Nemo enim ipsam.</p>
                                       <div className="button"><Link href="/about" className="btn-style-one circle">Discover More <span></span></Link></div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                </div>
                <div className="baner-one-pagination"></div>
            </div>
        </div>
    )
}
export default BannerSection;