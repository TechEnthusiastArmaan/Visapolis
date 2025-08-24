import Image from "next/image";

const AboutTestimonialSection = () => {
    return (
        <div className="testimonial-style-three-area default-padding bg-gradient-minimal">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="testimonial-three-thumb">
                            <Image src="/assets/img/thumb/4.jpg" alt="Testimonial background" width={522} height={680}/>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1">
                        <div className="testimoial-style-three-items">
                            <div className="site-heading">
                                <h4 className="sub-title">Customers Feedback</h4>
                                <h2 className="title wow fadeInUp">What are people saying <br /> about our service</h2>
                            </div>
                            <div className="testimonial-style-three-carousel swiper wow fadeInUp" data-wow-delay="100ms">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="testimonial-style-three-item">
                                            <div className="quote"><Image src="/assets/img/icon/quote.png" alt="quote icon" width={60} height={60} /></div>
                                            <div className="info">
                                                <div className="top"><h4>Kind and professional</h4><div className="ratings"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></div></div>
                                                <p>Immigration advisory foundation was established with a small idea that was incepted in the minds of its promoters in the year 1994! We skilfully guide.</p>
                                                <div className="provider-details">
                                                    <div className="thumb"><Image src="/assets/img/team/12.jpg" alt="Author" width={60} height={60} /></div>
                                                    <div className="content"><h4>Kamal Abraham</h4><span>Visa Customer</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="testimonial-style-three-item">
                                            <div className="quote"><Image src="/assets/img/icon/quote.png" alt="quote icon" width={60} height={60} /></div>
                                            <div className="info">
                                                <div className="top"><h4>Helpful Interaction</h4><div className="ratings"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></div></div>
                                                <p>
                                                Visa can advisory foundation was established with a small idea that was incepted in the minds of its promoters in the year 1994! We skilfully guide.
                                            </p>
                                                <div className="provider-details">
                                                    <div className="thumb"><Image src="/assets/img/team/11.jpg" alt="Author" width={60} height={60} /></div>
                                                    <div className="content"><h4>Joey Tribianni</h4><span>Passport Customer</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* another slide can go here */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutTestimonialSection;