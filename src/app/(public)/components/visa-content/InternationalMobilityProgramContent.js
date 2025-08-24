// src/app/(public)/components/visa-content/InternationalMobilityProgramContent.js
import Image from 'next/image';
import Link from 'next/link';

export default function InternationalMobilityProgramContent() {
    return (
        <>
            <div className="thumb wow fadeInUp">
                <Image 
                    src="/assets/img/banner/10.jpg" 
                    alt="Global business professionals collaborating on a project in Canada" 
                    width={820} height={422} 
                    style={{ borderRadius: '10px', objectFit: 'cover' }} 
                />
            </div>
            <h2 className="wow fadeInUp" data-wow-delay="300ms">International Mobility Program (IMP)</h2>
            <p className="wow fadeInUp" data-wow-delay="500ms">
                The International Mobility Program (IMP) provides a streamlined pathway for Canadian employers to hire temporary foreign workers without a Labour Market Impact Assessment (LMIA). This program is designed for situations where the work provides a broad economic, cultural, or other competitive advantage to Canada.
            </p>
            
            <h3>Employer Requirements</h3>
            <p>
                Unlike the LMIA stream, the IMP focuses on the benefits the foreign worker brings to Canada. In most cases, the employer&apos;s main responsibility is to:
            </p>
            <ul className="list-style-four mt-3">
                <li>Pay the employer compliance fee.</li>
                <li>Submit an official offer of employment through the IRCC Employer Portal.</li>
            </ul>
            <p className="mt-4">
                Once the employer&apos;s part is complete, the temporary foreign worker can apply for their work permit. It&apos;s crucial for employers to comply with all conditions and responsibilities, as non-compliance can lead to significant penalties.
            </p>
             <div className="mt-5 text-center">
                <h3>Considering International Mobility Program?</h3>
                <p>Let us help you navigate the requirements to ensure your application is complete and strong, so you can spend valuable time with your family in Canada.</p>
                <Link className="btn-style-one circle mt-3" href="/appointment">
                    Get Assistance <span></span>
                </Link>
            </div>
        </>
    );
}