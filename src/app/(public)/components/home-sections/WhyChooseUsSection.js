import Image from 'next/image';

const WhyChooseUsSection = () => {
    return (
        <div className="choose-us-style-two-area default-padding-top pb-300 bg-dark text-light" style={{backgroundColor: '#392757 !important',backgroundImage: `url(/assets/img/shape/plane-bg.png)`}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="choose-us-style-two-items">
                            <div className="choose-us-style-two wow fadeInUp">
                            <div className="choose-us-style-two-item">
                                <div className="icon">
                                      <Image src="/assets/img/icon/12.png" alt="user" width={40} height={40}/>

                                </div>
                                <div className="info">
                                    <h4>Fastest working process</h4>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available, but the majority.
                                    </p>
                                </div>
                            </div>
                            <div className="choose-us-style-two-item">
                                <div className="icon">
                                      <Image src="/assets/img/icon/13.png" alt="user" width={40} height={40}/>  
                                </div>
<div className="info">
<h4>Fastest working process</h4>
<p>
                                        There are many variations of passages of Lorem Ipsum available, but the majority.
                                    </p>
</div>
</div>
</div>                                {/*... Repeat items */}
                             <div className="choose-us-style-two wow fadeInUp" data-wow-delay="100ms">
                                <div className="customer-card">
                                   <h2>10m+</h2>
                                   <h4>Trusted Customer</h4>
                                   <div className="users">
                                      <Image src="/assets/img/team/7.jpg" alt="user" width={40} height={40}/>
                                      <Image src="/assets/img/team/8.jpg" alt="user" width={40} height={40}/>
                                      <Image src="/assets/img/team/9.jpg" alt="user" width={40} height={40}/>
                                      <i className="fas fa-plus"></i>
                                   </div>
                                </div>
                             </div>
                            <div className="choose-us-style-two wow fadeInUp" data-wow-delay="200ms">
                            <div className="choose-us-style-two-item">
                                <div className="icon">
                                      <Image src="/assets/img/icon/14.png" alt="user" width={40} height={40}/>
                                </div>
                                <div className="info">
                                    <h4>Fastest working process</h4>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available, but the majority.
                                    </p>
                                </div>
                            </div>
                            <div className="choose-us-style-two-item">
                                <div className="icon">
                                      <Image src="/assets/img/icon/15.png" alt="user" width={40} height={40}/>
                                </div>
<div className="info">
<h4>Fastest working process</h4>
<p>
                                        There are many variations of passages of Lorem Ipsum available, but the majority.
                                    </p>
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
export default WhyChooseUsSection;
