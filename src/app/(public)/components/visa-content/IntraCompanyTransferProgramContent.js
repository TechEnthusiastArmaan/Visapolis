// src/app/(public)/components/visa-content/IntraCompanyTransferProgramContent.js
import Image from 'next/image';

export default function IntraCompanyTransferProgramContent() {
    return (
        <>
            <div className="thumb wow fadeInUp">
                <Image 
                    src="/assets/img/banner/10.jpg" 
                    alt="An international employee moving between global office locations" 
                    width={820} height={422} 
                    style={{ borderRadius: '10px', objectFit: 'cover' }} 
                />
            </div>
            <h2 className="wow fadeInUp" data-wow-delay="300ms">Expand Your Business: Intra-Company Transfer (ICT) Program</h2>
            <p className="wow fadeInUp" data-wow-delay="500ms">
                The Intra-Company Transfer (ICT) Program, part of the International Mobility Program, allows international companies to temporarily transfer key employees to their Canadian parent, subsidiary, branch, or affiliate. This program is designed to improve management effectiveness, expand Canadian exports, and enhance Canada&apos;s competitiveness in the global market.
            </p>
            
            <h3>Eligible Employee Categories</h3>
            <p>
                The ICT work permit can be extended for 5-7 years and can eventually lead to permanent residence. The program is available to highly skilled employees in three main categories:
            </p>
            <ul className="list-style-four mt-3">
                <li>
                    <strong>Executives:</strong> Employees who primarily direct the management of the enterprise or a major component.
                </li>
                <li>
                    <strong>Senior Managerial:</strong> Employees who manage all or part of the enterprise and supervise other managers or professional employees.
                </li>
                <li>
                    <strong>Specialized Knowledge Positions:</strong> Employees who possess knowledge at an advanced level of expertise and proprietary knowledge of the company’s product, service, research, or management.
                </li>
            </ul>
            <p className="mt-4">
                Qualified transferees provide a significant benefit to Canada&apos;s market and are therefore exempt from the Labour Market Impact Assessment (LMIA) requirement.
            </p>
        </>
    );
}