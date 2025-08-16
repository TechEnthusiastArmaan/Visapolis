import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt, faClock, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
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
                                <p>There are many variations of passages available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not.</p>
                                <ul className="footer-social-regular mt-30">
                                    <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                    <li><a href="#"><Image src="/assets/img/icon/twitter-x.png" alt="Twitter X Logo" width={16} height={16} /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-lg-2 col-md-6 footer-item">
                            <div className="f-item link">
                                <h4 className="widget-title">Quick Links</h4>
                                <ul>
                                    <li><Link href="/about">Company Profile</Link></li>
                                    <li><Link href="/contact">Help Center</Link></li>
                                    <li><Link href="/career">Career</Link></li>
                                    <li><Link href="/privacy">Privacy Policy</Link></li>
                                    <li><Link href="/terms">Terms & Conditions</Link></li>


                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-item">
                            <div className="f-item link">
                                <h4 className="widget-title">Our Services</h4>
                                <ul>
                                    <li><Link href="/services/assistance">Application Assistance</Link></li>
                                    <li><Link href="/services/guidance">Visa Type Guidance</Link></li>
                                    <li><Link href="/services/support">Documentation Support</Link></li>
                                    <li><Link href="/services/assistance">Business Assistance</Link></li>
                                    <li><Link href="/services/assistance">Legal Assistance</Link></li>


                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-item">
                            <div className="f-item contact-widget">
                                <h4 className="widget-title">Contact Info</h4>
                                <p>444, First Floor, 03 St Roots Terrace, Los Angeles</p>
                                <ul className="contact-list-two">
                                    <li><div className="icon"><FontAwesomeIcon icon={faPhoneAlt} /></div><h5><a href="tel:96428563364">+(964)-2856-3364</a></h5></li>
                                <li><div className="icon"><FontAwesomeIcon icon={faClock} /></div><h5>Sun-Thu 9:00 - 7:00</h5></li>
                                <li><div className="icon"><FontAwesomeIcon icon={faEnvelope} /></div><h5><a href="mailto:info@validtheme.com">Info@validtheme.com</a></h5></li>
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
                            <p>© Copyright 2025. All Rights Reserved by <a href="#">Vidya Corp.</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}