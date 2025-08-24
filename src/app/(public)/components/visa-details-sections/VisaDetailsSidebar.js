// src/app/components/visa-details-sections/VisaDetailsSidebar.js
import Link from 'next/link';

export default function VisaDetailsSidebar() {
    return (
        <>
            {/* Service List Widget */}
            <div className="single-widget services-list-widget">
                <div className="content">
                    <ul>
                        <li><a href="visa-details.html">Tourist Visa </a></li>
                        <li className="current-item"><a href="visa-details.html">Residence Visa</a></li>
                        <li><a href="visa-details.html">Diplomatic Visa</a></li>
                        <li><a href="visa-details.html">Student Visa</a></li>
                        <li><a href="visa-details.html">Family Visa</a></li>
                    </ul>
                </div>
            </div>

            {/* **THIS IS THE CORRECT WIDGET FROM THE TEMPLATE** */}
            <div className="single-widget text-light appl-visa-widget" style={{backgroundImage: "url(/assets/img/shape/1.jpg)"}}>
                <h4>Dream Tour</h4>
                <h2>Explore The World</h2>
                <Link href="/about" className="btn-style-one btn-light circle">Discover More <span></span></Link>
            </div>
            
            {/* Downloads Widget */}
            <div className="single-widget widget-brochure">
                <h4 className="widget-title">Downloads</h4>
                <ul>
                    <li><a href="#"><i className="fas fa-file-pdf"></i> Appiication Form </a></li>
                    <li><a href="#"><i className="fas fa-file-word"></i> Terms & Conditions </a></li>
                </ul>
            </div>
        </>
    );
}