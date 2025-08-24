// src/app/(public)/components/visa-content/GlobalTalentStreamContent.js
import Image from 'next/image';
import Link from 'next/link';

export default function GlobalTalentStreamContent() {
    return (
        <>
            <div className="thumb wow fadeInUp">
                <Image 
                    src="/assets/img/banner/10.jpg" 
                    alt="Technology and innovation hub with skilled professionals" 
                    width={820} height={422} 
                    style={{ borderRadius: '10px', objectFit: 'cover' }} 
                />
            </div>
            <h2 className="wow fadeInUp" data-wow-delay="300ms">Accelerate Growth with the Global Talent Stream (GTS)</h2>
            <p className="wow fadeInUp" data-wow-delay="500ms">
                The Global Talent Stream (GTS) is an innovative program designed to help Canadian businesses attract highly skilled foreign workers to foster economic growth and job creation. With expedited processing times for work permits, the GTS offers a streamlined immigration process for both employers and international talent.
            </p>
            
            <div className="features mt-40 mb-40">
                <div className="row">
                    <div className="col-lg-6 wow fadeInUp">
                        <h3>Category A Requirements</h3>
                        <ul className="list-style-four mt-3">
                            <li><strong>Referral by a Designated Partner:</strong> Companies must be referred by one of the GTS&apos; official designated partners.</li>
                            <li><strong>Job Offer:</strong> A detailed job offer outlining duties, salary, and benefits must be provided.</li>
                            <li><strong>Labour Market Benefits Plan:</strong> The company must develop a plan demonstrating how hiring the foreign worker will benefit the Canadian labour market.</li>
                        </ul>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="300ms">
                        <h3>Category B Requirements</h3>
                        <ul className="list-style-four mt-3">
                            <li><strong>Recruitment Efforts:</strong> The company must prove significant efforts to hire Canadian citizens or permanent residents first.</li>
                            <li><strong>Job Offer:</strong> A formal job offer must be provided to the foreign worker.</li>
                            <li><strong>Prevailing Wages:</strong> The company must offer a competitive wage that meets or exceeds the prevailing wage for the occupation in the region.</li>
                        </ul>
                    </div>
                </div>
            </div>
             <div className="mt-5 text-center">
                <h3>Considering Global Talent Stream?</h3>
                <p>Let us help you navigate the requirements to ensure your application is complete and strong, so you can spend valuable time with your family in Canada.</p>
                <Link className="btn-style-one circle mt-3" href="/appointment">
                    Get Assistance <span></span>
                </Link>
            </div>
        </>
    );
}