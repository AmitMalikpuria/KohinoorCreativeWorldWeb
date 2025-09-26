import React, { useState, useEffect } from "react";
import './FortnightlyRepayment.css';
import Layout from "../../../Layout";

import icon1 from '../../../../assets/images/icons/icon-1.png';
import shape3 from '../../../../assets/images/shape/shape-3.png';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Repayments', '$ 4202.01', '$ 2101.01', '$ 1050.50'),
    createData('Interest Saved', '$ 1050.50', '$ 11556.49', '$ 11811.20'),
    createData('Total', '$ 453817.34', '$ 442260.85', '$ 442006.14'),
    createData('Time Saved', '0 years', '0 years & 11 months', '0 years & 11 months')
   
];

function FortnightlyRepayment() {

    const [loanAmount, setloanAmount] = useState("350000".toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    const [interestRate, setinterestRate] = useState("6.00");
    const [monthlypayment, setmonthlypayment] = useState("");



    function formatNumberWithCommas(number, incometype) {
        let numberString = number.toString().replace(/,/g, '');

        if (incometype == "loanAmount") {
            setloanAmount(numberString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        }
        else if (incometype == "interestRate") {
            setinterestRate(numberString);
        }
        else if (incometype == "monthlypayment") {
            setmonthlypayment(numberString);
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
                                        <h2 >Fortnightly repayments</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12 col-sm-12 content-column margin-top">
                            <div className="content_block_two">
                                <div className="content-box ">
                                    <div className="calculator-inner backgorund">
                                        <form id="loan-form">
                                            <h3 className="mb_40">1. Your Details</h3>
                                            <div className="form-group" style={{ marginTop: "-10px" }}>
                                                <div className="">
                                                    <h6 className='mb-2'>Loan term</h6>
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
                                                    <h6 className='mb-2'>Interest rate</h6>
                                                    <div className="modifiedControlGroup">
                                                        <i className="Dollar">%</i>
                                                        <input type="text" className="textModified" value={interestRate} name="interestRate" onChange={(e) => formatNumberWithCommas(e.target.value, 'interestRate')} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group" style={{ marginTop: "-10px" }}>
                                                <div className="">
                                                    <h6 className='mb-2'>How many monthly payments have you already made?</h6>
                                                    <div className="modifiedControlGroup ">

                                                        <input type="text" className="textModified" value={monthlypayment} name="monthlypayment" onChange={(e) => formatNumberWithCommas(e.target.value, 'monthlypayment')} />
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
                        <div className="col-lg-8 col-md-12 col-sm-12 content-column margin-top">
                            <div className="content_block_two">
                                <div className="content-box" >
                                    <div className="calculator-inner backgorund">
                                        <div id="loan-form">
                                            <h3 className="mb_40">2. Results</h3>
                                            <div className="form-group" style={{ marginTop: "-10px" }}>
                                                <div className="">
                                                    <p className='mb-2' style={{lineHeight:"normal",fontSize:"13px"}}>This calculator will show you how much you will save if you make 1/2 of your monthly mortgage payment every two weeks instead of once a month. In effect, you are making an extra payment each year. This reduced the loan term and interest paid.</p>
                                                </div>
                                            </div>
                                            <div className="form-group" style={{ marginTop: "-10px" }}>
                                                <div className="">
                                                    <TableContainer component={Paper}>
                                                        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                                                            <TableHead >
                                                                <TableRow style={{backgroundColor:"var(--theme-color)"}}>
                                                                    <TableCell></TableCell>
                                                                    <TableCell align="right" style={{color:"var(--white-color)!important",fontWeight:"bolder"}}>Monthly repayments</TableCell>
                                                                    <TableCell align="right" style={{color:"var(--white-color)!important",fontWeight:"bolder"}}>1/2 Monthly paid Fortnightly</TableCell>
                                                                    <TableCell align="right" style={{color:"var(--white-color)!important",fontWeight:"bolder"}}>1/4 Monthly paid Weekly</TableCell>
                                                                   
                                                                </TableRow>
                                                            </TableHead>
                                                            <TableBody>
                                                                {rows.map((row) => (
                                                                    <TableRow
                                                                        key={row.name}
                                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                                    >
                                                                        <TableCell component="th" scope="row">
                                                                            {row.name}
                                                                        </TableCell>
                                                                        <TableCell align="right">{row.calories}</TableCell>
                                                                        <TableCell align="right">{row.fat}</TableCell>
                                                                        <TableCell align="right">{row.carbs}</TableCell>
                                                                      
                                                                    </TableRow>
                                                                ))}
                                                            </TableBody>
                                                        </Table>
                                                    </TableContainer>
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

export default FortnightlyRepayment;
