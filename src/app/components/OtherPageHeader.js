import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText, faClock, faBars, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function OtherPageHeader() {
  return (
    <>
      {/* Start Header Top */}
      <div className="top-bar-area bg-dark text-light">
        <div className="container-full">
            <div className="row align-center">
                <div className="col-xl-9 col-lg-9 info">
                    <div className="address-info">
                        <ul className="item-flex">
                            <li>
                                <FontAwesomeIcon icon={faEnvelopeOpenText} className="me-2"/> Info@validtheme.com
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faClock} className="me-2"/> Working Hours: 8:00 AM – 7:45 PM
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 text-end">
                    <div className="social">
                        <ul className="item-flex">
                            <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                            <li><a href="#"><Image src="/assets/img/icon/twitter-x.png" alt="Twitter" width={14} height={14} /></a></li>
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
        <nav className="navbar mobile-sidenav navbar-default validnavs navbar-sticky navbar-style-one navbar-style-inner">

          <div className="top-search">
            <div className="container-xl">
              <div className="input-group">
                <span className="input-group-addon"><FontAwesomeIcon icon={faSearch} /></span>
                <input type="text" className="form-control" placeholder="Search" suppressHydrationWarning={true}/>
                <span className="input-group-addon close-search"><FontAwesomeIcon icon={faTimes} /></span>
              </div>
            </div>
          </div>

          <div className="container-full d-flex justify-content-between align-items-center">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                <FontAwesomeIcon icon={faBars} />
              </button>
              <Link className="navbar-brand" href="/">
                <Image src="/assets/img/logo-light.svg" className="logo logo-display" alt="Logo Light" width={134} height={36} />
                <Image src="/assets/img/logo.png" className="logo logo-scrolled" alt="Logo Dark" width={175} height={50} />
              </Link>
            </div>

            <div className="collapse navbar-collapse" id="navbar-menu">
                <Image src="/assets/img/logo.png" alt="Mobile Menu Logo" width={134} height={36} />
                 <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                    <FontAwesomeIcon icon={faTimes} />
                </button>
              <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/visa-details">Visa Details</Link></li>
                <li><Link href="/Assessment">Assessment</Link></li>
                <li><Link href="/404">404 Page</Link></li>
              </ul>
            </div>

            <div className="attr-right">
                <div className="attr-nav">
                    <ul>
                        <li className="contact">
                            <div className="call">
                                <div className="icon">
                                    <Image src="/assets/img/icon/phone.png" alt="Phone Icon" width={46} height={46} />
                                </div>
                                <div className="info">
                                    <p>Need to discuss?</p>
                                    <h5><a href="tel:+96427395">+(964)-27395</a></h5>
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link href="/appointment" className="btn-style-one">Appointment <span></span></Link>
                        </li>
                    </ul>
                </div>
            </div>

          </div>
          <div className="overlay-screen"></div>
        </nav>
      </header>
    </>
  );
}