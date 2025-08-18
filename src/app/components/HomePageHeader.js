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
        <li><FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" /> California, TX 70240</li>
        <li><FontAwesomeIcon icon={faEnvelopeOpenText} className="me-2" /> Info@validtheme.com</li>
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
        <h5><a href="tel:+96427395">+(964)-27395</a></h5>
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
        <nav className="navbar mobile-sidenav navbar-default validnavs navbar-sticky">
  {/* Top Search */}
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
    {/* Header Navigation */}
    <div className="navbar-header">
      <button
  type="button"
  className="navbar-toggle"
  onClick={toggleMenu} // Use React's onClick handler
>
  <FontAwesomeIcon icon={faBars} />
</button>
      <a className="navbar-brand" href="#">
        <Image alt="Logo" className="logo" src="/assets/img/logo.svg" width={174} height={50} />
      </a>
    </div>

    {/* Nav Links */}
    <div className="collapse navbar-collapse" id="navbar-menu">
      <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
        
        {/* Home - no dropdown */}
        <li><a className="smooth-menu" href="#">Home</a></li>

        {/* Visa */}
        <li className="dropdown">
          <a className="dropdown-toggle" data-toggle="dropdown" href="#">Visa <FontAwesomeIcon icon={faAngleDown} /></a>
          <ul className="dropdown-menu">
            <li><a href="#">Visitor Visa</a></li>
            <li><a href="#">Super Visa</a></li>
          </ul>
        </li>

        {/* Study Permit */}
        <li><a className="smooth-menu" href="#">Study Permit</a></li>

        {/* Work Permit */}
        <li className="dropdown">
          <a className="dropdown-toggle" data-toggle="dropdown" href="#">Work Permit <FontAwesomeIcon icon={faAngleDown} /></a>
          <ul className="dropdown-menu">
            <li><a href="#">Post Graduate Work Permit</a></li>
            <li><a href="#">LMIA</a></li>
            <li><a href="#">International Mobility Program</a></li>
            <li><a href="#">Global Talent Stream</a></li>
            <li><a href="#">Spousal Open Work Permit</a></li>
          </ul>
        </li>

        {/* Permanent Residence */}
        <li className="dropdown">
          <a className="dropdown-toggle" data-toggle="dropdown" href="#">Permanent Residence <FontAwesomeIcon icon={faAngleDown} /></a>
          <ul className="dropdown-menu">
            <li><a href="#">Express Entry</a></li>
            <li><a href="#">Canadian Experience Class</a></li>
            <li><a href="#">Federal Skilled Trades</a></li>
            <li><a href="#">Federal Skilled Worker</a></li>
            <li><a href="#">Family Sponsorship</a></li>
            <li><a href="#">Provincial Immigration</a></li>
          </ul>
        </li>

        {/* Business */}
        <li className="dropdown">
          <a className="dropdown-toggle" data-toggle="dropdown" href="#">Business <FontAwesomeIcon icon={faAngleDown} /></a>
          <ul className="dropdown-menu">
            <li><a href="#">Business Visitor Visa</a></li>
            <li><a href="#">Start-up Visa</a></li>
            <li><a href="#">Intra-Company Transfer Program</a></li>
            <li><a href="#">Provincial Entrepreneur Program</a></li>
          </ul>
        </li>

        {/* Blog */}
        <li><a className="smooth-menu" href="blog/">Blog</a></li>
        {/* Contact */}
        <li><a className="smooth-menu" href="contact/">Contact</a></li>
        


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

  {/* Overlay screen */}
  <div className="overlay-screen"></div>
</nav>

      </header>
    </>
  );
}
