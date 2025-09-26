import React from "react";

function HomeLoanDetails() {
  return <section className="requirements-section centred pt_40 pb_40">
  <div className="auto-container">
      <div className="sec-title mb_70">
      <h6 style={{letterSpacing:"1.8px",fontSize:"20px"}}>Home Loan</h6>
      <h2>Required Document</h2>
      </div>
      <div className="row clearfix">
        <div className="col-lg-4 col-md-6 col-sm-12 requirements-block">
          <div className="requirements-block-one">
            <div className="inner-box">
              <h4>Documents</h4>
              <ul className="list-item clearfix">
                <li>NID/Birth certificate/Passport</li>
                <li>Photograph – 2 Copies</li>
                <li>Nominee photograph – 1 Copy</li>
                <li>Nominee’s NID/Birth ID/Passport</li>
                <li>Income source document</li>
                <li>E-TIN Certificate</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 requirements-block">
          <div className="requirements-block-one">
            <div className="inner-box">
              <h4>Features</h4>
              <ul className="list-item clearfix">
                <li>Cheque-book facility</li>
                
                <li>Online banking service through App</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 requirements-block">
          <div className="requirements-block-one">
            <div className="inner-box">
              <h4>Eligibility</h4>
              <ul className="list-item clearfix">
                <li>Age: At least 18 years</li>
                <li>Nationality: Australian or Green Card</li>                
              </ul>
            </div>
          </div>
        </div>
      </div>
  </div>
</section>;
}

export default HomeLoanDetails;
