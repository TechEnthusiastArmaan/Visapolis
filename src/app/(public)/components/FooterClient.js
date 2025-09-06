"use client";
import { useCurrentYear } from '../../hooks/useCurrentYear';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn,faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt, faClock, faEnvelope, faAngleDown } from '@fortawesome/free-solid-svg-icons';

export default function FooterClient({ settings }) {
    const currentYear = useCurrentYear();
    
    // Safeguard: If settings aren't loaded, don't crash the page
    const displaySettings = settings || {};

    return (
        <footer className="footer-style-two bg-dark overflow-hidden text-light" style={{ backgroundImage: `url(/assets/img/shape/globe.png)` }}>
            {/* <div className="container">
                <div className="footer-top-style-two">
                    <div className="row">
                        <div className='col-lg-4'>

                        <div className="footer-logo">
                                <Image src="/assets/img/logo-light.svg" alt="Company Logo" width={175} height={50} priority />

                            </div>
                            </div>
                        <div className="col-lg-8">
                            <div className="newsletter-form">
                                <h4>Newsletter Subscription</h4>
                                <form action="#">
                                    <input type="email" placeholder="Your Email" className="form-control" name="email" />
                                    <button type="submit">
                                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 17L17 1H7.8" stroke="white" strokeWidth="2"></path>
                                        </svg>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="shape">
                <Image src="/assets/img/shape/globe-half.png" alt="Decorative Globe Shape" width={273.73} height={374.75} />
                <Image src="/assets/img/shape/13.png" alt="Decorative Shape" width={250} height={550} />
            </div>
            <div className="container">
                <div className="f-items">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 footer-item">
                            <div className="f-item about">

                                <h4 className="widget-title">About Us</h4>
                                <p>Visapolis Immigration is a registered firm located in Edmonton, Alberta, Canda and provides comprehensive immigration services. It was founded by Ramandeep Singh, a CICC licensed Regulated Canadian immigration consultant (RCIC).</p>
                                <ul className="footer-social-regular mt-30">
                                    {displaySettings.facebookUrl && <li><a href={displaySettings.facebookUrl}><FontAwesomeIcon icon={faFacebookF} /></a></li>}
                                    {displaySettings.twitterUrl && <li><a href={displaySettings.twitterUrl}><Image src="/assets/img/icon/twitter-x.png" alt="Twitter X Logo" width={16} height={16} /></a></li>}
                                    {displaySettings.instagramUrl && <li><a href={displaySettings.instagramUrl}><FontAwesomeIcon icon={faInstagram} /></a></li>}
                                    <li><a href={displaySettings.tiktokUrl}><FontAwesomeIcon icon={faTiktok} /></a></li>
                                    {displaySettings.linkedinUrl && <li><a href={displaySettings.linkedinUrl}><FontAwesomeIcon icon={faLinkedinIn} /></a></li>}
                                </ul>
                            </div>

                        </div>
                        <div className="col-lg-2 col-md-6 footer-item">
                            <div className="f-item link">
                                <h4 className="widget-title">Quick Links</h4>
                                <ul>
                                    <li><Link href="/about">About Us</Link></li>
                                    <li><Link href="/contact">Contact Us</Link></li>
                                    <li><Link href="/blog">Blog</Link></li>
                                    {/* <li><Link href="/faq">FAQ</Link></li> */}
                                    <li><Link href="/appointment">Appointment</Link></li>


                                </ul>
                            </div>
                        </div>
                         <div className="col-lg-3 col-md-6 footer-item">
                            <div className="f-item link">
                                <h4 className="widget-title">Our Services</h4>
                                <ul>
                                    <li className="dropdown">
                                        <a href="#">Visit <FontAwesomeIcon icon={faAngleDown} /></a>
                                        <ul className="dropdown-menu">
                                            <li><Link href="/visa/visitor-visa">Visitor Visa</Link></li>
                                            <li><Link href="/visa/super-visa">Super Visa</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link href="/study-permit">Study Permit</Link></li>
                                    <li className="dropdown">
                                        <a href="#">Work Permit <FontAwesomeIcon icon={faAngleDown} /></a>
                                        <ul className="dropdown-menu">
                                            <li><Link href="/work-permit/post-graduate-work-permit">Post Graduate Work Permit</Link></li>
                                            <li><Link href="/work-permit/lmia">LMIA</Link></li>
                                            <li><Link href="/work-permit/international-mobility-program">International Mobility Program</Link></li>
                                            <li><Link href="/work-permit/global-talent-stream">Global Talent Stream</Link></li>
                                            <li><Link href="/work-permit/spousal-open-work-permit">Spousal Open Work Permit</Link></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#">Permanent Residence <FontAwesomeIcon icon={faAngleDown} /></a>
                                        <ul className="dropdown-menu" style={'margin-top: -10px;'}>
                                            <li><Link href="/permanent-residence/express-entry">Express Entry</Link></li>
                                            <li><Link href="/permanent-residence/canadian-experience-class">Canadian Experience Class</Link></li>
                                            <li><Link href="/permanent-residence/federal-skilled-trades">Federal Skilled Trades</Link></li>
                                            <li><Link href="/permanent-residence/federal-skilled-worker">Federal Skilled Worker</Link></li>
                                            <li><Link href="/permanent-residence/family-sponsorship">Family Sponsorship</Link></li>
                                            <li><Link href="/permanent-residence/provincial-immigration">Provincial Immigration</Link></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#">Business <FontAwesomeIcon icon={faAngleDown} /></a>
                                        <ul className="dropdown-menu">
                                            <li><Link href="/business/business-visitor-visa">Business Visitor Visa</Link></li>
                                            <li><Link href="/business/startup-visa">Start-up Visa</Link></li>
                                            <li><Link href="/business/intra-company-transfer-program">Intra-Company Transfer Program</Link></li>
                                            <li><Link href="/business/provincial-entrepreneur-program">Provincial Entrepreneur Program</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-item">
                            <div className="f-item contact-widget">
                                <h4 className="widget-title">Contact Info</h4>
                                <p>{displaySettings.address || 'Canada'}</p>
                                <ul className="contact-list-two">
                                    <li><div className="icon"><FontAwesomeIcon icon={faPhoneAlt} /></div><h5><a href={`tel:${displaySettings.phoneNumber}`}>{displaySettings.phoneNumber || '+91 9876543210'}</a></h5></li>
                                <li><div className="icon"><FontAwesomeIcon icon={faClock} /></div><h5>{displaySettings.workingHours || 'Sun-Thu 9:00 - 7:00'}</h5></li>
                                <li><div className="icon"><FontAwesomeIcon icon={faEnvelope} /></div><h5><a href={`mailto:${displaySettings.email}`}>{displaySettings.email || 'Info@vidyacorp.com'}</a></h5></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="footer-bottom bg-dark-secondary text-center">
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-12'>
                            <p>© Copyright {currentYear}. All Rights Reserved by Visapolis Immigration Inc.</p>
                            <p>Website by <a href='https://vidyacorp.com/'>Vidya Corporation</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}