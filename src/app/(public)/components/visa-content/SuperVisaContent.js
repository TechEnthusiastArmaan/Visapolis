// src/app/(public)/components/visa-content/SuperVisaContent.js
import Image from 'next/image';
import Link from 'next/link';

export default function SuperVisaContent() {
    return (
        <>
            <div className="thumb wow fadeInUp">
                <Image 
                    src="/assets/img/banner/10.jpg" 
                    alt="Grandparents spending time with their grandchildren in Canada" 
                    width={820} height={422} 
                    style={{ borderRadius: '10px', objectFit: 'cover' }} 
                />
            </div>
            <h2 className="wow fadeInUp" data-wow-delay="300ms">Reunite with Family: The Super Visa</h2>
            <p className="wow fadeInUp" data-wow-delay="500ms">
                A Super Visa allows you to visit your children or grandchildren in Canada for up to 5 years at a time. It is a multi-entry visa that provides multiple entries for a period of up to 10 years, making it an excellent option for long-term family visits.
            </p>
            
            <h3>Key Eligibility Requirements</h3>
            <p>
                To be eligible, the person inviting you must be a Canadian citizen or a permanent resident. There are several specific requirements you must meet to ensure a successful application:
            </p>
            <ul className="list-style-four mt-3 mb-4">
                <li>A signed letter of invitation from your child or grandchild in Canada.</li>
                <li>Proof of the family relationship to your inviter.</li>
                <li>Proof of private medical insurance from a Canadian insurance company valid for at least one year.</li>
                <li>Demonstration of meeting the Low Income Cut-Off (LICO) requirements to show you will be financially supported.</li>
            </ul>
            <p>
                It&apos;s important to note that dependents cannot be included in a Super Visa application. Each eligible person must submit their own.
            </p>

            <div className="mt-5 text-center">
                <h3>Considering a Super Visa?</h3>
                <p>Let us help you navigate the requirements to ensure your application is complete and strong, so you can spend valuable time with your family in Canada.</p>
                <Link className="btn-style-one circle mt-3" href="/contact">
                    Get Assistance <span></span>
                </Link>
            </div>
        </>
    );
}