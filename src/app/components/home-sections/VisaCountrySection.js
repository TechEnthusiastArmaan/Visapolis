import Image from 'next/image';
import Link from 'next/link';

const VisaCountrySection = () => {
    return (
         <div id="country" className="visa-country-two-area default-padding bg-gray bg-cover" style={{backgroundImage: `url(/assets/img/shape/banner-1.jpg)`}}>
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div className="site-heading text-center">
                        <h4 className="sub-title">Explore Our Covered</h4>
                        <h2 className="title split-text">Start your journey pick <br /> your ideal country</h2>
                     </div>
                  </div>
               </div>
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="country-coverage-two-items wow fadeInUp" data-wow-delay="100ms">
                        <div className="country-coverage-carousel swiper">
                           <div className="swiper-wrapper">
                              {/* Single Item */}
                              <div className="swiper-slide">
                                 <div className="country-coverage-two-item">
                                    <Image src="/assets/img/icon/france.png" alt="France Flag" width={80} height={80} />
                                    <h5><Link href="/country-details">France</Link></h5>
                                    <span>Artois</span>
                                    <ul className="list-style-one">
                                       <li>Student Visa & Admision</li>
                                       <li>5 Years Business Visa</li>
                                       <li>Apply Visa Online</li>
                                    </ul>
                                 </div>
                              </div>
                              {/* Single Item */}
                              <div className="swiper-slide">
                                    <div className="country-coverage-two-item">
                                        <Image src="/assets/img/icon/uk.png" alt="UK Flag" width={80} height={80}/>
                                        <h5><Link href="/country-details">United Kingdom</Link></h5>
                                        <span>Asheville</span>
                                        <ul className="list-style-one">
                                            <li>Student Visa & Admision</li>
                                            <li>5 Years Business Visa</li>
                                            <li>Apply Visa Online</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Single Item */}
                                <div className="swiper-slide">
                                    <div className="country-coverage-two-item">
                                        <Image src="/assets/img/icon/canada.png" alt="Canada Flag" width={80} height={80}/>
                                        <h5><Link href="/country-details">Canada</Link></h5>
                                        <span>Quebec</span>
                                        <ul className="list-style-one">
                                            <li>Student Visa & Admision</li>
                                            <li>5 Years Business Visa</li>
                                            <li>Apply Visa Online</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Single Item */}
                                <div className="swiper-slide">
                                    <div className="country-coverage-two-item">
                                        <Image src="/assets/img/icon/australia.png" alt="Australia Flag" width={80} height={80}/>
                                        <h5><Link href="/country-details">Australia</Link></h5>
                                        <span>Oceania</span>
                                        <ul className="list-style-one">
                                            <li>Student Visa & Admision</li>
                                            <li>5 Years Business Visa</li>
                                            <li>Apply Visa Online</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Single Item */}
                                <div className="swiper-slide">
                                    <div className="country-coverage-two-item">
                                        <Image src="/assets/img/icon/dubai.png" alt="Dubai Flag" width={80} height={80}/>
                                        <h5><Link href="/country-details">Dubai</Link></h5>
                                        <span>Abu Dhabi</span>
                                        <ul className="list-style-one">
                                            <li>Student Visa & Admision</li>
                                            <li>5 Years Business Visa</li>
                                            <li>Apply Visa Online</li>
                                        </ul>
                                    </div>
                                </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
    );
}
export default VisaCountrySection;