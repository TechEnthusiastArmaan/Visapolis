import Image from 'next/image';
import Link from 'next/link';

const AboutIntroSection = () => {
    return (
        <div className="about-us-area pt-70 pb-50">
            <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="about-style-three-info">
                                {/* <div className="experience-style-one mb-50">
                                    <h2 style={{ backgroundImage: `url(/assets/img/about/5.jpg)` }}>06</h2>
                                    <h4>Years of Visa <br /> Guidance & Support</h4>
                                </div> */}
                                <h4 className="sub-title">About our immigration firm</h4>
                                {/* <h2 className="title split-text">Thrusted visa & immigration solutions</h2> */}
                                <p className="wow fadeInUp">Visapolis Immigration is a registered firm located in Edmonton, Alberta, Canda and provides comprehensive immigration services. It was founded by Ramandeep Singh, a CICC licensed Regulated Canadian immigration consultant (RCIC). </p>
                                <p>With more than six years of administrative experience in a government role in India, combined with an educational qualification in Immigration Law from Queen’s University and a brief stint working at immigration firms in Canada, he is well qualified to handle complex matters. He understands the unique needs of clients and provides strategic advice to help them achieve their dream of becoming Permanent Residents and Canadian citizens. What sets Visapolis Immigration Inc. apart is its commitment to presenting each client’s file in the best possible way.</p>
                                {/* <ul className="list-card wow fadeInUp" data-wow-delay="100ms">
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
                                </ul> */}
                                {/* <Link href="/about" className="btn-style-one circle mt-30 wow fadeInUp" data-wow-delay="200ms">Discover More <span></span></Link> */}
                            </div>
                        </div>
                        <div className="col-xl-5 offset-xl-1 col-lg-6">
                            <div className="about-three-thumb">
                                <Image className="wow fadeInUp" src="/assets/img/thumb/6.jpg" alt="Office thumb" width={522} height={705}/>
                                {/* <div className="success-rate wow fadeInDown" data-wow-delay="100ms">
                                    <div className="circle-progress">
                                        <div className="progressbar">
                                            <h4>Success Rate</h4> */}
                                            {/* This data-percent attribute is what the script reads */}
                                            {/* <div className="circle" data-percent="78">
                                                <strong></strong>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default AboutIntroSection;