// src/app/(public)/components/visa-content/ProvincialImmigrationContent.js
import Image from 'next/image';
import Link from 'next/link';

export default function ProvincialImmigrationContent() {
    return (
        <>
            <div className="thumb wow fadeInUp">
                <Image 
                    src="/assets/img/banner/10.jpg" 
                    alt="Map of Canada highlighting the different provinces" 
                    width={820} height={422} 
                    style={{ borderRadius: '10px', objectFit: 'cover' }} 
                />
            </div>
            <h2 className="wow fadeInUp" data-wow-delay="300ms">Find Your Home: Provincial Nominee Programs (PNP)</h2>
            <p className="wow fadeInUp" data-wow-delay="500ms">
                The Provincial Nominee Program (PNP) provides a crucial pathway to permanent residence for individuals who wish to settle in a specific Canadian province or territory. These programs allow provinces to nominate candidates who meet their local labour market and economic needs, addressing specific skill shortages.
            </p>
            
            <h3>The Nomination Process</h3>
            <p>
                Each province has its own unique set of immigration programs, or &quot;streams,&quot; with varying eligibility criteria. However, the general process typically involves these steps:
            </p>
            <ul className="list-style-four mt-3">
                <li>Submit an Expression of Interest (EOI) to your desired province or territory.</li>
                <li>If your profile is selected, you will receive a Notification of Interest (NOI).</li>
                <li>Accept the NOI and submit a full application with all required documents to the province.</li>
                <li>If your application is approved, the province will issue a provincial nomination certificate.</li>
                <li>You then use this nomination to apply for permanent residence with the federal government (IRCC).</li>
            </ul>
             <div className="mt-5 text-center">
                <h3>Considering for Provincial Immigration?</h3>
                <p>Let us help you navigate the requirements to ensure your application is complete and strong, so you can spend valuable time with your family in Canada.</p>
                <Link className="btn-style-one circle mt-3" href="/appointment">
                    Get Assistance <span></span>
                </Link>
            </div>
        </>
    );
}