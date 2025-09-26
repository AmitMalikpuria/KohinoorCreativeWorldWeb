import React from "react";
import MortgageCalculator from "mortgage-calculator-react";

import icon1 from '../../../assets/images/icons/icon-1.png';

import shape3 from '../../../assets/images/shape/shape-3.png';

function HomeMortgage(props) {
    return <section className="calculator-section pt_120 pb_120">
        <div className="light-icon float-bob-y" style={{ backgroundImage: `url(${icon1})` }}></div>
        <div className="auto-container">
            <div className="inner-container">
                <div className="shape" style={{ backgroundImage: `url(${shape3})` }}></div>
                <div className="row clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12 content-column" style={{marginBottom:"-109px"}}>
                        <div className="content_block_two">
                            <div className="content-box">
                                <div className="sec-title mb_50">
                                    <h6>Calculate {props.Title} Loan</h6>
                                    <h2>EMI Calculator</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                        <div className="content_block_two">
                            <div className="content-box">
                                {/* <div className="sec-title mb_50">
                                <h6>Calculate {props.Title} Loan</h6>
                                <h2>EMI Calculator</h2>
                            </div> */}
                                <div className="calculator-inner">
                                    <MortgageCalculator price={100000} downPayment={0} interestRate={5.54} months={120} additionalPrincipalPayment={100} taxRate={0.01} insuranceRate={0.01} mortgageInsuranceEnabled={false} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default HomeMortgage;
