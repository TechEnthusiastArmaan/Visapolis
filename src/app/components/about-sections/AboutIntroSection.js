import Image from 'next/image';
import Link from 'next/link';

const AboutIntroSection = () => {
    return (
        <div className="about-style-three-area default-padding">
            <div className="container">
                <div className="about-style-three-items">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="about-style-three-info">
                                <div className="experience-style-one mb-50">
                                    <h2 style={{ backgroundImage: `url(/assets/img/about/5.jpg)` }}>30</h2>
                                    <h4>Years of Visa <br /> Guidance & Support</h4>
                                </div>
                                <h4 className="sub-title">About our company</h4>
                                <h2 className="title split-text">Thrusted visa & immigration solutions</h2>
                                <p className="wow fadeInUp">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of.</p>
                                <ul className="list-card wow fadeInUp" data-wow-delay="100ms">
                                    <li>
                                        <div className="top">
                                            <Image src="/assets/img/icon/16.png" alt="Icon" width={55} height={55} />
                                            <h4>Best consultancy agency</h4>
                                        </div>
                                        <p>Almost do am or limits hearts. Resolve parties but why she shewing.</p>
                                    </li>
                                    <li>
                                        <div className="top">
                                            <Image src="/assets/img/icon/17.png" alt="Icon" width={55} height={55}/>
                                            <h4>Return visas available</h4>
                                        </div>
                                        <p>Regular do am or limits hearts. Resolve parties but why she shewing.</p>
                                    </li>
                                </ul>
                                <Link href="/about" className="btn-style-one circle mt-30 wow fadeInUp" data-wow-delay="200ms">Discover More <span></span></Link>
                            </div>
                        </div>
                        <div className="col-xl-5 offset-xl-1 col-lg-6">
                            <div className="about-three-thumb">
                                <Image className="wow fadeInUp" src="/assets/img/thumb/6.jpg" alt="Office thumb" width={522} height={705}/>
                                <div className="success-rate wow fadeInDown" data-wow-delay="100ms">
                                    <div className="circle-progress">
                                        <div className="progressbar">
                                            <h4>Success Rate</h4>
                                            {/* This data-percent attribute is what the script reads */}
                                            <div className="circle" data-percent="78">
                                                <strong></strong>
                                            </div>
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

export default AboutIntroSection;