// src/app/(public)/components/visa-content/FederalSkilledTradesContent.js
import Image from 'next/image';
import Link from 'next/link';

export default function FederalSkilledTradesContent() {
    return (
        <>
            <div className="thumb wow fadeInUp">
                <Image 
                    src="/assets/img/banner/10.jpg" 
                    alt="Skilled tradesperson working on a construction site in Canada" 
                    width={820} height={422} 
                    style={{ borderRadius: '10px', objectFit: 'cover' }} 
                />
            </div>
            <h2 className="wow fadeInUp" data-wow-delay="300ms">Build Your Future: Federal Skilled Trades Program (FSTP)</h2>
            <p className="wow fadeInUp" data-wow-delay="500ms">
                The Federal Skilled Trades Program is a permanent residence pathway for qualified skilled trades workers from around the world. Managed through the Express Entry system, this program addresses labor market shortages in key trades occupations, offering a route to Canadian permanent residence.
            </p>
            
            <h3>Work Experience Requirements</h3>
            <p>
                To be eligible, you must have specific skilled work experience that is paid and acquired in a qualified trade:
            </p>
            <ul className="list-style-four mt-3">
                <li>At least 2 years of full-time work experience (or an equivalent amount of part-time experience) in a skilled trade within the last 5 years.</li>
                <li>Experience must be in a specific NOC group, primarily Major Groups 72, 73, 82, 83, 92, 93 and Minor Group 6320.</li>
                <li>You must demonstrate that you performed the essential duties of the occupation as set out in the NOC.</li>
                <li>Meet all job requirements for that skilled trade as outlined in the NOC.</li>
            </ul>
            <p className="mt-4">
                In addition to work experience, applicants typically need a valid job offer from a Canadian employer or a certificate of qualification from a Canadian provincial or territorial body.
            </p>
             <div className="mt-5 text-center">
                <h3>Considering a Federal Skilled Trades Worker?</h3>
                <p>Let us help you navigate the requirements to ensure your application is complete and strong, so you can spend valuable time with your family in Canada.</p>
                <Link className="btn-style-one circle mt-3" href="/appointment">
                    Get Assistance <span></span>
                </Link>
            </div>
        </>
    );
}