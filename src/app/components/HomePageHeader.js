// src/app/components/HomePageHeader.js
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'; // Import the correct icon
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt, faClock, faEnvelope, faMapMarkerAlt, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

export default function HomePageHeader() {
  return (
    <>
     <div className="top-bar-area light-bg">
        <div className="container-full">
          <div className="row align-center">
            <div className="col-xl-9 col-lg-9 info">
              <div className="address-info">
                <ul className="item-flex">
                  <li><a href="#"><FontAwesomeIcon icon={faMapMarkerAlt} /> California, TX 70240</a></li>
                  <li><FontAwesomeIcon icon={faEnvelopeOpenText} /> Info@validtheme.com</li>
                  <li><FontAwesomeIcon icon={faClock} /> Mon - Fri 09AM - 6PM</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 text-end">
              <div className="social">
                <ul className="item-flex">
                  <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                  <li><a href="#"><Image src="/assets/img/icon/twitter-x.png" alt="Twitter X Logo" width={16} height={16} /></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                </ul>
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
      <button className="navbar-toggle" data-target="#navbar-menu" data-toggle="collapse" type="button">
        <i className="fa fa-bars"></i>
      </button>
      <a className="navbar-brand" href="#">
        <Image alt="Logo" className="logo" src="/assets/img/logo.png" width={174} height={50} />
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
        {/* <li><a className="smooth-menu" href="#">Blog</a></li> */}

      </ul>
    </div>

    {/* Right Side Contact + Appointment */}
    <div className="attr-right">
      <div className="attr-nav">
        <ul>
          <li className="contact">
            <div className="call">
              <div className="icon">
                <Image alt="Phone" src="/assets/img/icon/phone.png" width={45} height={45} />
              </div>
              <div className="info">
                <p>Need to discuss?</p>
                <h5><a href="tel:+4733378901">+(964)-27395</a></h5>
              </div>
            </div>
          </li>
          <li><a className="btn-style-one" href="Assessment/">Appointment <span></span></a></li>
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
