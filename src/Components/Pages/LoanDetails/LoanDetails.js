import React, { useEffect, useState } from "react";
import Layout from '../../Layout'
import {  useSearchParams } from 'react-router-dom';

import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CottageIcon from '@mui/icons-material/Cottage';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";

import CarLoanDetails from "./CarLoanDetails";
import PersonalLoanDetails from "./PersonalLoanDetails";
import HomeLoanDetails from "./HomeLoanDetails"
import FirstHomeLoanDetails from "./FirstHomeLoanDetails"



function LoanDetails() {
    const [homemortgage, setHomemortgage] = useState(false);
    const [firsthomemortgage, setFirsthomemortgage] = useState(false);
    const [personalloan, setPersonalloan] = useState(false);
    const [carloan, setCarloan] = useState(false);

    const [searchParams] = useSearchParams();
    const loanType = searchParams.get('id');
   
   

    useEffect(() => {
        if (loanType) {
            if (loanType == "home_mortage") {
                setHomemortgage(true);
                setFirsthomemortgage(false);
                setPersonalloan(false);
                setCarloan(false);
            }
            else if (loanType == "first_home_mortage") {
                setHomemortgage(false);
                setFirsthomemortgage(true);
                setPersonalloan(false);
                setCarloan(false);
            }
            else if (loanType == "personal_loan") {
                setHomemortgage(false);
                setFirsthomemortgage(false);
                setPersonalloan(true);
                setCarloan(false);
            }
            else if (loanType == "car_loan") {
                setHomemortgage(false);
                setFirsthomemortgage(false);
                setPersonalloan(false);
                setCarloan(true);
            }
        }        
    }, )

    function GetCalculatorType(calculatorType) {

        if (calculatorType == "Home Mortage") {
            setHomemortgage(true);
            setFirsthomemortgage(false);
            setPersonalloan(false);
            setCarloan(false);
        }
        else if (calculatorType == "First Home Mortage") {
            setHomemortgage(false);
            setFirsthomemortgage(true);
            setPersonalloan(false);
            setCarloan(false);
        }
        else if (calculatorType == "Personal Loan") {
            setHomemortgage(false);
            setFirsthomemortgage(false);
            setPersonalloan(true);
            setCarloan(false);
        }
        else if (calculatorType == "Car Loan") {
            setHomemortgage(false);
            setFirsthomemortgage(false);
            setPersonalloan(false);
            setCarloan(true);
        }
    }

    return <Layout>

        <section className="feature-style-three ">
            <div className="auto-container">
                <div className="sec-title mb_80 mt_70  centred">
                    <h6 className="mt-4">Amber Loans: Bringing You the Best Deals</h6>
                    <h2>Amber Loans: Bringing You the Best Deals</h2>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                {/* <div className="icon-box"><i className="icon-5"></i></div> */}
                                <div className="icon-box"><PersonIcon className="mb-3" style={{ fontSize: '60px', marginbottom: '16px!important' }} /></div>
                                <h4 style={{ marginbottom: '5px!important' }} ><a href="#">Personal Loan</a></h4>
                                <p>Quickly estimate monthly payments, interest rates, and total costs for smarter financial planning.</p>
                                <h6><Link to="/personal-loan">View Details</Link></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                {/* <div className="icon-box"><i className="icon-6"></i></div> */}
                                <div className="icon-box"><DirectionsCarIcon className="mb-3" style={{ fontSize: '60px', marginbottom: '16px!important' }} /></div>
                                <h4 style={{ 'marginbottom': '5px' }}><a href="/service">Car Loan</a></h4>
                                <p>Effortlessly Calculate monthly payments, interest rates, and total costs to plan your car purchase.</p>
                                <h6><Link to="/car-loan">View Details</Link></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                {/* <div className="icon-box"><i className="icon-7"></i></div> */}
                                <div className="icon-box"><CottageIcon className="mb-3" style={{ fontSize: '60px', marginbottom: '16px!important' }} /></div>
                                <h4 style={{ 'marginbottom': '5px' }}><a href="/service">First Home Loan</a></h4>
                                <p>Effortlessly estimate payments, interest rates, and costs to plan your first home purchase wisely.</p>
                                <h6><Link onClick={(e) => GetCalculatorType('First Home Mortage')}>View Details</Link></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                {/* <div className="icon-box"><i className="icon-8"></i></div> */}
                                <div className="icon-box"><HomeIcon className="mb-3" style={{ fontSize: '60px', marginbottom: '16px!important' }} /></div>
                                <h4 style={{ 'marginbottom': '5px' }}><a href="/service">Home Loan</a></h4>
                                <p>Quickly estimate monthly payments, interest rates, and costs to plan your first mortgage with ease.</p>
                                <h6><Link onClick={(e) => GetCalculatorType('Home Mortage')}>View Details</Link></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {
            carloan ? <CarLoanDetails Title="Car" /> : null
        }
        {
            personalloan ? <PersonalLoanDetails Title="Personal" /> : null
        }
        {
            homemortgage ? <HomeLoanDetails Title="Home" /> : null
        }
        {
            firsthomemortgage ? <FirstHomeLoanDetails Title="First Home" /> : null
        }
    </Layout>
}

export default LoanDetails;

