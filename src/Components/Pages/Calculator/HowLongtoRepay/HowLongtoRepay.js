import React, { useEffect, useState } from "react";
import './HowLongtoRepay.css';
import Layout from "../../../Layout";

import icon1 from '../../../../assets/images/icons/icon-1.png';
import shape3 from '../../../../assets/images/shape/shape-3.png';
import { useNavigate } from "react-router-dom";
import PrintIcon from '@mui/icons-material/Print';
import { handleKeyPress, removeCommasAndConcatenate } from "../Helper";

function HowLongtoRepay() {
    const navigate = useNavigate();

    //Input Values
    const [loanAmount, setloanAmount] = useState("350000".toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    const [interestRate, setinterestRate] = useState("6.0");
    const [repayments, setrepayments] = useState("2500".toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    const [repaymentsTime, setrepaymentsTime] = useState("Monthly");

    //OutPut Values
    const [LoanTerm, setLoanTerm] = useState("");
    const [totalCost, settotalCost] = useState("");
    const [totalInterestPaid, settotalInterestPaid] = useState("");


    function formatNumberWithCommas(number, incometype) {
        let numberString = number.toString().replace(/,/g, '');

        if (incometype == "loanAmount") {
            setloanAmount(numberString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        }
        else if (incometype == "interestRate") {
            setinterestRate(numberString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        }
        else if (incometype == "repayments") {
            setrepayments(numberString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        }
    }

    // function Weekly_CalculateLoanDetails(loanAmount, interestRate, weeklyRepayment) {
    //     debugger;
    //     // Convert interest rate to monthly rate
    //     const monthlyInterestRate = (interestRate / 100) / 12;

    //     // Calculate monthly repayment
    //     const monthlyRepayment = weeklyRepayment * 4;

    //     let remainingPrincipal = loanAmount;
    //     let totalMonths = 0;
    //     let totalInterestPaid = 0;

    //     while (remainingPrincipal > 0) {
    //         let monthlyInterest = remainingPrincipal * monthlyInterestRate;
    //         let principalPaid = monthlyRepayment - monthlyInterest;

    //         if (principalPaid < 0) {
    //             // If principal payment would be negative, adjust it to avoid overpayment
    //             principalPaid = 0;
    //         }

    //         remainingPrincipal -= principalPaid;
    //         totalInterestPaid += monthlyInterest;
    //         totalMonths++;
    //     }
    //     debugger
    //     // Calculate loan term in years and months
    //     const loanTermYears = Math.floor(totalMonths / 12);
    //     const loanTermMonths = totalMonths % 12;

    //     // Calculate total cost of loan
    //     const totalCost = (monthlyRepayment * totalMonths) - loanAmount;

    //     return {
    //         loanTermYears,
    //         loanTermMonths,
    //         loanTerm: `${loanTermYears} Years ${loanTermMonths} Months`,
    //         totalCost: totalCost.toFixed(2),
    //         totalInterestPaid: totalInterestPaid.toFixed(2)
    //     };
    // }

    // function Weekly_CalculateLoanDetails(loanAmount, interestRate, weeklyRepayment) {
    //     // Convert interest rate to monthly rate
    //     const monthlyInterestRate = (interestRate / 100) / 12;

    //     // Calculate monthly repayment
    //     const monthlyRepayment = weeklyRepayment * 4; // Assuming 4 weeks in a month

    //     let remainingPrincipal = loanAmount;
    //     let totalMonths = 0;
    //     let totalInterestPaid = 0;

    //     while (remainingPrincipal > 0) {
    //         let monthlyInterest = remainingPrincipal * monthlyInterestRate;
    //         let principalPaid = monthlyRepayment - monthlyInterest;

    //         if (principalPaid < 0) {
    //             // If principal payment would be negative, adjust it to avoid overpayment
    //             principalPaid = 0;
    //         }

    //         remainingPrincipal -= principalPaid;
    //         totalInterestPaid += monthlyInterest;
    //         totalMonths++;
    //     }

    //     // Calculate loan term in years and months
    //     const years = Math.floor(totalMonths / 12);
    //     const months = totalMonths % 12;

    //     // Calculate total cost of loan
    //     const totalCost = (monthlyRepayment * totalMonths) - loanAmount;

    //     return {
    //         loanTermYears: `${years} Years ${months} Months`,
    //         totalCost: totalCost.toFixed(2),
    //         totalInterestPaid: totalInterestPaid.toFixed(2)
    //     };
    // }

    function Weekly_CalculateLoanDetails(loanAmount, interestRate, weeklyRepayment) {
        // Convert interest rate to monthly rate
        const monthlyInterestRate = (interestRate / 100) / 12;

        // Calculate monthly repayment
        const monthlyRepayment = weeklyRepayment * 4;

        let remainingPrincipal = loanAmount;
        let totalMonths = 0;
        let totalInterestPaid = 0;

        while (remainingPrincipal > 0) {
            let monthlyInterest = remainingPrincipal * monthlyInterestRate;
            let principalPaid = monthlyRepayment - monthlyInterest;

            if (principalPaid < 0) {
                // If principal payment would be negative, adjust it to avoid overpayment
                principalPaid = 0;
            }

            remainingPrincipal -= principalPaid;
            totalInterestPaid += monthlyInterest;
            totalMonths++;
        }

        // Calculate loan term in years and months
        const years = Math.floor(totalMonths / 12);
        const months = totalMonths % 12;

        // Calculate total cost of loan
        const totalCost = parseInt(loanAmount) + totalInterestPaid;

        return {
            loanTermYears: `${years} Years ${months} Months`,
            totalCost: totalCost.toFixed(2),
            totalInterestPaid: totalInterestPaid.toFixed(2)
        };
    }

    function Monthly_calculateLoanDetails(loanAmount, interestRate, monthlyRepayment) {
        debugger;
        // Convert interest rate to monthly rate
        const monthlyInterestRate = (interestRate / 100) / 12;

        let remainingPrincipal = loanAmount;
        let totalMonths = 0;
        let totalInterestPaid = 0;

        while (remainingPrincipal >= 0) {
            debugger
            let monthlyInterest = remainingPrincipal * monthlyInterestRate;
            let principalPaid = monthlyRepayment - monthlyInterest;

            if (principalPaid < 0) {
                // If principal payment would be negative, adjust it to avoid overpayment
                principalPaid = 0;
            }

            remainingPrincipal -= principalPaid;
            totalInterestPaid += monthlyInterest;
            totalMonths++;
        }

        // Calculate loan term in years and months
        const years = Math.floor(totalMonths / 12);
        const months = totalMonths % 12;

        // Calculate total cost of loan
        const totalCost = (monthlyRepayment * totalMonths);

        return {
            loanTermYears: `${years} Years ${months} Months`,
            totalCost: totalCost.toFixed(2),
            totalInterestPaid: totalInterestPaid.toFixed(2)
        };
    }

    function Fortnightly_calculateLoanDetails(loanAmount, interestRate, fortnightlyRepayment) {
        // Convert interest rate to monthly rate
        const monthlyInterestRate = (interestRate / 100) / 12;

        // Calculate monthly repayment
        const monthlyRepayment = fortnightlyRepayment * 2;

        let remainingPrincipal = loanAmount;
        let totalMonths = 0;
        let totalInterestPaid = 0;

        while (remainingPrincipal > 0) {
            let monthlyInterest = remainingPrincipal * monthlyInterestRate;
            let principalPaid = monthlyRepayment - monthlyInterest;

            if (principalPaid < 0) {
                // If principal payment would be negative, adjust it to avoid overpayment
                principalPaid = 0;
            }

            remainingPrincipal -= principalPaid;
            totalInterestPaid += monthlyInterest;
            totalMonths++;
        }

        // Calculate loan term in years and months
        const years = Math.floor(totalMonths / 12);
        const months = totalMonths % 12;

        // Calculate total cost of loan (assuming no errors in calculation)
        const totalCost = parseFloat(loanAmount) + parseFloat(totalInterestPaid);

        // Optional Early Return (if applicable)
        if (isNaN(totalCost)) {
            return {
                error: "Error calculating total cost"
            };
        }

        return {
            loanTermYears: `${years} Years ${months} Months`,
            totalCost: parseFloat(totalCost).toFixed(2),
            totalInterestPaid: totalInterestPaid.toFixed(2)
        };
    }

    function FortinightlycalculateLoanRepayment(loanAmount, interestRate, fortnightlyRepayment) {
        debugger;
        // Convert interest rate to decimal per fortnight
        const fortnightlyInterestRate = (interestRate / 100) / 26;

        // Calculate monthly payment (assuming 2 fortnights per month)
        const monthlyPayment = fortnightlyRepayment * 2;

        // Calculate monthly interest rate
        const monthlyInterestRate = fortnightlyInterestRate * 2;

        // Calculate number of months to repay
        let numMonths = 0;
        let remainingBalance = loanAmount;

        while (remainingBalance > 0) {
            debugger
            let monthlyInterest = remainingBalance * monthlyInterestRate;
            remainingBalance = remainingBalance + monthlyInterest - monthlyPayment;
            numMonths++;
        }
        debugger
        // Calculate loan term in years and months
        const years = Math.floor(numMonths / 12);
        const months = numMonths % 12;

        // Calculate total cost of loan
        const totalCost = monthlyPayment * numMonths;

        // Calculate total interest payable
        const totalInterest = totalCost - loanAmount;

        return {
            loanTerm: `${years} years ${months} months`,
            totalCost: totalCost.toFixed(2),
            totalInterest: totalInterest.toFixed(2)
        };
    }


    function CalCulateRepaymentTime() {
        if (repaymentsTime === "Weekly") {
            const results = Weekly_CalculateLoanDetails(removeCommasAndConcatenate(loanAmount), interestRate, removeCommasAndConcatenate(repayments));

            setLoanTerm(results.loanTermYears);
            settotalCost(results.totalCost);
            settotalInterestPaid(results.totalInterestPaid);
        }
        else if (repaymentsTime === "Fortnightly") {

            const results = Fortnightly_calculateLoanDetails(removeCommasAndConcatenate(loanAmount), interestRate, removeCommasAndConcatenate(repayments));

            setLoanTerm(results.loanTermYears);
            settotalCost(results.totalCost);
            settotalInterestPaid(results.totalInterestPaid);

            // const results = FortinightlycalculateLoanRepayment(removeCommasAndConcatenate(loanAmount), interestRate, removeCommasAndConcatenate(repayments));

            // setLoanTerm(results.loanTerm);
            // settotalCost(results.totalCost);
            // settotalInterestPaid(results.totalInterest);
        }
        else if (repaymentsTime === "Monthly") {
            const results = Monthly_calculateLoanDetails(removeCommasAndConcatenate(loanAmount), interestRate, removeCommasAndConcatenate(repayments));

            setLoanTerm(results.loanTermYears);
            settotalCost(results.totalCost);
            settotalInterestPaid(results.totalInterestPaid);


        }
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
                                        <h2 >How long to repay?</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12 content-column margin-top">
                            <div className="content_block_two">
                                <div className="content-box" >
                                    <div className="calculator-inner backgorund">
                                        <form id="loan-form">
                                            <h3 className="mb_40">1. Your Details</h3>
                                            <div className="form-group" style={{ marginTop: "-10px" }}>
                                                <div className="">
                                                    <h6 className='mb-2'>Loan amount</h6>
                                                    <div className="modifiedControlGroup">
                                                        <i className="Dollar">$</i>
                                                        <input type="text" className="textModified" value={loanAmount} name="loanAmount" maxLength={10} onKeyDown={handleKeyPress} onChange={(e) => formatNumberWithCommas(e.target.value, 'loanAmount')} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group" style={{ marginTop: "-10px" }}>
                                                <div className="">
                                                    <h6 className='mb-2'>Interest rate</h6>
                                                    <div className="modifiedControlGroup">
                                                        <i className="Dollar">%</i>
                                                        <input type="text" className="textModified" value={interestRate} name="interestRate" maxLength={5} onKeyDown={handleKeyPress} onChange={(e) => formatNumberWithCommas(e.target.value, 'interestRate')} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group" style={{ marginTop: "-10px" }}>
                                                <div className="">
                                                    <h6 className='mb-2'>Repayments</h6>
                                                    <div className="modifiedControlGroup">
                                                        <select id="selectTime" className="textModified" onChange={(e) => setrepaymentsTime(e.target.value)}>
                                                            <option selected value="Monthly">Monthly</option>
                                                            <option value="Fortnightly">Fortnightly</option>
                                                            <option value="Weekly">Weekly</option>
                                                        </select>
                                                        <div className="modifiedControlGroup">
                                                            <i className="Dollar">$</i>
                                                            <input type="text" className="textModified" value={repayments} name="repayments" maxLength={10} onKeyDown={handleKeyPress} onChange={(e) => formatNumberWithCommas(e.target.value, 'repayments')} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group d-flex">
                                                {/* <input type="submit" value="Calculate" className="theme-btn btn-one mr_20" onClick={() => calculateEMI(principle, interest, years)} /> */}
                                                <input type="button" value="Calculate" className="theme-btn btn-one mr_20" onClick={() => CalCulateRepaymentTime()} />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column margin-top_Child">
                            <div className="content_block_two">
                                <div className="content-box" >
                                    <div className="calculator-inner backgorund">
                                        <div id="loan-form">
                                            <h3 className="mb_40">2. Results</h3>
                                            <div className="form-group" style={{ marginTop: "-10px" }}>
                                                <div className="">
                                                    <h6 className='mb-2'>Loan term</h6>
                                                    <div className="modifiedControlGroup">
                                                        <h5 style={{ color: "var(--theme-color)" }}>{LoanTerm}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group" >
                                                <div className="">
                                                    <h6 className='mb-2'>Total cost of loan</h6>
                                                    <div className="modifiedControlGroup">
                                                        <h5 style={{ color: "var(--theme-color)" }}>$ {totalCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group" >
                                                <div className="">
                                                    <h6 className='mb-2'>Total interest payable</h6>
                                                    <div className="modifiedControlGroup">
                                                        <h5 style={{ color: "var(--theme-color)" }}>$ {totalInterestPaid.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group" >
                                                <div className="">
                                                    <p style={{ color: "var(--theme-color)" }} className='mb-2'><PrintIcon /> Print results</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    </Layout>
}

export default HowLongtoRepay;
