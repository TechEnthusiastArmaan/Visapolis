// src/app/(public)/components/visa-content/LMIAContent.js
import Image from 'next/image';
import Link from 'next/link';

// This is a dedicated content component for the LMIA page.
export default function LMIAContent() {
    return (
        <>
            {/* Main Featured Image */}
            <div className="thumb wow fadeInUp">
                <Image 
                    src="/assets/img/banner/10.jpg" // Use a relevant image
                    alt="Canadian employer and foreign worker discussing an LMIA work permit" 
                    width={820} 
                    height={422} 
                    style={{ borderRadius: '10px', objectFit: 'cover' }} 
                />
            </div>

            {/* Introductory Section */}
            <h2 className="wow fadeInUp" data-wow-delay="300ms">Understanding the LMIA Work Permit</h2>
            <p className="wow fadeInUp" data-wow-delay="500ms">
                A Labour Market Impact Assessment (LMIA) is a document that an employer in Canada may need to get before hiring a foreign worker. A positive LMIA will show that there is a need for a foreign worker to fill the job. It will also show that no Canadian worker or permanent resident is available to do the job. This is a crucial step for many employer-specific work permits.
            </p>

            {/* Detailed Section with Image and List */}
            <div className="features mt-40 mt-xs-30 mb-40 mb-xs-30">
                <div className="row align-center">
                    <div className="col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="500ms">
                        <div className="thumbs mb-xs-30">
                            <Image 
                                src="/assets/img/blog/lmia-process.jpg" // Use a secondary relevant image
                                alt="Official government document for the LMIA process" 
                                width={394} 
                                height={250} 
                                style={{ borderRadius: '10px', objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="500ms">
                        <div className="content">
                            <h3>Key Steps for the Employer</h3>
                            <ul className="list-style-four">
                                <li>Determine if the position requires an LMIA.</li>
                                <li>Conduct mandatory recruitment efforts to hire Canadians first.</li>
                                <li>Submit a complete LMIA application and supporting documents.</li>
                                <li>Receive a positive LMIA decision from ESDC/Service Canada.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Informational Section about the Process */}
            <h3>The Application Process for the Foreign Worker</h3>
            <p>
                Once an employer receives a positive LMIA, the foreign worker can apply for a work permit. The LMIA decision letter, a job offer letter, and a contract are all required documents for the application. It is vital that all information is consistent across all documents to ensure a smooth application process. The processing times for both the LMIA and the subsequent work permit can vary significantly.
            </p>

            {/* Card-style Highlight Section */}
            <div className="card-style-three mt-40 wow fadeInUp" data-wow-delay="300ms">
                <div className="item">
                    <div className="number">01</div>
                    <div className="info">
                        <h4>Employer&apos;s Responsibility</h4>
                        <p>
                            The onus is on the Canadian employer to prove the genuine need for a foreign worker. This involves detailed job advertisements and clear justification.
                        </p>
                    </div>
                </div>
                <div className="item">
                    <div className="number">02</div>
                    <div className="info">
                        <h4>Worker&apos;s Application</h4>
                        <p>
                            With a positive LMIA, the foreign national has a strong basis for their work permit application, but they must still meet all other admissibility requirements.
                        </p>
                    </div>
                </div>
            </div>
            
            {/* Call to Action Section */}
            <div className="mt-5 text-center">
                <h3>Ready to Start the LMIA Process?</h3>
                <p>Navigating the LMIA and work permit applications requires careful attention to detail. Our experts are here to guide both employers and workers through every step.</p>
                <Link className="btn-style-one circle mt-3" href="/appointment">
                    Get Assistance <span></span>
                </Link>
            </div>
        </>
    );
}