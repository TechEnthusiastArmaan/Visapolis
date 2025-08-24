"use client";
import { useCurrentYear } from '../../hooks/useCurrentYear';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt, faClock, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    const currentYear = useCurrentYear();

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
                                    <li><Link href="/about">About Us</Link></li>
                                    <li><Link href="/contact">Contact Us</Link></li>
                                    <li><Link href="/blog">Blog</Link></li>
                                    <li><Link href="/faq">FAQ</Link></li>
                                    <li><Link href="/appointment">Appointment</Link></li>


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
                                <p>Ludhiana, Punjab, India</p>
                                <ul className="contact-list-two">
                                    <li><div className="icon"><FontAwesomeIcon icon={faPhoneAlt} /></div><h5><a href="tel:96428563364">+91 9876543210</a></h5></li>
                                <li><div className="icon"><FontAwesomeIcon icon={faClock} /></div><h5>Sun-Thu 9:00 - 7:00</h5></li>
                                <li><div className="icon"><FontAwesomeIcon icon={faEnvelope} /></div><h5><a href="mailto:info@validtheme.com">Info@vidya.com</a></h5></li>
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
                            <p>© Copyright {currentYear}. All Rights Reserved by <a href="#">Vidya Corporation</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}