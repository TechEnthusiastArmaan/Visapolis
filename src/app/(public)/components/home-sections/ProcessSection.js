// src/app/(public)/components/home-sections/ProcessSection.js
import Image from 'next/image';

const ProcessSection = () => {
  return (
    <div className="process-style-one-area text-center pt-0 pb-120">
        <div className="container">
            <div className="row">
                <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                    <div className="site-heading text-center">
                        <h4 className="sub-title">Our Visa Process</h4>
                        <h2 className="title split-text">Follow our streamlined path for  <br /> your visa process</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                {/* 
                  Container for all the process items. 
                  We can add a class to adjust for 5 items if needed.
                */}
                <div className="col-lg-12">
                    <div className="process-style-one-items wow fadeInUp" data-wow-delay="100ms">

                        {/* Step 1: Complete Online Form */}
                        
                        {/* End Step 1 */}

                        {/* Step 2: Book Consultation */}
                        <div className="process-style-one-item hover-active-item active"> {/* 'active' class highlights this step */}
                            <div className="icon">
                                <Image src="/assets/img/icon/10.png" alt="Consultation Icon" width={80} height={80}/>
                            </div>
                            <div className="info">
                                <div className="shape">
                                    <Image src="/assets/img/shape/41.png" alt="Decorative Shape" width={220} height={200} style={{ width: 'auto', height: 'auto' }}/>
                                </div>
                                <span>01</span>
                                <h4>Book a consultation</h4>
                                <p>Schedule and pay for a one-on-one consultation with our Regulated Canadian Immigration Consultant (RCIC).</p>
                            </div>
                        </div>
                        {/* End Step 2 */}
<div className="process-style-one-item hover-active-item">
                            <div className="icon">
                                <Image src="/assets/img/icon/9.png" alt="Online Form Icon" width={80} height={80} />
                            </div>
                            <div className="info">
                                <div className="shape">
                                    <Image src="/assets/img/shape/41.png" alt="Decorative Shape" width={220} height={200} style={{ width: 'auto', height: 'auto' }}/>
                                </div>
                                <span>02</span>
                                <h4>Complete the assessment form</h4>
                                <p>Start by filling out our detailed assessment form with your information.</p>
                            </div>
                        </div>
                        {/* --- NEW STEP 3: Sign Agreement --- */}
                        <div className="process-style-one-item hover-active-item">
                            <div className="icon">
                                {/* Use a new or existing icon */}
                                <Image src="/assets/img/icon/12.png" alt="Agreement Icon" width={80} height={80}/>
                            </div>
                            <div className="info">
                                <div className="shape">
                                    <Image src="/assets/img/shape/41.png" alt="Decorative Shape" width={220} height={200} style={{ width: 'auto', height: 'auto' }}/>
                                </div>
                                <span>03</span>
                                <h4>Sign the service agreement</h4>
                                <p>After the consultation, you&apos;ll receive a formal service agreement to review and sign.</p>
                            </div>
                        </div>
                        {/* End Step 3 */}
                        
                        {/* Step 4: Documents & Fees (was step 2) */}
                        <div className="process-style-one-item hover-active-item">
                            <div className="icon">
                                {/* Reusing icon/10.png as an example */}
                                <Image src="/assets/img/icon/10.png" alt="Documents Icon" width={80} height={80}/>
                            </div>
                            <div className="info">
                                <div className="shape">
                                    <Image src="/assets/img/shape/41.png" alt="Decorative Shape" width={220} height={200} style={{ width: 'auto', height: 'auto' }}/>
                                </div>
                                <span>04</span>
                                <h4>Document review and final submission</h4>
                                <p>Upon final review and payment, your application is submitted to the immigration authorities.</p>
                            </div>
                        </div>
                        {/* End Step 4 */}

                        {/* --- NEW STEP 5: File Submission --- */}
                        {/* <div className="process-style-one-item hover-active-item">
                            <div className="icon"> */}
                                {/* Use another new or existing icon */}
                                {/* <Image src="/assets/img/icon/13.png" alt="Submission Icon" width={80} height={80}/>
                            </div>
                            <div className="info">
                                <div className="shape">
                                    <Image src="/assets/img/shape/41.png" alt="Decorative Shape" width={220} height={200} style={{ width: 'auto', height: 'auto' }}/>
                                </div>
                                <span>05</span>
                                <h4>File submission</h4>
                                <p>Your completed application is officially submitted to the appropriate immigration authorities.</p>
                            </div>
                        </div> */}
                        {/* End Step 5 */}

                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
export default ProcessSection;