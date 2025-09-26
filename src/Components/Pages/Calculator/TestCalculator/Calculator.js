import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
//import Chart from 'chart.js/auto';
import './Calculator.css'
import icon1 from '../../../../assets/images/icons/icon-1.png';
import shape3 from '../../../../assets/images/shape/shape-3.png';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Layout from "../../../Layout";
import { AddCommas, removeCommasAndConcatenate } from "../Helper";
import { useSnackbar } from "notistack";

ChartJS.register(ArcElement, Tooltip, Legend);

function Calculator(props) {

    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const principleref = useRef();
    const interestref = useRef();
    const yearsref = useRef();

    const [needloanfor, setNeedLoanFor] = useState((props.Title));
    const [principle, setPrinciple] = useState(AddCommas("350000"));
    const [interest, setInterest] = useState("5.54");
    const [years, setYears] = useState("5");
    const [emi, setEmi] = useState(Number);
    const [totalAmount, setTotalAmount] = useState(Number);
    const [interestPaid, setInterestPaid] = useState(Number);

    const calculateEMI = (principal, annualRate, tenureYears) => {
        debugger
        if (principle.length < 2 || principle == "0" || principle == "") {
            principleref.current.focus();
            enqueueSnackbar("enter loan amount", { variant: "warning" });
            return false
        }
        if (interest == "0" || interest == "") {
            interestref.current.focus();
            enqueueSnackbar("enter interest rate", { variant: "warning" });
            return false
        }
        if (years == "0" || years == "") {
            yearsref.current.focus();
            enqueueSnackbar("enter years", { variant: "warning" });
            return false
        }

        const monthlyRate = (annualRate / 100) / 12;
        const totalMonths = tenureYears * 12;
        const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
        const totalPaidAmount = Math.round(emi * totalMonths)
        setEmi(AddCommas(Math.round(emi)));
        setTotalAmount(AddCommas(totalPaidAmount));
        setInterestPaid(AddCommas(Math.round(totalPaidAmount - principal)));
    }

    const ResetFeilds = () => {
        setPrinciple(AddCommas("350000"));
        setInterest("5.54");
        setYears("5");
        setEmi(0);
        setTotalAmount(0);
        setInterestPaid(0);
    }

    const HandleChangeMethodForLoan = (value) => {

        setNeedLoanFor(value);

        if (value === "car") {

            navigate("/calculate-car-loan")
        }
        else if (value === "personal") {
            navigate("/calculate-personal-loan")
        }
    }

    const data = {
        labels: ['Principle', 'Interest'],
        datasets: [
            {
                label: 'Paid $',
                data: [parseInt(removeCommasAndConcatenate(principle)), parseInt(removeCommasAndConcatenate(interestPaid))],
                backgroundColor: [

                    '#7dd856',
                    '#0a0f20',
                ],
                borderColor: [

                    '#7dd856',
                    '#0a0f20',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
    };


    return <Layout>
        <section className="calculator-section pt_120 pb_120">
            <div className="light-icon float-bob-y" style={{ backgroundImage: `url(${icon1})` }}></div>
            <div className="auto-container">
                <div className="inner-container">
                    <div className="shape" style={{ backgroundImage: `url(${shape3})` }}></div>
                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12 content-column" style={{ marginBottom: "-109px" }}>
                            <div className="content_block_two">
                                <div className="content-box">
                                    <div className="sec-title mb_50 text-center">
                                        <h6>{props.Title} Loan</h6>
                                        <h2>Calculate {props.Title} Loan EMI </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<div className="col-lg-5 col-md-12 col-sm-12 content-column">
                        <div className="content_block_two">
                            <div className="content-box">
                                <div className="calculator-inner">
                                    <div class="calculator">
                                        <div class="input-group">
                                            <label for="property-value">Property Value:</label>
                                            <input type="number" id="property-value" placeholder="$650,000" />
                                        </div>
                                        <div class="input-group">
                                            <label for="borrowing-amount">Borrowing Amount:</label>
                                            <input type="number" id="borrowing-amount" placeholder="$600,000" />
                                        </div>
                                        <div class="input-group">
                                            <label for="loan-term">Loan Term (years):</label>
                                            <input type="number" id="loan-term" placeholder="30" />
                                        </div>
                                        <div class="input-group">
                                            <label for="interest-rate">Interest Rate:</label>
                                            <input type="number" id="interest-rate" placeholder="5.54" />
                                        </div>

                                        <button id="calculate">Calculate</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div> */}

                        <div className="col-lg-4 col-md-12 col-sm-12 content-column margin-top">
                            <div className="content_block_two">
                                <div className="content-box">
                                    {/* <div className="sec-title mb_50">
                                        <h6>Calculate {props.Title} Loan</h6>
                                        <h2>EMI Calculator</h2>
                                    </div> */}
                                    <div className="calculator-inner">
                                        <form id="loan-form">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <h6 className='mb-2'>I need loan for</h6>
                                                    <select value={needloanfor.toLowerCase()} onChange={(e) => HandleChangeMethodForLoan(e.target.value)} style={{ width: "100%", height: "45px", padding: "8px", paddingLeft: "20px", border: "1px solid #ccc", borderRadius: "3px" }}>
                                                        <option value="car">Car</option>
                                                        <option value="personal">Personal</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <h6 className='mb-2'>Loan Amount ($)</h6>
                                                    <input id="amount" placeholder="Loan amount" ref={principleref} value={principle} onChange={(e) => setPrinciple(AddCommas(e.target.value))} />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <h6 className='mb-2'>Years</h6>
                                                <select ref={yearsref} value={years} onChange={(e) => setYears(e.target.value)} style={{ width: "100%", height: "45px", padding: "8px", paddingLeft: "20px", border: "1px solid #ccc", borderRadius: "3px" }}>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                </select>
                                                {/* <input id="years" placeholder="Number of Years" ref={yearsref} value={years} onChange={(e) => setYears(e.target.value)} /> */}
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <h6 className='mb-2'>Interest</h6>
                                                    <input id="interest" placeholder="Interest rate" ref={interestref} value={interest} onChange={(e) => setInterest(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="form-group d-flex">
                                                {/* <input type="submit" value="Calculate" className="theme-btn btn-one mr_20" onClick={() => calculateEMI(principle, interest, years)} /> */}
                                                <input type="button" value="Calculate" className="theme-btn btn-one mr_20" onClick={() => calculateEMI(parseInt(removeCommasAndConcatenate(principle)), parseFloat(removeCommasAndConcatenate(interest)), parseInt(removeCommasAndConcatenate(years)))} />
                                                <input type="button" value="Reset Data" style={{ color: "var(--theme-color) !important" }} className="reset-btn" onClick={() => ResetFeilds()} />
                                            </div>
                                        </form>
                                        <div id="results">
                                            <div className="form-group none">
                                                <div className="input-group">
                                                    <h6 className='mb-2'>Monthly Installment ($)</h6>
                                                    <input type="number" placeholder="Monthly Installment is" id="monthly-payment" value={emi} disabled />
                                                </div>
                                            </div>
                                            <div className="form-group none">
                                                <div className="input-group">
                                                    <input type="number" id="total-payment" disabled />
                                                </div>
                                            </div>
                                            <div className="form-group none">
                                                <div className="input-group">
                                                    <input type="number" id="total-interest" disabled />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 content-column margin-top">
                            <div className="content_block_two">
                                <div className="content-box" style={{ padding: "80px 77px 50px 15px" }}>
                                    <div className="calculator-inner">
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: "18px" }}>
                                                <p style={{ letterSpacing: ".8px" }}>Total Months</p>
                                                <h6 id="monthly-repayment" style={{ letterSpacing: "1.5px", fontSize: "20px" }}>{years * 12}</h6>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: "18px" }}>
                                                <p style={{ letterSpacing: ".8px" }}>Monthly Repayment </p>
                                                <h6 id="monthly-repayment" style={{ letterSpacing: "1.5px", fontSize: "20px" }}>${emi}</h6>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: "18px" }}>
                                                <p style={{ letterSpacing: ".8px" }}>Total Repayment</p>
                                                <h6 id="total-repayment" style={{ letterSpacing: "1.5px", fontSize: "20px" }}>${totalAmount}</h6>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: "18px" }}>
                                                <p style={{ letterSpacing: ".8px" }}>Interest Paid</p>
                                                <h6 id="total-interest" style={{ letterSpacing: "1.5px", fontSize: "20px" }}>${interestPaid}</h6>
                                            </div>
                                        </div>
                                        <div style={{ height: "23rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                            <Pie data={data} options={options} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section >
    </Layout >
}

export default Calculator;
