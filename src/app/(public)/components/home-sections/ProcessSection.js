import Image from 'next/image';

const ProcessSection = () => {
  return (
    <div className="process-style-one-area text-center default-padding">
        <div className="container">
            <div className="row">
                <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                    <div className="site-heading text-center">
                        <h4 className="sub-title">Simple visa process</h4>
                        <h2 className="title split-text">Get your visa in three quick <br /> and easy steps</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="process-style-one-items wow fadeInUp" data-wow-delay="100ms">
                        {/* Single Item */}
                        <div className="process-style-one-item hover-active-item">
                            <div className="icon">
                                <Image src="/assets/img/icon/9.png" alt="Form Icon" width={80} height={80} />
                            </div>
                            <div className="info">
                                <div className="shape">
                                    <Image src="/assets/img/shape/41.png" alt="Decorative Shape" width={220} height={200} style={{ width: 'auto', height: 'auto' }}/>
                                </div>
                                <span>01</span>
                                <h4>Complete Online Form</h4>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available, but majority have suffered.
                                </p>
                            </div>
                        </div>
                        {/* End Single Item */}
                        {/* Single Item */}
                        <div className="process-style-one-item hover-active-item active">
                            <div className="icon">
                                <Image src="/assets/img/icon/10.png" alt="Document Icon" width={80} height={80}/>
                            </div>
                            <div className="info">
                                <div className="shape">
                                    <Image src="/assets/img/shape/41.png" alt="Decorative Shape" width={220} height={200} style={{ width: 'auto', height: 'auto' }}/>
                                </div>
                                <span>02</span>
                                <h4>Documents & Payments</h4>
                                <p>
                                    Regular are many variations of passages of Lorem Ipsum available, but majority have suffered.
                                </p>
                            </div>
                        </div>
                        {/* End Single Item */}
                        {/* Single Item */}
                        <div className="process-style-one-item hover-active-item">
                            <div className="icon">
                                <Image src="/assets/img/icon/11.png" alt="Visa Icon" width={80} height={80}/>
                            </div>
                            <div className="info">
                                <div className="shape">
                                    <Image src="/assets/img/shape/41.png" alt="Decorative Shape" width={220} height={200} style={{ width: 'auto', height: 'auto' }}/>
                                </div>
                                <span>03</span>
                                <h4>Receive Your Visa</h4>
                                <p>
                                    Alternate are many variations of passages of Lorem Ipsum available, but majority have suffered.
                                </p>
                            </div>
                        </div>
                        {/* End Single Item */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
export default ProcessSection;