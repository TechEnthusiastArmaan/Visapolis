import Image from 'next/image';

const TestimonialSection = () => {
    return (
        <div className="testimonial-style-two-area default-padding bg-dark text-light">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                        <div className="site-heading text-center">
                            <h4 className="sub-title">Customers Feedback</h4>
                            <h2 className="title split-text">What are people saying <br /> about our service</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 testimonial-two-left-info" style={{backgroundImage: `url(/assets/img/shape/35.png)`}}>
                        <h2>4.8 <span>/5.0</span></h2>
                        <h3>Score on App Store</h3>
                        <div className="bottom">
                           <div className="provider-cards">
                              <Image src="/assets/img/team/7.jpg" alt="User" width={40} height={40}/>
                              <Image src="/assets/img/team/8.jpg" alt="User" width={40} height={40}/>
                              <Image src="/assets/img/team/9.jpg" alt="User" width={40} height={40}/>
                              <Image src="/assets/img/team/10.jpg" alt="User" width={40} height={40}/>
                              <h4>10K</h4>
                           </div>
                        </div>
                        <div className="testimonial-two-navs">
                            <div className="testimonial-style-two-prev">
                                <svg width="27" height="10" viewBox="0 0 27 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27 9H3L9.9 1" stroke="#ffffff" strokeWidth="2"/>
                                </svg>
                            </div>
                            <div className="testimonial-style-two-next">
                                <svg width="27" height="10" viewBox="0 0 27 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 9H24L17.1 1" stroke="#ffffff" strokeWidth="2"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8  testimoial-style-two-items">
                        <div className="testimonial-style-two-carousel swiper">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                <div className="testimonial-style-two-item">
                                    <div className="thumb">
                                        <Image src="/assets/img/team/12.jpg" alt="user" width={310} height={310}/>
                                    </div>
                                    <div className="info">
                                        <h3>Kind and professional</h3>
<div className="ratings">
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star-half-alt"></i>
</div>
<p>
                                            Immigration advisory foundation was established with a small idea that was incepted in the minds of its promoters.
                                        </p>
<div className="provider-details">
<h4>Kamal Abraham</h4>
<span>Visa Customer</span>
</div>
</div>
</div>
</div>
<div className="swiper-slide">
                                <div className="testimonial-style-two-item">
                                    <div className="thumb">
                                        <Image src="/assets/img/team/11.jpg" alt="user" width={310} height={310}/>
</div>
<div className="info">
<h3>Approachable and helpful</h3>
<div className="ratings">
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
</div>
<p>
                                            Permanent advisory foundation was established with a small idea that was incepted in the minds of its promoters.
                                        </p>
<div className="provider-details">
<h4>Daniyel Joe</h4>
<span>Passport Customer</span>
</div>
</div>
</div>
</div>
                                {/* ... Testimonial slides */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TestimonialSection;