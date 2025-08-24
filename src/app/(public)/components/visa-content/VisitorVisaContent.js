// src/app/(public)/components/visa-content/VisitorVisaContent.js
import Image from 'next/image';
import Link from 'next/link';


// This is just a plain React component containing the page's unique content.
// You will create one of these for each visa type.
export default function VisitorVisaContent() {
    return (
        <>
            <div className="thumb wow fadeInUp">
                <Image src="/assets/img/banner/10.jpg" alt="Beautiful Canadian landscape for visitors" width={820} height={422} priority={true} className="responsive-visa-image" style={{ borderRadius: '10px' }} />
            </div>
            <h2 className="wow fadeInUp" data-wow-delay="300ms">Explore Canada with a Visitor Visa</h2>
            <p className="wow fadeInUp" data-wow-delay="500ms">
                A visitor visa (also called a temporary resident visa) is an official document we stick in your passport. It shows that you meet the requirements needed to enter Canada. Most travellers need a visitor visa to travel to Canada. You may also need one if you’re transiting through a Canadian airport on your way to your final destination.
            </p>
            {/* You can add more specific sections, features, lists, etc. here */}
            <h3>Who can apply</h3>
            <p>
                You must show the officer that you meet the requirements of the Immigration and Refugee Protection Act (IRPA) and the Immigration and Refugee Protection Regulations and that you will be in Canada for a temporary stay. You must also satisfy an officer that you will leave Canada at the end of your stay.
            </p>
            <div className="mt-5 text-center">
                <h3>Considering a Visitor Visa?</h3>
                <p>Let us help you navigate the requirements to ensure your application is complete and strong, so you can spend valuable time with your family in Canada.</p>
                <Link className="btn-style-one circle mt-3" href="/appointment">
                    Get Assistance <span></span>
                </Link>
            </div>
        </>
    );
}