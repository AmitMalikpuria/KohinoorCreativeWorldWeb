import React, { useEffect, useState, useRef } from "react";
import './HomeLoanRepayment.css'
import Layout from "../../../Layout";
import icon1 from '../../../../assets/images/icons/icon-1.png';
import shape3 from '../../../../assets/images/shape/shape-3.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";

function HomeLoanRepayment() {

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


    const [originalEMI, setOriginalEMI] = useState("0")
    const [NewEMI, setNewEMI] = useState("0")
    const [TotalInterestPaid, setTotalInterestPaid] = useState("0")
    const [TotalPrincipalPaid, setTotalPrincipalPaid] = useState("0")
    const [TotalLoanRepayment, setTotalLoanRepayment] = useState("0")
    const [RepaymentSchedule, setRepaymentSchedule] = useState("0")

    // function calculateLoanRepayment(principal, interestRate, loanTerm, extraPayment) {
    //     const IR = parseFloat(interestRate);
    //     const P = parseFloat(principal);
    //     const LT = parseFloat(loanTerm);
    //     const EP = parseFloat(extraPayment);

    //     // Convert interest rate to monthly rate
    //     const monthlyInterestRate = IR / 12 / 100;

    //     // Calculate number of months
    //     const totalMonths = LT * 12;

    //     // Calculate original EMI
    //     const originalEMI = (P * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths)) / 
    //                         (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);

    //     // Calculate new EMI with extra payment
    //     const newEMI = originalEMI + EP;

    //     // Initialize variables to track principal and interest paid
    //     let remainingPrincipal = P;
    //     let totalInterestPaid = 0;
    //     let totalPrincipalPaid = 0;

    //     // Array to store monthly repayment details (optional)
    //     let repaymentSchedule = [];

    //     // Calculate monthly repayments and update remaining principal
    //     for (let month = 1; month <= totalMonths; month++) {
    //       let interestPaid = remainingPrincipal * monthlyInterestRate;
    //       let principalPaid = newEMI - interestPaid;

    //       // Ensure principalPaid doesn't exceed remainingPrincipal
    //       if (principalPaid > remainingPrincipal) {
    //         principalPaid = remainingPrincipal;
    //       }

    //       remainingPrincipal -= principalPaid;

    //       totalInterestPaid += interestPaid;
    //       totalPrincipalPaid += principalPaid;

    //       // Store monthly repayment details
    //       repaymentSchedule.push({
    //         month,
    //         interestPaid,
    //         principalPaid,
    //         remainingPrincipal
    //       });

    //       // Check if the loan is fully paid off
    //       if (remainingPrincipal <= 0) {
    //         break; // Exit the loop if the loan is paid off early
    //       }
    //     }

    //     // Calculate total loan repayment 
    //     const totalLoanRepayment = totalPrincipalPaid + totalInterestPaid; 

    //     return {
    //       originalEMI: originalEMI.toFixed(2), 
    //       newEMI: newEMI.toFixed(2),
    //       totalInterestPaid: totalInterestPaid.toFixed(2),
    //       totalPrincipalPaid: totalPrincipalPaid.toFixed(2),
    //       totalLoanRepayment: totalLoanRepayment.toFixed(2), 
    //       repaymentSchedule 
    //     };
    //   }

    function calculateLoanRepayment(principal, interestRate, loanTerm, extraPayment, interestOnlyYears) {
        const IR = parseFloat(interestRate);
        const P = parseFloat(principal);
        const LT = parseFloat(loanTerm);
        const EP = parseFloat(extraPayment);

        // Convert interest rate to monthly rate
        const monthlyInterestRate = IR / 12 / 100;

        // Calculate number of months
        const totalMonths = LT * 12;

        // Calculate original EMI
        const originalEMI = (P * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths)) /
            (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);

        // Calculate new EMI with extra payment
        const newEMI = originalEMI + EP;

        // Initialize variables to track principal and interest paid
        let remainingPrincipal = P;
        let totalInterestPaid = 0;
        let totalPrincipalPaid = 0;

        // Array to store monthly repayment details (optional)
        let repaymentSchedule = [];

        // Calculate monthly repayments and update remaining principal
        for (let month = 1; month <= totalMonths; month++) {
            let interestPaid = remainingPrincipal * monthlyInterestRate;
            let principalPaid = newEMI - interestPaid;

            // Handle "Interest Only" period
            if (month <= interestOnlyYears * 12) {
                principalPaid = 0;
            }

            // Ensure principalPaid doesn't exceed remainingPrincipal
            if (principalPaid > remainingPrincipal) {
                principalPaid = remainingPrincipal;
            }

            remainingPrincipal -= principalPaid;

            totalInterestPaid += interestPaid;
            totalPrincipalPaid += principalPaid;

            // Store monthly repayment details
            repaymentSchedule.push({
                month,
                interestPaid,
                principalPaid,
                remainingPrincipal
            });

            // Check if the loan is fully paid off
            if (remainingPrincipal <= 0) {
                break; // Exit the loop if the loan is paid off early
            }
        }

        return {
            originalEMI: originalEMI.toFixed(2),
            newEMI: newEMI.toFixed(2),
            totalInterestPaid: totalInterestPaid.toFixed(2),
            totalPrincipalPaid: totalPrincipalPaid.toFixed(2),
            repaymentSchedule
        };
    }



    function handleKeyPress(event) {
        // Your logic to handle key presses (e.g., allow only numbers)
        if (!/^[0-9.]$/.test(event.key) && event.key !== "Backspace" && event.key !== "Delete") {
            event.preventDefault();
        }
    }


    function cleanFloat(input) {
        if (input < 0) { return 0; }
        return parseInt(input).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


    function calculateInterest(value) {
        const interestInput = document.getElementById("interest");

        if (value === 'option1') {
            interestInput.disabled = true;
            document.getElementById("option1").checked = true;
            document.getElementById("option2").checked = false;
            setinterestrate('5.54');
        } else if (value === 'option2') {
            interestInput.disabled = false;
            document.getElementById("option1").checked = false;
            document.getElementById("option2").checked = true;
            setinterestrate(''); // Assuming you want to clear the input when option2 is selected
        }
    }

    function removeCommasAndConcatenate(str) {
        return str.replace(/,/g, '');
    }



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

            setExtraPayment(numberString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") == "" ? "0" : numberString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        }
    }

    function getBorrowfor(btntype) {

        const justme = document.getElementById("justme");
        const twoofus = document.getElementById("twoofus");

        if (btntype == justme.id) {
            justme.classList.add('btnactive');
            justme.classList.remove('btnnotactive');

            twoofus.classList.remove('btnactive');
            twoofus.classList.add('btnnotactive');
        }

        if (btntype == twoofus.id) {
            twoofus.classList.add('btnactive');
            twoofus.classList.remove('btnnotactive');

            justme.classList.remove('btnactive');
            justme.classList.add('btnnotactive');
        }
    }

    function selfemployedornot(btntype) {

        const payz = document.getElementById("payz");
        const selfemployed = document.getElementById("selfemployed");

        if (btntype == payz.id) {
            payz.classList.add('btnactive');
            payz.classList.remove('btnnotactive');

            selfemployed.classList.remove('btnactive');
            selfemployed.classList.add('btnnotactive');
        }

        if (btntype == selfemployed.id) {
            selfemployed.classList.add('btnactive');
            selfemployed.classList.remove('btnnotactive');

            payz.classList.remove('btnactive');
            payz.classList.add('btnnotactive');
        }
    }

    function getBeforeDecimal(floatValue) {
        const [integerPart] = floatValue.toString().split(".");
        return parseInt(integerPart);
    }

    function CalculationFinal() {
        debugger
        if (parseInt(borrowing) > parseInt(valueofproperty)) {
            borrowingRef.current.focus();
            alert("Value of property must be greater than borrowing");
            return false;
        }
        if (parseInt(interestrate) <= 0 || interestrate == "") {
            interestRef.current.focus();
            alert("enter interest rate to calculate");
            return false;
        }



        const result = calculateLoanRepayment(removeCommasAndConcatenate(borrowing), removeCommasAndConcatenate(interestrate), removeCommasAndConcatenate(LoanTerm), removeCommasAndConcatenate(ExtraPayment), parseInt(InterestOnlyYears));
        setOriginalEMI(getBeforeDecimal(result.originalEMI).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        setNewEMI(getBeforeDecimal(result.newEMI).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        setTotalInterestPaid(getBeforeDecimal(result.totalInterestPaid).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        setTotalPrincipalPaid(getBeforeDecimal(result.totalPrincipalPaid).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        setTotalLoanRepayment((getBeforeDecimal(result.totalInterestPaid) + getBeforeDecimal(result.totalPrincipalPaid)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        setRepaymentSchedule(result.repaymentSchedule);



        // const repayment = calculateRepayment(removeCommasAndConcatenate(borrowing), interestrate, LoanTerm, Math.round(parseInt(result.originalEMI)) * 12);

        //calculateOptionRepayments(InterestOnlyYears, interestrate, LoanTerm, getBeforeDecimal(result.originalEMI), ExtraPayment, getBeforeDecimal(result.newEMI) * 12, removeCommasAndConcatenate(borrowing))
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
                                        <form id="loan-form">
                                            <div className="form-group" style={{ marginTop: "-10px" }}>
                                                <div className="">
                                                    <h6 className='mb-2'>Value of property</h6>
                                                    <div className="modifiedControlGroup">
                                                        <i className="Dollar">$</i>
                                                        <input type="text" className="textModified" value={valueofproperty} name="valueofproperty" onChange={(e) => formatNumberWithCommas(e.target.value, 'valueofproperty')} maxLength={14} onKeyDown={handleKeyPress} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group" style={{ marginTop: "-10px" }}>
                                                <div className="">
                                                    <h6 className='mb-2'>Borrowing</h6>
                                                    <div className="modifiedControlGroup">
                                                        <i className="Dollar">$</i>
                                                        <input type="text" className="textModified" ref={borrowingRef} value={borrowing} name="borrowing" onChange={(e) => formatNumberWithCommas(e.target.value, 'borrowing')} maxLength={14} onKeyDown={handleKeyPress} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group" style={{ marginTop: "-10px" }}>
                                                <div className="">
                                                    <h6 className='mb-2'>Over</h6>
                                                    <div className="modifiedControlGroup">
                                                        <select id="selectTime" className="textModified" onChange={(e) => setLoanTerm(e.target.value)}>
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
                                                            <input type="checkbox" id="option1" value="option1" style={{ width: "45px" }} checked onChange={(e) => calculateInterest(e.target.value)} />
                                                            <p style={{ fontSize: "15px", lineHeight: "normal" }}>Use the lowest rate from Amber Loans lender panel</p>
                                                        </div>
                                                        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                                            <input type="checkbox" id="option2" value="option2" style={{ width: "35px" }} onChange={(e) => calculateInterest(e.target.value)} />
                                                            <p style={{ fontSize: "15px" }}>Input rate</p>
                                                        </div>
                                                    </div>
                                                    <div className="modifiedControlGroup">
                                                        <i className="Dollar">%</i>
                                                        <input id="interest" type="text" className="textModified" ref={interestRef} value={interestrate} name="interestrate" onChange={(e) => setinterestrate(e.target.value)} maxLength={6} onKeyDown={handleKeyPress} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group" style={{ marginTop: "-10px" }}>
                                                <div className="">
                                                    <h6 className='mb-2'>Repayment options</h6>
                                                    <div className="modifiedControlGroup">
                                                        <select id="selectTime" className="textModified" onChange={(e) => SetInterestOnlyYears(e.target.value)}>
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
                                            <div className="form-group" style={{ marginTop: "-10px" }}>
                                                <div className="">
                                                    <h6 className='mb-2'>Extra monthly repayments</h6>
                                                    <div className="modifiedControlGroup">
                                                        <i className="Dollar">$</i>
                                                        <input type="text" className="textModified" value={ExtraPayment} name="ExtraPayment" onChange={(e) => formatNumberWithCommas(e.target.value, 'ExtraPayment')} maxLength={14} onKeyDown={handleKeyPress} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group d-flex">
                                                {/* <input type="submit" value="Calculate" className="theme-btn btn-one mr_20" onClick={() => calculateEMI(principle, interest, years)} /> */}
                                                <input type="button" value="Update" className="theme-btn btn-one mr_20" onClick={() => CalculationFinal()} />
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 col-sm-12 content-column margin-top" style={{ backgroundColor: "#f6f6f6" }}>
                            <div className="content_block_two">
                                <div className="content-box " >
                                    <div className="calculator-inner">
                                        <div className="borrow_result">
                                            <div className="borrow_result_child">
                                                <p>Your monthly repayments</p>
                                                <h3> $ {NewEMI}</h3>
                                            </div>
                                            <div className="borrow_result_child">
                                                <p>Total loan repayments:</p>
                                                <h3>$ {TotalLoanRepayment} </h3>
                                            </div>
                                            <div className="borrow_result_child">
                                                <p>Total interest charged:</p>
                                                <h3>$ {TotalInterestPaid} </h3>
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
                                            <button type="button"> Talk to a broker</button>
                                        </div>
                                    </div>
                                    <br></br>
                                    <p style={{ textAlign: "justify" }}>The lowest interest rate from our lender panel is either standard variable or 3-year fixed for an owner-occupier. Rates and repayments are indicative and subject to change. The results from this calculator are an approximate guide only and do not constitute specialist advice. The calculations used should not be relied upon for the purposes of entering into any legal or financial commitments.</p>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    </Layout>
}

export default HomeLoanRepayment;
