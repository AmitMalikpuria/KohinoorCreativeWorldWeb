import React, { useEffect, useState } from "react";
import './Borrowing.css';
import Layout from "../../../Layout";

import icon1 from '../../../../assets/images/icons/icon-1.png';
import shape3 from '../../../../assets/images/shape/shape-3.png';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CircleIcon from '@mui/icons-material/Circle';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

function Borrowing() {

    const [dependent, setdependent] = useState(0);
    const [Income, setIncome] = useState("1000");
    const [rentIncome, setRentIncome] = useState("");
    const [otherIncome, setOtherIncome] = useState("");
    const [creditcard, setCreditCard] = useState("");
    const [otherrepayments, setOtherRepayments] = useState("");

    const [Income2, setIncome2] = useState("");
    const [rentIncome2, setRentIncome2] = useState("");
    const [otherIncome2, setOtherIncome2] = useState("");
    const [creditcard2, setCreditCard2] = useState("");
    const [otherrepayments2, setOtherRepayments2] = useState("");

    function formatNumberWithCommas(number, incometype) {

        let numberString = number.toString().replace(/,/g, '');

        if (incometype == "income") {
            setIncome(numberString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        }
        else if (incometype == "rentincome") {
            setRentIncome(numberString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        }
        else if (incometype == "otherincome") {
            setOtherIncome(numberString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        }
        else if (incometype == "creditcard") {
            setCreditCard(numberString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        }
        else if (incometype == "otherrepayments") {
            setOtherRepayments(numberString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        }


        if (incometype == "income2") {
            setIncome2(numberString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        }
        else if (incometype == "rentincome2") {
            setRentIncome2(numberString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        }
        else if (incometype == "otherincome2") {
            setOtherIncome2(numberString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        }
        else if (incometype == "creditcard2") {
            setCreditCard2(numberString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        }
        else if (incometype == "otherrepayments2") {
            setOtherRepayments2(numberString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        }

    }

    function getBorrowfor(btntype) {
        debugger;
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
        debugger;
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



    return <Layout>
        <section className="calculator-section pt_120 pb_120">
            <div className="light-icon float-bob-y" style={{ backgroundImage: `url(${icon1})` }}></div>
            <div className="auto-container">
                <div className="inner-container">
                    <div className="shape" style={{ backgroundImage: `url(${shape3})` }}></div>
                    <div className="row clearfix " style={{ backgroundColor: "#f6f6f6", paddingBottom: "50px" }}>
                        <div className="col-lg-12 col-md-12 col-sm-12 content-column" >
                            <div className="content_block_two">
                                <div className="content-box">
                                    <div className="sec-title mb_50 text-center">
                                        <h6>Calculator</h6>
                                        <h2>Borrowing Power</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12 content-column ">
                            <div className="content_block_two">
                                <div className="content-box " >
                                    <div className="calculator-inner backgorund">
                                        <form id="loan-form">
                                            <div className="form-group">
                                                <h6 className='mb-2'>I'm looking to borrow for</h6>
                                                <div className="input-group">
                                                    <ButtonGroup variant="contained" aria-label="Basic button group" style={{ borderRadius: "25px 25px 25px 25px" }}>
                                                        <Button id="justme" value="1" className="btnleft btnactive" onClick={() => getBorrowfor('justme')}  >Just me</Button>
                                                        <Button id="twoofus" value="2" className="btnright btnnotactive" onClick={() => getBorrowfor('twoofus')} >Two of us</Button>
                                                    </ButtonGroup>
                                                </div>
                                            </div>
                                            <div className="form-group" style={{ marginTop: "-20px" }}>
                                                <h6 className='mb-2'>Dependants</h6>
                                                <div className="Counter">
                                                    <button type="button" className="count-Sub" onClick={() => setdependent(dependent > 0 ? dependent - 1 : 0)} >-</button>
                                                    <input type="number" id="dependent" className="count_text" maxLength={2} value={dependent} />
                                                    <button type="button" className="count-add" onClick={() => setdependent(dependent >= 0 ? dependent + 1 : 0)}>+</button>
                                                </div>
                                            </div>
                                            <div className="form-group" style={{ marginTop: "-20px" }}>
                                                <h6 className='mb-2'>Work status - are either applicants self employed?</h6>
                                                <div className="input-group">
                                                    <ButtonGroup variant="contained" aria-label="Basic button group" style={{ borderRadius: "25px 25px 25px 25px" }}>
                                                        <Button id="payz" value="1" className="btnleft btnactive" onClick={() => selfemployedornot('payz')}  >PAYG</Button>
                                                        <Button id="selfemployed" value="2" className="btnright btnnotactive" onClick={() => selfemployedornot('selfemployed')} >Self Employed</Button>
                                                    </ButtonGroup>
                                                </div>
                                            </div>
                                            <div className="form-group" style={{ marginTop: "-20px" }}>
                                                <div className="">
                                                    <h6 className='mb-2'>My monthly income before tax</h6>
                                                    <div className="modifiedControlGroup">
                                                        <i className="Dollar">$</i>
                                                        <input type="text" className="textModified" value={Income} name="income" onChange={(e) => formatNumberWithCommas(e.target.value, 'income')} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group" style={{ marginTop: "-20px" }}>
                                                <Accordion className="_accordian" >
                                                    <AccordionSummary
                                                        aria-controls="panel5-content"
                                                        id="panel5-header"
                                                    >
                                                        <div className="icon_and_label" style={{ display: "flex", justifyContent: "center", alignItems: "center", columnGap: "10px" }}>
                                                            <AddCircleOutlineIcon className="iconcolor" />
                                                            <h6> Rental Income</h6>
                                                        </div>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <h6 className='mb-2'>My monthly rental income before tax</h6>
                                                        <div className="modifiedControlGroup">
                                                            <i className="Dollar">$</i>
                                                            <input type="text" className="textModified" value={rentIncome} name="rentincome" onChange={(e) => formatNumberWithCommas(e.target.value, 'rentincome')} />
                                                        </div>
                                                    </AccordionDetails>
                                                </Accordion>
                                            </div>
                                            <div className="form-group" style={{ marginTop: "-20px" }}>
                                                <Accordion className="_accordian" >
                                                    <AccordionSummary aria-controls="panel6-content" id="panel6-header"    >
                                                        <div className="icon_and_label" style={{ display: "flex", justifyContent: "center", alignItems: "center", columnGap: "10px" }}>
                                                            <AddCircleOutlineIcon className="iconcolor" />
                                                            <h6> Other Income</h6>
                                                        </div>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <h6 className='mb-2'>My monthly other income before tax</h6>
                                                        <div className="modifiedControlGroup">
                                                            <i className="Dollar">$</i>
                                                            <input type="text" className="textModified" value={otherIncome} name="otherincome" onChange={(e) => formatNumberWithCommas(e.target.value, 'otherincome')} />
                                                        </div>
                                                    </AccordionDetails>
                                                </Accordion>
                                            </div>
                                            <div className="form-group" style={{ marginTop: "-20px" }}>
                                                <div className="">
                                                    <h6 className='mb-2'>My Credit Card Limits</h6>
                                                    <div className="modifiedControlGroup">
                                                        <i className="Dollar">$</i>
                                                        <input type="text" className="textModified" value={creditcard} name="creditcard" onChange={(e) => formatNumberWithCommas(e.target.value, 'creditcard')} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group" style={{ marginTop: "-20px" }}>
                                                <Accordion className="_accordian" >
                                                    <AccordionSummary aria-controls="panel6-content" id="panel6-header"    >
                                                        <div className="icon_and_label" style={{ display: "flex", justifyContent: "center", alignItems: "center", columnGap: "10px" }}>
                                                            <AddCircleOutlineIcon className="iconcolor" />
                                                            <h6> Other Repayments</h6>
                                                        </div>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <h6 className='mb-2'>My other monthly repayments</h6>
                                                        <div className="modifiedControlGroup">
                                                            <i className="Dollar">$</i>
                                                            <input type="text" className="textModified" value={otherrepayments} name="otherrepayments" onChange={(e) => formatNumberWithCommas(e.target.value, 'otherrepayments')} />
                                                        </div>
                                                    </AccordionDetails>
                                                </Accordion>
                                            </div>
                                            <hr></hr>
                                            <h5>2nd Applicant</h5>
                                            <div className="form-group" style={{ marginTop: "15px" }}>
                                                <div className="">
                                                    <h6 className='mb-2'>2nd Applicant monthly income before tax</h6>
                                                    <div className="modifiedControlGroup">
                                                        <i className="Dollar">$</i>
                                                        <input type="text" className="textModified" value={Income2} name="income2" onChange={(e) => formatNumberWithCommas(e.target.value, 'income2')} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group" style={{ marginTop: "-20px" }}>
                                                <Accordion className="_accordian" >
                                                    <AccordionSummary
                                                        aria-controls="panel5-content"
                                                        id="panel5-header"
                                                    >
                                                        <div className="icon_and_label" style={{ display: "flex", justifyContent: "center", alignItems: "center", columnGap: "10px" }}>
                                                            <AddCircleOutlineIcon className="iconcolor" />
                                                            <h6> Rental Income</h6>
                                                        </div>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <h6 className='mb-2'>2nd Applicant monthly rental income before tax</h6>
                                                        <div className="modifiedControlGroup">
                                                            <i className="Dollar">$</i>
                                                            <input type="text" className="textModified" value={rentIncome2} name="rentincome2" onChange={(e) => formatNumberWithCommas(e.target.value, 'rentincome2')} />
                                                        </div>
                                                    </AccordionDetails>
                                                </Accordion>
                                            </div>
                                            <div className="form-group" style={{ marginTop: "-20px" }}>
                                                <Accordion className="_accordian" >
                                                    <AccordionSummary aria-controls="panel6-content" id="panel6-header"    >
                                                        <div className="icon_and_label" style={{ display: "flex", justifyContent: "center", alignItems: "center", columnGap: "10px" }}>
                                                            <AddCircleOutlineIcon className="iconcolor" />
                                                            <h6> Other Income</h6>
                                                        </div>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <h6 className='mb-2'>2nd Applicant monthly other income before tax</h6>
                                                        <div className="modifiedControlGroup">
                                                            <i className="Dollar">$</i>
                                                            <input type="text" className="textModified" value={otherIncome2} name="otherincome2" onChange={(e) => formatNumberWithCommas(e.target.value, 'otherincome2')} />
                                                        </div>
                                                    </AccordionDetails>
                                                </Accordion>
                                            </div>
                                            <div className="form-group" style={{ marginTop: "-20px" }}>
                                                <div className="">
                                                    <h6 className='mb-2'>2nd Applicant Credit Card Limits</h6>
                                                    <div className="modifiedControlGroup">
                                                        <i className="Dollar">$</i>
                                                        <input type="text" className="textModified" value={creditcard2} name="creditcard2" onChange={(e) => formatNumberWithCommas(e.target.value, 'creditcard2')} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group" style={{ marginTop: "-20px" }}>
                                                <Accordion className="_accordian">
                                                    <AccordionSummary aria-controls="panel6-content" id="panel6-header">
                                                        <div className="icon_and_label" style={{ display: "flex", justifyContent: "center", alignItems: "center", columnGap: "10px" }}>
                                                            <AddCircleOutlineIcon className="iconcolor" />
                                                            <h6>2nd Applicant Other Repayments</h6>
                                                        </div>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <h6 className='mb-2'>2nd Applicant Other monthly repayments</h6>
                                                        <div className="modifiedControlGroup">
                                                            <i className="Dollar">$</i>
                                                            <input type="text" className="textModified" value={otherrepayments2} name="otherrepayments2" onChange={(e) => formatNumberWithCommas(e.target.value, 'otherrepayments2')} />
                                                        </div>
                                                    </AccordionDetails>
                                                </Accordion>
                                            </div>
                                            <div className="form-group d-flex">
                                                {/* <input type="submit" value="Calculate" className="theme-btn btn-one mr_20" onClick={() => calculateEMI(principle, interest, years)} /> */}
                                                <input type="button" value="Calculate" className="theme-btn btn-one mr_20" />
                                                <input type="button" value="Reset Data" style={{ color: "var(--theme-color) !important" }} className="reset-btn" />
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column " >
                            <div className="content_block_two">
                                <div className="content-box mt_20" >
                                    <div className="calculator-inner">
                                        <h5 style={{ fontFamily: "var(--manrope)" }}>You could borrow up to</h5>
                                        <br></br>
                                        <div className="borrow_result">
                                            <div className="borrow_result_child">
                                                <p>Repayments</p>
                                                <h6><CircleIcon style={{ color: "skyblue", fontSize: "18px" }} /> / month</h6>
                                            </div>
                                            <div className="borrow_result_child">
                                                <p>Expenses</p>
                                                <h6><CircleIcon style={{ color: "pink", fontSize: "18px" }} /> </h6>
                                            </div>
                                            <div className="borrow_result_child">
                                                <p>Remaining</p>
                                                <h6><CircleIcon style={{ color: "yellow", fontSize: "18px" }} /> </h6>
                                            </div>
                                        </div>
                                        <br></br>
                                        <br></br>
                                        <p>Based on 6.49% standard variable rate over 30 years.</p>
                                    </div>
                                </div>
                            </div>

                            <br></br>
                            <div className="Advertise">
                                <div className="Advertise_Detail">
                                    <h4>
                                        Start the pre-approval process
                                    </h4>
                                    <button type="button"> Talk to a broker</button>
                                </div>
                            </div>
                            <br></br>
                            <p style={{ textAlign: "justify",fontSize:"13px" }}>The borrowing amount is a guide only. Loan repayments are based on the lowest interest rate (either standard variable or 3-year fixed rate, owner occupier) from our lender panel over a repayment period of 30 years. Rates and repayments are indicative only and subject to change. The results from this calculator are an approximate guide only and do not constitute specialist advice. The calculations used should not be relied upon for the purposes of entering into any legal or financial commitments.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </Layout>
}

export default Borrowing;
