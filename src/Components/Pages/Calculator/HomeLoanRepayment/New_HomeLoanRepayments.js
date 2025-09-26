import React, { useEffect, useState, useRef } from "react";
import './HomeLoanRepayment.css'

import Layout from "../../../Layout";

import icon1 from '../../../../assets/images/icons/icon-1.png';
import shape3 from '../../../../assets/images/shape/shape-3.png';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";
import { handleKeyPress, cleanFloat, removeCommasAndConcatenate, getBeforeDecimal } from "../Helper";
import Contactus from "../../DialogBox/Contactus";

function New_HomeLoanRepayments() {
    const navigate = useNavigate();

    const borrowingRef = useRef(null);
    const interestRef = useRef(null);
    const yearref = useRef(null);


    const [valueofproperty, setvalueofproperty] = useState("650000".toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    const [borrowing, setborrowing] = useState("600000".toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    const [interestrate, setinterestrate] = useState("5.54");
    const [LoanTerm, setLoanTerm] = useState("20");
    const [ExtraPayment, setExtraPayment] = useState("0".toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    const [InterestOnlyYears, SetInterestOnlyYears] = useState("0");


    function calculateInterestonCheck(value) {
        const interestInput = document.getElementById("hl-interest-rate");

        if (value == 'option1') {
            interestInput.disabled = true;
            document.getElementById("option1").checked = true;
            document.getElementById("option2").checked = false;
            setinterestrate('5.54');
        } else if (value == 'option2') {
            interestInput.disabled = false;
            document.getElementById("option1").checked = false;
            document.getElementById("option2").checked = true;
            setinterestrate(''); // Assuming you want to clear the input when option2 is selected
        }
    }

    useEffect(() => {
        document.getElementById("option1").checked = true;
    }, [])

    function formatNumberWithCommas(number, incometype) {
        let numberString = number.toString().replace(/,/g, '');

        if (incometype == "valueofproperty") {
            setvalueofproperty(numberString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        }
        else if (incometype == "borrowing") {
            setborrowing(numberString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        }
        else if (incometype == "interestrate") {
            setinterestrate(numberString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        }
        else if (incometype == "ExtraPayment") {

            setExtraPayment(numberString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") == "" ? "" : numberString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        }
    }


    function calculateRepayments(sender, repaymentLoad) {

        var senderId = sender.target.id;
        var valid = true;

        var state = document.getElementById('state');
        var propertyAmount = removeCommasAndConcatenate(document.getElementById('property-value').value);
        var loanAmount = removeCommasAndConcatenate(document.getElementById('loan-amount').value);
        var loanTerm = removeCommasAndConcatenate(document.getElementById('hl-loan-term').value);

        var frequency = removeCommasAndConcatenate(document.getElementById('repayment-frequency').value);
        var interestRate = removeCommasAndConcatenate(document.getElementById('hl-interest-rate').value);
        debugger;
        var repaymentOption = document.getElementById('repayment-option').value;
        var repaymentExtra = document.getElementById('repayment-extra').value;

        var model = bindModel(state, propertyAmount, loanAmount, loanTerm, frequency, interestRate, repaymentOption, repaymentExtra);

        if (!valid) {
            return;
        }

        document.getElementById('text-repayment-value').textContent = "$" + cleanFloat(model.repaymentVal);
        document.getElementById('text-loan-amount').textContent = "$" + cleanFloat(model.totalPayable);
        document.getElementById('text-interest-amount').textContent = "$" + cleanFloat(model.totalInterestOnlyPayable);


        var totalOptionRepayments = [];
        if (model.repaymentOptionVal > 0 || model.repaymentExtraVal > 0) {

            totalOptionRepayments = calculateOptionRepayments(model.repaymentOptionVal, model.interestRateVal, model.loanTermVal, model.repaymentVal, model.repaymentExtraVal, model.frequencyVal, model.loanAmountVal);
        }

        var frequencyText = 'monthly';
        switch (model.frequencyVal) {
            case 26:
                frequencyText = 'fortnightly';
                break;
            case 52:
                frequencyText = 'weekly';
                break;
        }
        document.getElementById('text-repayment-frequency').textContent = frequencyText;


        if (!repaymentLoad && senderId === 'repayment-calculate') {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                'event': 'calculatorSubmit'
            });
            window.dataLayer.push({
                'event': 'HomeLoanRepayments'
            });
        }
    }

    function bindModel(state, propertyAmount, loanAmount, loanTerm, frequency, interestRate, repaymentOption, repaymentExtra) {

        var propertyAmountVal = parseInt(propertyAmount.replace(/,/g, '').replace('$ ', ''));
        var loanAmountVal = parseInt(loanAmount.replace(/,/g, '').replace('$ ', ''));
        var interestRateVal = parseFloat(interestRate.trim());
        var loanTermVal = parseInt(loanTerm);
        var frequencyVal = parseInt(frequency);
        var repaymentVal = calculateRepayment(loanAmountVal, interestRateVal, loanTermVal, frequencyVal);
        var totalPrincipalRepayments = calculateTotalRepayments(interestRateVal, loanTermVal, repaymentVal, frequencyVal);
        var totalInterestRepayments = calculateTotalInterestRepayments(interestRateVal, loanTermVal, repaymentVal, frequencyVal);
        var totalPayable = totalInterestRepayments[0];

        var model = {
            stateVal: state,
            propertyAmountVal: propertyAmountVal,
            loanAmountVal: loanAmountVal,
            interestRateVal: interestRateVal,
            loanTermVal: loanTermVal,
            frequencyVal: frequencyVal,
            repaymentOptionVal: parseInt(repaymentOption),
            repaymentExtraVal: repaymentExtra != '' ? parseInt(repaymentExtra.replace(/,/g, '').replace('$ ', '')) : 0,
            repaymentVal: repaymentVal,
            totalPrincipalRepayments: totalPrincipalRepayments,
            totalInterestRepayments: totalInterestRepayments,
            totalPayable: totalPayable,
            totalInterestOnlyPayable: totalPayable - loanAmountVal
        };

        return model;
    }

    function cleanFloat(input) {
        if (input < 0) { return 0; }
        return parseInt(input).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function calculateRepayment(loanAmount, interestRate, loanTerm, repaymentsPerYear) {
        var i = interestRate / repaymentsPerYear / 100;
        var N = loanTerm * repaymentsPerYear;
        var result = (i * loanAmount) / (1 - Math.pow(1 + i, -1 * N));
        return (result);
    }

    function calculateTotalRepayments(interestRate, loanTerm, repayment, repaymentsPerYear) {
        var repayments = [];
        for (var i = 0; i <= loanTerm * 12; i++) {
            var termRepayment = calculatePrincipal(i / 12, interestRate, loanTerm, repayment, repaymentsPerYear)
            repayments.push(termRepayment);
        }

        return repayments;
    }

    function calculatePrincipal(period, interestRate, loanTerm, repayment, repaymentsPerYear) {
        period = (repaymentsPerYear * period);
        var i = (interestRate / repaymentsPerYear / 100);
        var N = loanTerm * repaymentsPerYear;
        var Cn = repayment * Math.pow(1 + i, (-1 * (1 + N - period)));
        var Inn = repayment - Cn;
        var Rn = (Inn / i) - Cn;
        return Math.round(Rn);
    }

    function calculateTotalInterestRepayments(interestRate, loanTerm, repayment, repaymentsPerYear) {
        var repayments = [];
        for (var i = 0; i <= loanTerm * 12; i++) {
            var termRepayment = calculateInterest(repayment, repaymentsPerYear, loanTerm, i / 12);
            repayments.push(termRepayment);
        }

        return repayments;
    }

    function calculateOptionRepayments(interestOnlyYears, interestRate, loanTerm, repayment, repaymentExtra, repaymentsPerYear, loanAmount) {
        debugger;
        var repayments = [];
        var interestOnlyRepayments = [];
        var finalRepayment = [];
        var interestOnlyRepayment = 0;
        var newRepayment = repayment;
        var newLoanTerm = loanTerm;

        // interest only period
        if (interestOnlyYears > 0) {

            interestOnlyRepayment = calculateInterestRepayment(loanAmount, interestRate, repaymentsPerYear);

            if (repaymentExtra > 0) {
                interestOnlyRepayment = interestOnlyRepayment + repaymentExtra;
            }

            var interestOnlyTermRepayment = calculatePrincipal(0, interestRate, loanTerm, repayment, repaymentsPerYear);
            for (var i = 0; i <= interestOnlyYears * 12; i++) {
                interestOnlyRepayments.push(interestOnlyTermRepayment);
            }

            newLoanTerm = loanTerm - interestOnlyYears;
            newRepayment = calculateRepayment(loanAmount, interestRate, newLoanTerm, repaymentsPerYear);
        }

        // add any extra repayment
        if (repaymentExtra > 0) {
            newRepayment = newRepayment + repaymentExtra;
            newLoanTerm = calculateTerm(newRepayment, loanAmount, interestRate, repaymentsPerYear);
        }

        // remaining principal        
        var principalRepayments = calculateTotalRepayments(interestRate, newLoanTerm, newRepayment, repaymentsPerYear)

        // concat arrays
        repayments = interestOnlyRepayments.concat(principalRepayments);

        // update new totals
        var totalPayable = (newRepayment * newLoanTerm * repaymentsPerYear) + (interestOnlyRepayment * (repaymentsPerYear * interestOnlyYears));
        var totalInterestOnlyPayable = totalPayable - loanAmount;

        document.getElementById('text-repayment-value').textContent = "$" + cleanFloat(newRepayment);
        document.getElementById('text-loan-amount').textContent = "$" + cleanFloat(totalPayable);
        document.getElementById('text-interest-amount').textContent = "$" + cleanFloat(totalInterestOnlyPayable);

        return repayments;
    }

    function calculateInterestRepayment(loanAmount, interestRate, repaymentsPerYear) {
        return ((loanAmount * (interestRate / 100)) / repaymentsPerYear);
    }

    function calculateInterest(repayment, repaymentsPerYear, loanTerm, currentYear) {
        return (repayment * repaymentsPerYear * (loanTerm - currentYear));
    }

    function calculateTerm(repaymentAmount, loanAmount, interestRate, repaymentsPerYear) {

        var m = repaymentAmount;
        var i = interestRate / repaymentsPerYear / 100;
        var B = loanAmount;

        return (-1 * (Math.log(1 - (B / m) * i)) / Math.log(1 + i)) / repaymentsPerYear;
    }


    return <Layout>
        <section className="calculator-section pt_120 pb_120">
            <div className="light-icon float-bob-y" style={{ backgroundImage: `url(${icon1})` }}></div>
            <div className="auto-container">
                <div className="inner-container">
                    <div className="shape" style={{ backgroundImage: `url(${shape3})` }}></div>
                    <div className="row clearfix pb_60" style={{ backgroundColor: "#f6f6f6" }}>
                        <div className="col-lg-12 col-md-12 col-sm-12 content-column" style={{ marginBottom: "-109px" }}>
                            <div className="content_block_two">
                                <div className="content-box">
                                    <div className="sec-title mb_50 text-center">
                                        <h6>Calculator</h6>
                                        <h2 >Home Loan Repayments</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-12 col-md-12 col-sm-12 content-column mt_60">
                            <div className="content_block_two">
                                <div className="content-box"  >
                                    <div className="calculator-inner backgorund">
                                        <div className="form-group modified-form-group" style={{ marginBottom: "0px" }}>
                                            <div>
                                                <h5 className='mb-2' style={{ color: "var(--theme-color)" }}>Your borrowing estimate</h5>
                                                <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", gap: "3px" }}>
                                                    <p className='borrowing-power' onClick={() => navigate('/calculate-borrowing-power')}>Recalculate borrowing power</p><ArrowForwardIcon style={{ fontSize: "17px", color: "var(--theme-color)" }} />
                                                </div>
                                            </div>
                                            <div className="form-group" style={{ marginBottom: "0px" }}>
                                                <div className="monthly-expenses-income" style={{}}>
                                                    <p>Monthly income</p>
                                                    <p>Expenses</p>
                                                    <p>You may borrow up to</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        <div className="col-lg-5 col-md-12 col-sm-12 content-column margin-top">
                            <div className="content_block_two">
                                <div className="content-box" >
                                    <div className="calculator-inner backgorund">
                                        <form id="calculator-repayments-form">
                                            <div className="form-group" style={{ marginTop: "-10px" }}>
                                                <div className="">
                                                    <h6 className='mb-2'>Value of property</h6>
                                                    <div className="modifiedControlGroup">
                                                        <i className="Dollar">$</i>
                                                        <input id="property-value" name="property-value" type="text" className="textModified" value={valueofproperty} onChange={(e) => formatNumberWithCommas(e.target.value, 'valueofproperty')} maxLength={14} onKeyDown={handleKeyPress} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group" style={{ marginTop: "-10px" }}>
                                                <div className="">
                                                    <h6 className='mb-2'>Borrowing</h6>
                                                    <div className="modifiedControlGroup">
                                                        <i className="Dollar">$</i>
                                                        <input id="loan-amount" name="loan-amount" type="text" className="textModified" ref={borrowingRef} value={borrowing} onChange={(e) => formatNumberWithCommas(e.target.value, 'borrowing')} maxLength={14} onKeyDown={handleKeyPress} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group" style={{ marginTop: "-10px" }}>
                                                <div className="">
                                                    <h6 className='mb-2'>Over</h6>
                                                    <div className="modifiedControlGroup">
                                                        <select id="hl-loan-term" name="hl-loan-term" className="textModified" onChange={(e) => setLoanTerm(e.target.value)}>
                                                            <option value="10">10 Years</option>
                                                            <option value="15">15 Years</option>
                                                            <option value="20" selected>20 Years</option>
                                                            <option value="25">25 Years</option>
                                                            <option value="30" >30 Years</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group" style={{ marginTop: "-10px" }}>
                                                <div className="">
                                                    <h6 className='mb-2'>Interest Rate</h6>
                                                    <div className="" >
                                                        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                                            <input type="checkbox" id="option1" value="option1" style={{ width: "35px" }} onChange={(e) => calculateInterestonCheck(e.target.value)} />
                                                            <p style={{ fontSize: "15px", lineHeight: "normal" }}>Use the lowest rate from Amber Loans lender panel</p>
                                                        </div>
                                                        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                                            <input type="checkbox" id="option2" value="option2" style={{ width: "35px" }} onChange={(e) => calculateInterestonCheck(e.target.value)} />
                                                            <p style={{ fontSize: "15px" }}>Input rate</p>
                                                        </div>
                                                    </div>
                                                    <div className="modifiedControlGroup">
                                                        <i className="Dollar">%</i>
                                                        <input id="hl-interest-rate" name="hl-interest-rate" type="text" className="textModified" ref={interestRef} value={interestrate} onChange={(e) => setinterestrate(e.target.value)} maxLength={6} onKeyDown={handleKeyPress} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group" style={{ marginTop: "-10px" }}>
                                                <div className="">
                                                    <h6 className='mb-2'>Repayment options</h6>
                                                    <div className="modifiedControlGroup">
                                                        <select id="repayment-option" name="repayment-option" className="textModified" onChange={(e) => SetInterestOnlyYears(e.target.value)}>
                                                            <option value="0" selected>Principal and interest</option>
                                                            <option value="1">Interest only 1 year</option>
                                                            <option value="2">Interest only 2 years</option>
                                                            <option value="3">Interest only 3 years</option>
                                                            <option value="4">Interest only 4 years</option>
                                                            <option value="5">Interest only 5 years</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <input id="repayment-frequency" value="12" type="hidden" />
                                            <div className="form-group" style={{ marginTop: "-10px" }}>
                                                <div className="">
                                                    <h6 className='mb-2'>Extra monthly repayments</h6>
                                                    <div className="modifiedControlGroup">
                                                        <i className="Dollar">$</i>
                                                        <input id="repayment-extra" name="repayment-extra" type="text" className="textModified" value={ExtraPayment} onChange={(e) => formatNumberWithCommas(e.target.value, 'ExtraPayment')} maxLength={14} onKeyDown={handleKeyPress} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group d-flex">
                                                <input id="state" type="hidden" />
                                                {/* <input type="submit" value="Calculate" className="theme-btn btn-one mr_20" onClick={() => calculateEMI(principle, interest, years)} /> */}
                                                <input id="repayment-calculate" type="button" value="Calculate" className="theme-btn btn-one mr_20" onClick={(event) => calculateRepayments(event, true)} />
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 col-sm-12 content-column margin-top" style={{ backgroundColor: "#f6f6f6" }}>
                            <div className="content_block_two">
                                <div className="content-box ">
                                    <div className="calculator-inner">
                                        <div className="borrow_result">
                                            <div className="borrow_result_child">
                                                <p>Your <span id="text-repayment-frequency">monthly</span> repayments</p>
                                                {/* <h3><span className="text-repayment-value"></span>  $ {NewEMI}</h3> */}
                                                <h3><span id="text-repayment-value"></span>  </h3>
                                            </div>
                                            <div className="borrow_result_child">
                                                <p>Total loan repayments:</p>
                                                {/* <h3>$ {TotalLoanRepayment} </h3> */}
                                                <h3><span id="text-loan-amount"></span>  </h3>
                                            </div>
                                            <div className="borrow_result_child">
                                                <p>Total interest charged:</p>
                                                {/* <h3>$ {TotalInterestPaid} </h3> */}
                                                <h3><span id="text-interest-amount"></span>  </h3>
                                            </div>
                                        </div>
                                        <br></br>
                                        <br></br>
                                        <p>Based on 5.54% standard variable rate over 20 years.</p>
                                    </div>
                                    <br></br>
                                    <div className="Advertise">
                                        <div className="Advertise_Detail">
                                            <h4>
                                                There's a lot to consider when choosing the right loan.
                                            </h4>
                                            <Contactus btn1="btn-three" />

                                        </div>
                                    </div>
                                    <br></br>
                                    <p style={{ textAlign: "justify", fontSize:"13px" }}>The lowest interest rate from our lender panel is either standard variable or 3-year fixed for an owner-occupier. Rates and repayments are indicative and subject to change. The results from this calculator are an approximate guide only and do not constitute specialist advice. The calculations used should not be relied upon for the purposes of entering into any legal or financial commitments.</p>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    </Layout>
}

export default New_HomeLoanRepayments;
