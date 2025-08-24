// src/app/(public)/components/visa-content/ExpressEntryContent.js
import Image from 'next/image';
import Link from 'next/link';

export default function ExpressEntryContent() {
    return (
        <>
            <div className="thumb wow fadeInUp">
                <Image 
                    src="/assets/img/banner/10.jpg" 
                    alt="Digital representation of the Express Entry online immigration system" 
                    width={820} height={422} 
                    style={{ borderRadius: '10px', objectFit: 'cover' }} 
                />
            </div>
            <h2 className="wow fadeInUp" data-wow-delay="300ms">Express Entry: Canada&apos;s Path for Skilled Workers</h2>
            <p className="wow fadeInUp" data-wow-delay="500ms">
                Express Entry is Canada&apos;s flagship online system designed to manage and process applications for skilled workers seeking permanent residence. It is not an immigration program itself but a system that manages three main federal programs: the Federal Skilled Worker Program, the Federal Skilled Trades Program, and the Canadian Experience Class.
            </p>
            
            <h3>How It Works: The Comprehensive Ranking System (CRS)</h3>
            <p>
                Candidates who are eligible for one of the managed programs can create an online profile and are entered into the Express Entry pool. They are then ranked against each other based on the Comprehensive Ranking System (CRS). This points-based system allocates points for factors such as:
            </p>
            <ul className="list-style-four mt-3">
                <li>Age</li>
                <li>Education</li>
                <li>Work Experience</li>
                <li>Language Skills (English and/or French)</li>
                <li>Arranged employment and provincial nominations</li>
            </ul>
            <p className="mt-4">
                The highest-scoring candidates are invited to apply for permanent residence through regular draws from the pool.
            </p>
             <div className="mt-5 text-center">
                <h3>Considering an Express Entry Application?</h3>
                <p>Let us help you navigate the requirements to ensure your application is complete and strong, so you can spend valuable time with your family in Canada.</p>
                <Link className="btn-style-one circle mt-3" href="/appointment">
                    Get Assistance <span></span>
                </Link>
            </div>
        </>
    );
}