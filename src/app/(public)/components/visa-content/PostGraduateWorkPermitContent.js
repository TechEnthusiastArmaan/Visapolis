// src/app/(public)/components/visa-content/PostGraduateWorkPermitContent.js
import Image from 'next/image';

export default function PostGraduateWorkPermitContent() {
    return (
        <>
            <div className="thumb wow fadeInUp">
                <Image 
                    src="/assets/img/banner/10.jpg" 
                    alt="A recent graduate starting their career in Canada" 
                    width={820} height={422} 
                    style={{ borderRadius: '10px', objectFit: 'cover' }} 
                />
            </div>
            <h2 className="wow fadeInUp" data-wow-delay="300ms">Launch Your Career with a Post-Graduate Work Permit (PGWP)</h2>
            <p className="wow fadeInUp" data-wow-delay="500ms">
                The PGWP is a valuable open work permit that allows international students who have graduated from a Designated Learning Institution (DLI) to gain valuable Canadian work experience. You can work for almost any employer in Canada. The duration of the permit depends on the length of your study program. It&apos;s a once-in-a-lifetime opportunity, with very few exceptions.
            </p>
            
            <h3>General Eligibility Requirements</h3>
            <p>
                To be eligible for a PGWP, you must meet several strict criteria related to your studies and status in Canada:
            </p>
            <ul className="list-style-four mt-3">
                <li>Completed a program of study at a PGWP-eligible DLI that was at least 8 months long.</li>
                <li>Maintained full-time student status in Canada during each semester of your study program (except for the final semester).</li>
                <li>Apply for your PGWP within 180 days of receiving your final marks and confirmation of program completion.</li>
                <li>Held a valid study permit at some point during those 180 days.</li>
            </ul>
        </>
    );
}