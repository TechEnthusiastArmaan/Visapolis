// src/app/(public)/components/visa-content/StartupVisaContent.js
import Image from 'next/image';
import Link from 'next/link';

export default function StartupVisaContent() {
    return (
        <>
            <div className="thumb wow fadeInUp">
                <Image 
                    src="/assets/img/banner/10.jpg" 
                    alt="Innovative entrepreneurs collaborating on a new business idea" 
                    width={820} height={422} 
                    style={{ borderRadius: '10px', objectFit: 'cover' }} 
                />
            </div>
            <h2 className="wow fadeInUp" data-wow-delay="300ms">Innovate in Canada: The Start-up Visa Program</h2>
            <p className="wow fadeInUp" data-wow-delay="500ms">
                The Start-Up Visa (SUV) program is a unique pathway in the Business Immigration stream, targeting immigrant entrepreneurs with innovative business ideas. This popular route allows successful applicants and their families to obtain permanent residence in Canada while launching their new venture.
            </p>
            
            <h3>Core Program Requirements</h3>
            <p>
                To be eligible for the SUV program, entrepreneurs must meet several key requirements designed to ensure their business is innovative and has the potential to succeed in Canada:
            </p>
            <ul className="list-style-four mt-3">
                <li>
                    <strong>Innovative Business Idea:</strong> You must have a qualifying business idea that is scalable and has the potential to create jobs for Canadians.
                </li>
                <li>
                    <strong>Letter of Support:</strong> You must secure a Letter of Support from a designated organization, such as a venture capital fund, angel investor group, or business incubator.
                </li>
                <li>
                    <strong>Sufficient Capital:</strong> You must have enough capital to establish and operate the company in Canada.
                </li>
                <li>
                    <strong>Language Proficiency:</strong> Meet the minimum Canadian Language Benchmark (CLB 5) in either English or French.
                </li>
            </ul>
             <div className="mt-5 text-center">
                <h3>Considering a Start-Up Visa?</h3>
                <p>Let us help you navigate the requirements to ensure your application is complete and strong, so you can spend valuable time with your family in Canada.</p>
                <Link className="btn-style-one circle mt-3" href="/appointment">
                    Get Assistance <span></span>
                </Link>
            </div>
        </>
    );
}