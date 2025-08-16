// src/app/not-found.js

import NotFoundClient from "./components/NotFoundClient";
import Breadcrumb from "./components/about-sections/Breadcrumb";
import Image from 'next/image';
import Link from 'next/link';

// SEO metadata for the 404 page
export const metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  // This page will automatically use your main layout (Header and Footer).
  // The interactive parts (like the preloader) are in the client component.
  return (
    <>
        <NotFoundClient /> {/* This handles client-side scripts like the preloader */}
        
        {/* We can re-use the Breadcrumb component */}
        <Breadcrumb title="Error Page" breadcrumbText="404" />
        
        {/* Start 404 Content */}
        <div className="error-page-area default-padding text-center bg-cover">
            {/* Decorative Shape Images */}
            <div className="shape-left" style={{ backgroundImage: `url(/assets/img/shape/44-left.png)` }}></div>
            <div className="shape-right" style={{ backgroundImage: `url(/assets/img/shape/44-right.png)` }}></div>
            
            <div className="container">
                <div className="error-box">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <h1>404</h1>
                            <h2>Sorry, Page Was Not Found!</h2>
                            <p>
                                Household shameless incommode at no objection behaviour. Especially do at he possession insensible sympathize boisterous it. Songs he on an widen me event truth.
                            </p>
                            <Link className="btn-style-one circle" href="/">
                                Back to home <span></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* End 404 Content */}
    </>
  );
}