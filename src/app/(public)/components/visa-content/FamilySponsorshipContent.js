// src/app/(public)/components/visa-content/FamilySponsorshipContent.js
import Image from 'next/image';
import Link from 'next/link';

export default function FamilySponsorshipContent() {
    return (
        <>
            <div className="thumb wow fadeInUp">
                <Image 
                    src="/assets/img/banner/10.jpg" 
                    alt="A happy family reunited in Canada" 
                    width={820} height={422} 
                    style={{ borderRadius: '10px', objectFit: 'cover' }} 
                />
            </div>
            <h2 className="wow fadeInUp" data-wow-delay="300ms">Reunite Your Family in Canada</h2>
            <p className="wow fadeInUp" data-wow-delay="500ms">
                Family reunification is a key pillar of Canadian immigration policy. The Family Sponsorship program allows Canadian citizens and permanent residents to sponsor their spouse, common-law partner, dependent children, parents, and grandparents to become permanent residents of Canada.
            </p>
            
            <h3>Basic Eligibility Factors for a Sponsor</h3>
            <p>
                To become a sponsor, you must meet several basic eligibility factors:
            </p>
            <ul className="list-style-four mt-3">
                <li>You must be over the age of 18 years.</li>
                <li>You must be a Canadian citizen, a permanent resident, or a person registered in Canada as an Indian under the Canadian Indian Act.</li>
                <li>You must not be receiving social assistance for reasons other than a disability.</li>
                <li>You may need to meet Low Income Cut-Off (LICO) standards, especially for sponsoring parents or grandparents.</li>
                <li>You and your sponsored family member must enter into a financial undertaking agreement, with the Canadian government, promising to provide for their basic needs.</li>
                <li>You must not have a criminal background, be in bankruptcy, or be under a removal order.</li>
            </ul>
             <div className="mt-5 text-center">
                <h3>Considering a Family Sponsorship?</h3>
                <p>Let us help you navigate the requirements to ensure your application is complete and strong, so you can spend valuable time with your family in Canada.</p>
                <Link className="btn-style-one circle mt-3" href="/appointment">
                    Get Assistance <span></span>
                </Link>
            </div>
        </>
    );
}