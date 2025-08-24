// src/app/(public)/components/visa-content/SpousalOpenWorkPermitContent.js
import Image from 'next/image';

export default function SpousalOpenWorkPermitContent() {
    return (
        <>
            <div className="thumb wow fadeInUp">
                <Image 
                    src="/assets/img/banner/10.jpg" 
                    alt="A couple working together in their new life in Canada" 
                    width={820} height={422} 
                    style={{ borderRadius: '10px', objectFit: 'cover' }} 
                />
            </div>
            <h2 className="wow fadeInUp" data-wow-delay="300ms">Stay and Work Together: Spousal Open Work Permit (SOWP)</h2>
            <p className="wow fadeInUp" data-wow-delay="500ms">
                The Spousal Open Work Permit (SOWP) allows the spouse or common-law partner of a Canadian citizen, permanent resident, skilled worker, or student to live and work in Canada. This permit is often used while a spousal sponsorship application for permanent residence is in process, but it is also available to partners of temporary residents under certain conditions.
            </p>
            
            <h3>Eligibility Criteria for Sponsorship Category</h3>
            <p>
                When applying under the spousal sponsorship category, applicants must meet the following criteria:
            </p>
            <ul className="list-style-four mt-3">
                <li>A permanent residence application under the spousal or common-law partner category must be submitted.</li>
                <li>The applicant and the sponsor must reside together in Canada at the same address.</li>
                <li>The applicant must have valid temporary resident status as a visitor, student, or worker.</li>
                <li>Both the applicant and sponsor must meet all eligibility requirements for spousal sponsorship.</li>
            </ul>
        </>
    );
}