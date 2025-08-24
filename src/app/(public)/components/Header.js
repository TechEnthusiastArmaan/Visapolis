"use client";
// src/app/components/HomePageHeader.js
import Link from 'next/link';
import { useState, useEffect } from 'react'; // Make sure useState is imported
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'; // Import the correct icon
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt, faClock, faEnvelope, faMapMarkerAlt, faEnvelopeOpenText, faBars } from '@fortawesome/free-solid-svg-icons';

export default function HomePageHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
};

const closeMenu = () => {
  setIsMenuOpen(false);
};
  return (
    <>
      {/* Start Header Top */}
      <div className="top-bar-area bg-dark text-light">
        <div className="container-full">
          {/* New & Corrected JSX Structure */}
<div className="row align-center">

  {/* Column 1: Address Info (Remains on the left) */}
  <div className="col-lg-6 info">
    <div className="address-info">
      <ul className="item-flex">
        <li><FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" /> Ludhiana, Punjab, India</li>
        <li><FontAwesomeIcon icon={faEnvelopeOpenText} className="me-2" /> info@vidyacorp.com</li>
      </ul>
    </div>
  </div>

  {/* Column 2: Combined Group for Call & Social (Aligned to the right) */}
  <div className="col-lg-6">
    <div className="top-bar-right-group">
     {/* Item 1: Call to Action - CORRECTED STRUCTURE */}
<div className="call">
    <a href="tel:+96427395" className="call-icon-link">
        <FontAwesomeIcon icon={faPhoneAlt} />
    </a>
    <div className="info">
        <p>Need to discuss?</p>
        <h5><a href="tel:+91999994561">+91 999994561</a></h5>
    </div>
</div>

      {/* Item 2: Social Icons */}
      <div className="social">
        <ul className="item-flex">
          <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
          <li><a href="#"><Image alt="Twitter" src="/assets/img/icon/twitter-x.png" width={16} height={16} /></a></li>
          <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
        </ul>
      </div>
    </div>
  </div>

</div>
        </div>
      </div>
      {/* End Header Top */} 


      {/* Header */}
      <header>
      <nav className={`navbar mobile-sidenav navbar-default validnavs navbar-sticky ${isMenuOpen ? 'navbar-toggled' : ''}`}>
          <div className="top-search">
            <div className="container-xl">
              <div className="input-group">
                <span className="input-group-addon"><i className="fa fa-search"></i></span>
                <input className="form-control" placeholder="Search" type="text" suppressHydrationWarning={true} />
                <span className="input-group-addon close-search"><i className="fa fa-times"></i></span>
              </div>
            </div>
          </div>

          <div className="container-full d-flex justify-content-between align-items-center w-100">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                onClick={toggleMenu}
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
              <Link className="navbar-brand" href="/">
                <Image alt="Logo" className="logo" src="/assets/img/logo2.svg" width={174} height={70} />
              </Link>
            </div>

            {/* Nav Links - Corrected with all links updated */}
            <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbar-menu">
              <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                <li><Link className="smooth-menu" href="/">Home</Link></li>

                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="#">Visa <FontAwesomeIcon icon={faAngleDown} /></a>
                  <ul className="dropdown-menu">
                    <li><Link href="/visa/visitor-visa">Visitor Visa</Link></li>
                    <li><Link href="/visa/super-visa">Super Visa</Link></li>
                  </ul>
                </li>
                
                <li><Link href="/study-permit">Study Permit</Link></li>

                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="#">Work Permit <FontAwesomeIcon icon={faAngleDown} /></a>
                  <ul className="dropdown-menu">
                    <li><Link href="/work-permit/post-graduate-work-permit">Post Graduate Work Permit</Link></li>
                    <li><Link href="/work-permit/lmia">LMIA</Link></li>
                    <li><Link href="/work-permit/international-mobility-program">International Mobility Program</Link></li>
                    <li><Link href="/work-permit/global-talent-stream">Global Talent Stream</Link></li>
                    <li><Link href="/work-permit/spousal-open-work-permit">Spousal Open Work Permit</Link></li>
                  </ul>
                </li>

                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="#">Permanent Residence <FontAwesomeIcon icon={faAngleDown} /></a>
                  <ul className="dropdown-menu">
                    <li><Link href="/permanent-residence/express-entry">Express Entry</Link></li>
                    <li><Link href="/permanent-residence/canadian-experience-class">Canadian Experience Class</Link></li>
                    <li><Link href="/permanent-residence/federal-skilled-trades">Federal Skilled Trades</Link></li>
                    <li><Link href="/permanent-residence/federal-skilled-worker">Federal Skilled Worker</Link></li>
                    <li><Link href="/permanent-residence/family-sponsorship">Family Sponsorship</Link></li>
                    <li><Link href="/permanent-residence/provincial-immigration">Provincial Immigration</Link></li>
                  </ul>
                </li>

                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="#">Business <FontAwesomeIcon icon={faAngleDown} /></a>
                  <ul className="dropdown-menu">
                    <li><Link href="/business/business-visitor-visa">Business Visitor Visa</Link></li>
                    <li><Link href="/business/startup-visa">Start-up Visa</Link></li>
                    <li><Link href="/business/intra-company-transfer-program">Intra-Company Transfer Program</Link></li>
                    <li><Link href="/business/provincial-entrepreneur-program">Provincial Entrepreneur Program</Link></li>
                  </ul>
                </li>

                <li><Link className="smooth-menu" href="/about">About us</Link></li>
                <li><Link className="smooth-menu" href="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="attr-right">
              <div className="attr-nav">
                <ul>
                  <li>
                    <Link href="/appointment" className="btn-style-one">Appointment <span></span></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div> 
        </nav>

      </header>
    </>
  );
}
