// src/app/(public)/components/visa-content/StudyPermitContent.js
import Image from 'next/image';

export default function StudyPermitContent() {
    return (
        <>
            <div className="thumb wow fadeInUp">
                <Image 
                    src="/assets/img/banner/10.jpg" 
                    alt="International students studying at a Canadian university campus" 
                    width={820} height={422} 
                    style={{ borderRadius: '10px', objectFit: 'cover' }} 
                />
            </div>
            <h2 className="wow fadeInUp" data-wow-delay="300ms">Your Gateway to a Canadian Education</h2>
            <p className="wow fadeInUp" data-wow-delay="500ms">
                Obtaining a Study Permit to Canada can be a complex process, but with professional guidance, you can significantly increase your chances of success. A Study Permit is a legal document required for any foreign national who wishes to study at a Designated Learning Institution (DLI) in Canada for a program that is more than six months in duration.
            </p>
            
            <h3>Core Documents Required</h3>
            <p>
                To apply for a Study Permit, you must provide several key documents that prove your eligibility and intentions:
            </p>
            <ul className="list-style-four mt-3">
                <li>
                    <strong>Acceptance Letter from a DLI:</strong> An official letter of acceptance from a school approved by the Canadian government.
                </li>
                <li>
                    <strong>Provincial Attestation Letter (PAL):</strong> A new requirement for most students to confirm their spot under a provincial allocation.
                </li>
                <li>
                    <strong>Proof of Financial Support:</strong> Evidence of adequate financial resources to cover your tuition fees, living expenses, and return transportation.
                </li>
            </ul>
            <p className="mt-4">
                Our team can help you compile these documents and build a strong application to begin your educational journey in Canada.
            </p>
        </>
    );
}