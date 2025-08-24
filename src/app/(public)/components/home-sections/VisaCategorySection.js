import Image from 'next/image';
import Link from 'next/link';

const VisaCategorySection = () => {
    return (
         <div id="services" className="visa-category-two-area default-padding bg-gray" style={{backgroundImage: `url(/assets/img/shape/28.png)`}}>
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div className="site-heading text-center">
                        <h4 className="sub-title">Varieties of visa</h4>
                        <h2 className="title split-text">Achieve your dream of citizenship & immigration</h2>
                     </div>
                  </div>
               </div>
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="visa-category-two-items wow fadeInUp" data-wow-delay="100ms">
                        <div className="visa-category-two-carousel swiper">
                           <div className="swiper-wrapper">
                              {/* Single Item */}
                              <div className="swiper-slide">
                                 <div className="visa-cat-style-two">
                                    <div className="info">
                                       <div className="icon"><Image src="/assets/img/icon/business-visa-2.png" alt="Business Visa Icon" width={70} height={70} /></div>
                                       <h4><Link href="/visa-details">Business Visa</Link></h4>
                                       <p>Business visa is a conditional permission provided by a region to a foreigner to enter, stay in, or leave that country.</p>
                                       <Link className="circle-icon-btn" href="/visa-details">
                                          <div className="button-icon"><Image src="/assets/img/icon/arrow-up.png" alt="Arrow" width={16} height={15} /></div>
                                          <span>Know More</span>
                                       </Link>
                                    </div>
                                    <div className="thumb"><Image src="/assets/img/category/1.png" alt="Business visa visual" width={412} height={212}/></div>
                                 </div>
                              </div>
                              {/* Single Item */}
                              <div className="swiper-slide">
                                 <div className="visa-cat-style-two">
                                    <div className="info">
                                       <div className="icon"><Image src="/assets/img/icon/student-visa-2.png" alt="Student Visa Icon" width={70} height={70}/></div>
                                       <h4><Link href="/visa-details">Student Visa</Link></h4>
                                       <p>Student visa is a conditional permission provided by a region to a foreigner to enter, stay in, or leave that country.</p>
                                       <Link className="circle-icon-btn" href="/visa-details">
                                          <div className="button-icon"><Image src="/assets/img/icon/arrow-up.png" alt="Arrow" width={16} height={15} /></div>
                                          <span>Know More</span>
                                       </Link>
                                    </div>
                                    <div className="thumb"><Image src="/assets/img/category/2.png" alt="Student visa visual" width={412} height={212}/></div>
                                 </div>
                              </div>
                              {/* Single Item */}
                              <div className="swiper-slide">
                                 <div className="visa-cat-style-two">
                                    <div className="info">
                                       <div className="icon"><Image src="/assets/img/icon/travel-visa-2.png" alt="Travel Visa Icon" width={70} height={70}/></div>
                                       <h4><Link href="/visa-details">Travel Visa</Link></h4>
                                       <p>Travel visa is a conditional permission provided by a region to a foreigner to enter, stay in, or leave that country.</p>
                                       <Link className="circle-icon-btn" href="/visa-details">
                                          <div className="button-icon"><Image src="/assets/img/icon/arrow-up.png" alt="Arrow" width={16} height={15}/></div>
                                          <span>Know More</span>
                                       </Link>
                                    </div>
                                    <div className="thumb"><Image src="/assets/img/category/3.png" alt="Travel visa visual" width={412} height={212}/></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="text-center mt-60">
                           <p>Don’t Hesitate, Contact us for Better Help and Services. <Link href="/visa">Explore all Visa Categories.</Link></p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
    );
}
export default VisaCategorySection;