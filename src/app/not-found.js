// src/app/not-found.js

import Header from './(public)/components/Header'; // CORRECT PATH: Should point to Header.js
import Footer from './(public)/components/Footer'; 
import FloatingButton from './(public)/components/FloatingButton';
import NotFoundClient from "./(public)/components/NotFoundClient";
import Breadcrumb from "./(public)/components/about-sections/Breadcrumb";
import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <html lang="en">
      <head>
          {/* --- FIX 1: LINK ALL STYLESHEETS --- */}
          {/* By linking every CSS file from your template, we guarantee style consistency. */}
          <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/assets/css/font-awesome.min.css" />
          <link rel="stylesheet" href="/assets/css/themify-icons.css" />
          <link rel="stylesheet" href="/assets/css/elegant-icons.css" />
          <link rel="stylesheet" href="/assets/css/flaticon-set.css" />
          <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
          <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
          <link rel="stylesheet" href="/assets/css/animate.css" />
          <link rel="stylesheet" href="/assets/css/validnavs.css" />
          <link rel="stylesheet" href="/assets/css/helper.css" />
          <link rel="stylesheet" href="/assets/css/unit-test.css" />
          <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      {/* --- FIX 2: ADD THE DYNAMIC CLASS(ES) TO THE BODY --- */}
      {/* The `validnavs-on` class is likely essential for the header to be styled correctly. */}
      <body className="validnavs-on">

          <div id="wrapper">
              <Header />

              <main>
                  <NotFoundClient />
                  <Breadcrumb title="Error Page" breadcrumbText="404" />
                  <div className="error-page-area default-padding text-center bg-cover">
                     <div className="shape-left" style={{ backgroundImage: `url(/assets/img/shape/44-left.png)` }}></div>
            <div className="shape-right" style={{ backgroundImage: `url(/assets/img/shape/44-right.png)` }}></div>
                      {/* ... your 404 content ... */}
                      <div className="container">
                          <div className="error-box">
                              <div className="row">
                                  <div className="col-lg-8 offset-lg-2">
                                      <h1>404</h1>
                                      <h2>Sorry, Page Was Not Found!</h2>
                                      <p>
                                          The page you requested could not be located. Try going back to the homepage or using the main navigation to find what you need.
                                      </p>
                                      <Link className="btn-style-one circle" href="/">
                                          Back to home <span></span>
                                      </Link>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </main>

              <Footer />
              <FloatingButton />
          </div>

          {/* Load all necessary JavaScript files for the Header/Footer */}
          <Script src="/assets/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
          <Script src="/assets/js/bootstrap.bundle.min.js" />
          <Script src="/assets/js/jquery.appear.js" />
          <Script src="/assets/js/jquery.easing.min.js" />
          <Script src="/assets/js/jquery.magnific-popup.min.js" />
          <Script src="/assets/js/modernizr.custom.13711.js" />
          <Script src="/assets/js/swiper-bundle.min.js" />
          <Script src="/assets/js/wow.min.js" />
          <Script src="/assets/js/progress-bar.min.js" />
          <Script src="/assets/js/circle-progress.js" />
          <Script src="/assets/js/isotope.pkgd.min.js" />
          <Script src="/assets/js/imagesloaded.pkgd.min.js" />
          <Script src="/assets/js/jquery.nice-select.min.js" />
          <Script src="/assets/js/count-to.js" />
          <Script src="/assets/js/jquery.scrolla.min.js" />
          <Script src="/assets/js/YTPlayer.min.js" />
          <Script src="/assets/js/TweenMax.min.js" />
          <Script src="/assets/js/validnavs.js" />
          <Script src="/assets/js/main.js" />
      </body>
    </html>
  );
}