import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';   
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const TrainingSection = () => {
    return (
         <div id="training" className="training-style-one-area default-padding-top bg-dark text-light" style={{backgroundColor: '#392757 !important', backgroundImage: `url(/assets/img/shape/30.png)`}}>

            <div className="container">
               <div className="row">
                  <div className="col-lg-7">
                     <div className="site-heading">
                        <h4 className="sub-title">Get Work Permit</h4>
                        <h2 className="title split-text">Unlock the immigration training you need</h2>
                     </div>
                  </div>
               </div>
            </div>
            <div className="container container-stage">
               <div className="row">
                  <div className="col-xl-4 col-lg-5 pr-60 pr-md-15 pr-xs-15">
                     <div className="training-style-one-navs">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                           {/* Tab buttons */}
                            <li className="nav-item" role="presentation"><button className="nav-link active" id="tabs_1" data-bs-toggle="tab" data-bs-target="#tab_1" type="button" role="tab" aria-controls="tab_1" aria-selected="true"><strong>Post graduate work permit <FontAwesomeIcon icon={faArrowRight} /></strong></button></li>
                            <li className="nav-item" role="presentation"><button className="nav-link" id="tabs_2" data-bs-toggle="tab" data-bs-target="#tab_2" type="button" role="tab" aria-controls="tab_2" aria-selected="false"><strong>LMIA <FontAwesomeIcon icon={faArrowRight} /></strong></button></li>

                            <li className="nav-item" role="presentation"><button className="nav-link" id="tabs_3" data-bs-toggle="tab" data-bs-target="#tab_3" type="button" role="tab" aria-controls="tab_3" aria-selected="false"><strong>Global Talent Stream <FontAwesomeIcon icon={faArrowRight} /></strong></button></li>

                            <li className="nav-item" role="presentation"><button className="nav-link" id="tabs_4" data-bs-toggle="tab" data-bs-target="#tab_4" type="button" role="tab" aria-controls="tab_4" aria-selected="false"><strong>Visitor visa <FontAwesomeIcon icon={faArrowRight} /></strong></button></li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-xl-8 col-lg-7">
                     <div className="training-style-one-contents">
                        <div className="tab-content" id="myTabContent">
                            {/* Tab Panes */}
                            <div className="tab-pane fade show active" id="tab_1" role="tabpanel" aria-labelledby="tabs_1">
                                <div className="training-style-one-item">
                                    <Image src="/assets/img/course/1.jpg" alt="Citizenship test course" width={800} height={500}/>
                                    <div className="info">
                                        <div className="shape"><Image src="/assets/img/shape/29.png" alt="shape" width={464} height={490}/></div>
                                        <h3><Link href="/coaching-details">Post graduate work permit</Link></h3>
                                        <p>Post graduate work permit is a work permit that allows foreign students to work in Canada after they have completed their studies.</p>
                                        <ul className="list-style-three">
                                            <li>English Test</li>
                                            <li>Civics Test</li>
                                            <li>Study Resources</li>
                                        </ul>
                                        <Link href="/post-graduate-work-permit" className="btn-style-one circle">More Details <span></span></Link>
                                    </div>
                                </div>
                            </div>
                            {/* More tab panes... */}
                            <div className="tab-pane fade" id="tab_2" role="tabpanel" aria-labelledby="tabs_2">
                                <div className="training-style-one-item">
                                    <Image src="/assets/img/course/2.jpg" alt="Visa Training course" width={800} height={500}/>
                                    <div className="info">
                                        <div className="shape"><Image src="/assets/img/shape/29.png" alt="shape" width={100} height={100}/></div>
                                        <h3><Link href="/coaching-details">LMIA</Link></h3>
                                        <p>LMIA is a work permit that allows foreign workers to work in Canada after they have been approved by the Canadian government.</p>
                                        <ul className="list-style-three">
                                            <li>Visa Application</li>
                                            <li>Visa Processing</li>
                                            <li>Visa Management</li>
                                        </ul>
                                        <Link href="/coaching-details" className="btn-style-one circle">More Details <span></span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab_3" role="tabpanel" aria-labelledby="tabs_3">
                                <div className="training-style-one-item">
                                    <Image src="/assets/img/course/3.jpg" alt="Immigration law course" width={800} height={500}/>
                                    <div className="info">
                                        <div className="shape"><Image src="/assets/img/shape/29.png" alt="shape" width={100} height={100}/></div>
                                        <h3><Link href="/coaching-details">Global Talent Stream</Link></h3>
                                        <p>Global Talent Stream is a program that allows foreign workers to work in Canada after they have been approved by the Canadian government.</p>

                                        <ul className="list-style-three">
                                            <li>Global Talent Stream</li>
                                            <li>Global Talent Stream Process</li>
                                            <li>Global Talent Stream Regulations</li>
                                        </ul>
                                        <Link href="/global-talent-stream" className="btn-style-one circle">More Details <span></span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab_4" role="tabpanel" aria-labelledby="tabs_4">
                                <div className="training-style-one-item">
                                    <Image src="/assets/img/course/4.jpg" alt="Working Skills course" width={800} height={500}/>
                                    <div className="info">
                                        <div className="shape"><Image src="/assets/img/shape/29.png" alt="shape" width={100} height={100}/></div>
                                        <h3><Link href="/coaching-details">Visitor visa</Link></h3>
                                        <p>Visitor visa is a visa that allows foreign visitors to visit Canada.</p>

                                        <ul className="list-style-three">
                                            <li>Visitor visa</li>
                                            <li>Visitor visa Process</li>
                                            <li>Visitor visa Regulations</li>
                                        </ul>
                                        <Link href="/coaching-details" className="btn-style-one circle">More Details <span></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
    );
}
export default TrainingSection;