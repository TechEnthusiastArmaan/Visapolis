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
                        <h4 className="sub-title">Training & Certification</h4>
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
                            <li className="nav-item" role="presentation"><button className="nav-link active" id="tabs_1" data-bs-toggle="tab" data-bs-target="#tab_1" type="button" role="tab" aria-controls="tab_1" aria-selected="true"><strong>Citizenship test <FontAwesomeIcon icon={faArrowRight} /></strong></button></li>
                            <li className="nav-item" role="presentation"><button className="nav-link" id="tabs_2" data-bs-toggle="tab" data-bs-target="#tab_2" type="button" role="tab" aria-controls="tab_2" aria-selected="false"><strong>Visa Training <FontAwesomeIcon icon={faArrowRight} /></strong></button></li>

                            <li className="nav-item" role="presentation"><button className="nav-link" id="tabs_3" data-bs-toggle="tab" data-bs-target="#tab_3" type="button" role="tab" aria-controls="tab_3" aria-selected="false"><strong>Immigration law <FontAwesomeIcon icon={faArrowRight} /></strong></button></li>

                            <li className="nav-item" role="presentation"><button className="nav-link" id="tabs_4" data-bs-toggle="tab" data-bs-target="#tab_4" type="button" role="tab" aria-controls="tab_4" aria-selected="false"><strong>Working Skills <FontAwesomeIcon icon={faArrowRight} /></strong></button></li>
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
                                        <h3><Link href="/coaching-details">Citizenship test</Link></h3>
                                        <p>The U.S. Citizenship Test is a crucial step in the naturalization process, assessing an applicant’s knowledge of American government, history, and English language skills. Evaluated during your interview.</p>
                                        <ul className="list-style-three">
                                            <li>English Test</li>
                                            <li>Civics Test</li>
                                            <li>Study Resources</li>
                                        </ul>
                                        <Link href="/coaching-details" className="btn-style-one circle">Course Details <span></span></Link>
                                    </div>
                                </div>
                            </div>
                            {/* More tab panes... */}
                            <div className="tab-pane fade" id="tab_2" role="tabpanel" aria-labelledby="tabs_2">
                                <div className="training-style-one-item">
                                    <Image src="/assets/img/course/2.jpg" alt="Visa Training course" width={800} height={500}/>
                                    <div className="info">
                                        <div className="shape"><Image src="/assets/img/shape/29.png" alt="shape" width={100} height={100}/></div>
                                        <h3><Link href="/coaching-details">Visa Training</Link></h3>
                                        <p>                                            Visa Training typically refers to training programs or courses designed to help individuals understand visa processes, requirements, and regulations, particularly for work, study, or immigration purposes.
</p>
                                        <ul className="list-style-three">
                                            <li>Visa Application</li>
                                            <li>Visa Processing</li>
                                            <li>Visa Management</li>
                                        </ul>
                                        <Link href="/coaching-details" className="btn-style-one circle">Course Details <span></span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab_3" role="tabpanel" aria-labelledby="tabs_3">
                                <div className="training-style-one-item">
                                    <Image src="/assets/img/course/3.jpg" alt="Immigration law course" width={800} height={500}/>
                                    <div className="info">
                                        <div className="shape"><Image src="/assets/img/shape/29.png" alt="shape" width={100} height={100}/></div>
                                        <h3><Link href="/coaching-details">Immigration law</Link></h3>
                                        <p>                                            Immigration law refers to the set of rules, regulations, and procedures governing the process of entering the United States, whether for permanent or temporary residency.
</p>
                                        <ul className="list-style-three">
                                            <li>Immigration Law</li>
                                            <li>Immigration Process</li>
                                            <li>Immigration Regulations</li>
                                        </ul>
                                        <Link href="/coaching-details" className="btn-style-one circle">Course Details <span></span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab_4" role="tabpanel" aria-labelledby="tabs_4">
                                <div className="training-style-one-item">
                                    <Image src="/assets/img/course/4.jpg" alt="Working Skills course" width={800} height={500}/>
                                    <div className="info">
                                        <div className="shape"><Image src="/assets/img/shape/29.png" alt="shape" width={100} height={100}/></div>
                                        <h3><Link href="/coaching-details">Working Skills</Link></h3>
                                        <p>                                            Working skills refer to the practical abilities and knowledge acquired through education, training, or experience that are necessary for a person to perform a specific job or function.
</p>
                                        <ul className="list-style-three">
                                            <li>Working Skills</li>
                                            <li>Job Knowledge</li>
                                            <li>Problem-Solving</li>
                                        </ul>
                                        <Link href="/coaching-details" className="btn-style-one circle">Course Details <span></span></Link>
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