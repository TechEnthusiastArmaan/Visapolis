const FunFactSection = () => {
    return (
        <div className="fun-fact-style-one-area default-padding bg-cover bg-dark text-light overflow-hidden" style={{ backgroundImage: `url(/assets/img/shape/21.png)` }}>
            <div className="container">
                <div className="fun-fact-style-one-items">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 funfact-style-one-item">
                            <div className="fun-fact">
                                <div className="counter">
                                    <div className="timer" data-to="56" data-speed="2000">56</div>
                                    <div className="operator">K</div>
                                </div>
                                <span className="medium">Successful client <br /> collaborations</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 funfact-style-one-item">
                           <div className="fun-fact">
                               <div className="counter">
                                   <div className="timer" data-to="100" data-speed="2000">100</div>
                                   <div className="operator">%</div>
                               </div>
                               <span className="medium">Perfect visa <br /> approval record</span>
                           </div>
                        </div>
                        <div className="col-lg-4 col-md-6 funfact-style-one-item">
                           <div className="fun-fact">
                               <div className="counter">
                                   <div className="timer" data-to="2" data-speed="2000">2</div>
                                   <div className="operator">Day</div>
                               </div>
                               <span className="medium">Fast-track <br /> visa processing</span>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default FunFactSection;