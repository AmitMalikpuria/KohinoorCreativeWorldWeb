import React from "react";

function BusinessHours() {
    return <section className="requirements-section centred  pb_30">
        <div className="auto-container">
            <div className="sec-title">
                <h4>BUSINESS HOURS</h4>                
            </div>
            <div className="row clearfix">                
                <div className="col-lg-12 col-md-12 col-sm-12 requirements-block">
                    <div className="requirements-block-one">
                        <div className="inner-box" style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
                            {/* <h4>BUSINESS HOURS</h4> */}
                            <div className="pst-item clearfix" style={{ display: 'flex', flexDirection: 'column',alignItems: 'flex-start',gap:"5px"}}>
                                <p>MONDAY : 9AM - 5PM</p>                                
                                <p>TUESDAY : 9AM - 5PM</p>
                                <p>WEDNESDAY : 9AM - 5PM</p>
                                <p>THRUSDAY : 9AM - 5PM</p>
                                <p>FRIDAY : 9AM - 5PM</p>
                                <p>SATURDAY : CLOSED</p>
                                <p>SUNDAY : CLOSED</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>;
}

export default BusinessHours;
