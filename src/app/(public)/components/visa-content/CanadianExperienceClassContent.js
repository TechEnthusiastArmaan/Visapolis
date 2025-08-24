// src/app/(public)/components/visa-content/CanadianExperienceClassContent.js
import Image from 'next/image';

export default function CanadianExperienceClassContent() {
    return (
        <>
            <div className="thumb wow fadeInUp">
                <Image 
                    src="/assets/img/banner/10.jpg" 
                    alt="A professional working in a Canadian office, representing skilled experience" 
                    width={820} height={422} 
                    style={{ borderRadius: '10px', objectFit: 'cover' }} 
                />
            </div>
            <h2 className="wow fadeInUp" data-wow-delay="300ms">Leverage Your Experience: Canadian Experience Class (CEC)</h2>
            <p className="wow fadeInUp" data-wow-delay="500ms">
                The Canadian Experience Class (CEC) is a permanent residence pathway managed under Express Entry, designed for individuals who have already gained skilled work experience in Canada. It&apos;s an ideal program for those who have studied and/or worked in Canada and wish to make it their permanent home.
            </p>
            
            <h3>Key Requirements for Skilled Work Experience</h3>
            <p>
                To be eligible, you must have at least 12 months of full-time (or an equivalent amount in part-time) skilled work experience in Canada within the last three years. This experience must meet several criteria:
            </p>
            <ul className="list-style-four mt-3">
                <li>Be in a TEER 0, 1, 2, or 3 category.</li>
                <li>Experience must be gained while you were authorized to work in Canada under a valid temporary resident status.</li>
                <li>Self-employment and work experience gained while you were a full-time student does not count.</li>
                <li>You must show that you performed the main duties as listed in the National Occupational Classification (NOC).</li>
            </ul>
        </>
    );
}