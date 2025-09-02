import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleLeft, faAngleDoubleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const AboutSection = () => {
    return (
        <div id="about" className="about-style-six-area default-padding">
            <div className="container">
                <div className="row align-center">
                    <div className="col-xl-6">
                        <div className="about-style-six-info">
                            <h4 className="sub-title">About our immigration firm</h4>
                            {/* <h2 className="title split-text">Expert visa solutions for your global journey</h2> */}
                            <p className="wow fadeInUp" data-wow-delay="100ms">
                                Visapolis Immigration is a registered firm located in Edmonton, Alberta, Canda and provides comprehensive immigration services. It was founded by Ramandeep Singh, a CICC licensed Regulated Canadian immigration consultant (RCIC). 
                            </p>
                            <p className="wow fadeInUp" data-wow-delay="100ms">With more than six years of administrative experience in a government role in India, combined with an educational qualification in Immigration Law from Queen’s University and a brief stint working at immigration firms in Canada, he is well qualified to handle complex matters. He understands the unique needs of clients and provides strategic advice to help them achieve their dream of becoming Permanent Residents and Canadian citizens. What sets Visapolis Immigration Inc. apart is its commitment to presenting each client’s file in the best possible way.</p>
                            <div className="d-flex wow fadeInUp" data-wow-delay="250ms">
                                <div className="provider-cards">
                                    <Image src="/assets/img/team/7.jpg" alt="Client 1" width={50} height={50} />
                                    <Image src="/assets/img/team/8.jpg" alt="Client 2" width={50} height={50} />
                                    <Image src="/assets/img/team/9.jpg" alt="Client 3" width={50} height={50} />
                                    <Image src="/assets/img/team/10.jpg" alt="Client 4" width={50} height={50} />
                                    <h4>10K</h4>
                                </div>
                                <h4>Approved Student <br /> Visa Applications.</h4>
                            </div>
                            <ul className="list-style-four wow fadeInUp" data-wow-delay="250ms">
                                <li>Worldwide Visa Assistance</li>
                                <li>Immigration Beyond Borders</li>
                                <li>Emergency Travel Document</li>
                                <li>Re-entry Permit</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-6 pl-60 pl-md-15 pl-xs-15">
                        <div className="about-style-six-thumb">
                            <div className="left-info wow fadeInUp" data-wow-delay="100ms">
                                <div className="curve-text">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" version="1.1">
        <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
        <text><textPath href="#textPath">Book  an  Appointment</textPath></text>
    </svg>
    
    <Link href="/appointment" className="spin-inner-link">
        <FontAwesomeIcon icon={faArrowRight} />
    </Link>
    
</div>
                                <Image src="/assets/img/about/9.jpg" alt="About thumbnail" width={279} height={317}/>
                            </div>
                            <div className="right-info wow fadeInUp" data-wow-delay="250ms">
                                <Image src="/assets/img/about/8.jpg" alt="About thumbnail" width={279} height={373} />
                                <div className="call-card-two">
                                    <div className="icon"><FontAwesomeIcon icon={faPhone} /></div>
                                    <div className="info">
                                        <p>Instant Call</p>
                                        <h4><a href="tel:+1 780-566-9900">+1 780-566-9900</a></h4>
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
export default AboutSection;