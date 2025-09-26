import React, { useState, useEffect } from "react";
import './RemainingBalance.css';
import Layout from "../../../Layout";

import icon1 from '../../../../assets/images/icons/icon-1.png';
import shape3 from '../../../../assets/images/shape/shape-3.png';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import PrintIcon from '@mui/icons-material/Print';


function RemainingBalance() {
    const navigate = useNavigate();

    const [loanAmount, setloanAmount] = useState("350000".toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    const [interestRate, setinterestRate] = useState("0.00");
    const [fixedperiod, setfixedperiod] = useState("0");
    const [ongoingrate, setongoingrate] = useState("6.00");



    function formatNumberWithCommas(number, incometype) {
        let numberString = number.toString().replace(/,/g, '');

        if (incometype == "loanAmount") {
            setloanAmount(numberString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        }
        else if (incometype == "interestRate") {
            setinterestRate(numberString);
        }
        else if (incometype == "fixedperiod") {
            setfixedperiod(numberString);
        }
        else if (incometype == "ongoingrate") {
            setongoingrate(numberString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
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
                                        <h2 >Remaining Balance</h2>
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
                                                    <div className="modifiedControlGroup Modified_Slider" style={{ width: "100%" }}>
                                                        <label>0</label>
                                                        <Box sx={{ width: "70%" }}>
                                                            <Slider defaultValue={10} style={{ color: "var(--theme-color)" }} aria-label="Default" min={1} max={40} valueLabelDisplay="auto" />
                                                        </Box>
                                                        <label>40yrs</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group" style={{ marginTop: "-10px" }}>
                                                <div className="">
                                                    <h6 className='mb-2'>Loan amount</h6>
                                                    <div className="modifiedControlGroup ">
                                                        <i className="Dollar">$</i>
                                                        <input type="text" className="textModified" value={loanAmount} name="loanAmount" onChange={(e) => formatNumberWithCommas(e.target.value, 'loanAmount')} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group" style={{ marginTop: "-10px" }}>
                                                <div className="">
                                                    <h6 className='mb-2'>Fixed rate</h6>
                                                    <div className="modifiedControlGroup">
                                                        <i className="Dollar">%</i>
                                                        <input type="text" className="textModified" value={interestRate} name="interestRate" onChange={(e) => formatNumberWithCommas(e.target.value, 'interestRate')} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group" style={{ marginTop: "-10px" }}>
                                                <div className="">
                                                    <h6 className='mb-2'>Fixed period (months)</h6>
                                                    <div className="modifiedControlGroup">
                                                        <input type="text" className="textModified" value={fixedperiod} name="fixedperiod" onChange={(e) => formatNumberWithCommas(e.target.value, 'fixedperiod')} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group" style={{ marginTop: "-10px" }}>
                                                <div className="">
                                                    <h6 className='mb-2'>Ongoing rate</h6>
                                                    <div className="modifiedControlGroup">
                                                        <i className="Dollar">%</i>
                                                        <input type="text" className="textModified" value={ongoingrate} name="ongoingrate" onChange={(e) => formatNumberWithCommas(e.target.value, 'ongoingrate')} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group" style={{ marginTop: "-10px" }}>
                                                <div className="">
                                                    <h6 className='mb-2'>Remaining balance after</h6>
                                                    <div className="modifiedControlGroup Modified_Slider" style={{ width: "100%" }}>
                                                        <label>0</label>
                                                        <Box sx={{ width: "70%" }}>
                                                            <Slider defaultValue={10} style={{ color: "var(--theme-color)" }} aria-label="Default" min={1} max={40} valueLabelDisplay="auto" />
                                                        </Box>
                                                        <label>40yrs</label>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="form-group d-flex">
                                                {/* <input type="submit" value="Calculate" className="theme-btn btn-one mr_20" onClick={() => calculateEMI(principle, interest, years)} /> */}
                                                <input type="button" value="Calculate" className="theme-btn btn-one mr_20" />
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
                                            <div className="form-group" >
                                                <div className="">
                                                    <h6 className='mb-2'>Fixed monthly repayments</h6>
                                                    <div className="modifiedControlGroup">
                                                        <h5 style={{ color: "var(--theme-color)" }}>$ 0.00</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group" >
                                                <div className="">
                                                    <h6 className='mb-2'>Ongoing monthly repayments</h6>
                                                    <div className="modifiedControlGroup">
                                                        <h5 style={{ color: "var(--theme-color)" }}>$ 15,512.21</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group" >
                                                <div className="">
                                                    <h6 className='mb-2'>Total Repayments</h6>
                                                    <div className="modifiedControlGroup">
                                                        <h5 style={{ color: "var(--theme-color)" }}>$ 372,294.00</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group" >
                                                <div className="">
                                                    <p className='mb-2'>The remaining balance after 2 years is $-0</p>
                                                </div>
                                            </div>
                                            <div className="form-group" >
                                                <div className="">
                                                    <p style={{ color: "var(--theme-color)", fontSize: "13px", letterSpacing: "1.5px" }} className='mb-2'><PrintIcon style={{ color: "var(--theme-color)", fontSize: "17px", letterSpacing: "1.5px" }} /> Print results</p>
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

        </section >
        
    </Layout >
}

export default RemainingBalance;
