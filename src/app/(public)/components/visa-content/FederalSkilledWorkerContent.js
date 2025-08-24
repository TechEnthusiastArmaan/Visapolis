// src/app/(public)/components/visa-content/FederalSkilledWorkerContent.js
import Image from 'next/image';

export default function FederalSkilledWorkerContent() {
    return (
        <>
            <div className="thumb wow fadeInUp">
                <Image 
                    src="/assets/img/banner/10.jpg" 
                    alt="Diverse group of professionals representing Federal Skilled Workers" 
                    width={820} height={422} 
                    style={{ borderRadius: '10px', objectFit: 'cover' }} 
                />
            </div>
            <h2 className="wow fadeInUp" data-wow-delay="300ms">Global Talent Wanted: Federal Skilled Worker Program (FSWP)</h2>
            <p className="wow fadeInUp" data-wow-delay="500ms">
                The Federal Skilled Worker Program (FSWP) is a cornerstone of Canada&apos;s economic immigration system, managed through Express Entry. It is designed for individuals with specific work experience, education, and language abilities who have the potential to establish themselves successfully in the Canadian economy.
            </p>
            
            <h3>Minimum Work Experience Requirements</h3>
            <p>
                To qualify, your skilled work experience must meet the following criteria:
            </p>
            <ul className="list-style-four mt-3">
                <li>Be in a TEER 0, 1, 2, or 3 category of the National Occupational Classification (NOC).</li>
                <li>Have been obtained within the last 10 years, either in Canada or abroad.</li>
                <li>Consist of at least 1 year of continuous full-time work (1,560 hours total / 30 hours per week) or an equivalent amount in part-time work.</li>
                <li>It must be paid work (volunteer work or unpaid internships do not count).</li>
            </ul>
             <p className="mt-4">
                Applicants must also score a minimum of 67 points on a selection grid that assesses factors like age, education, language skills, and adaptability.
            </p>
        </>
    );
}