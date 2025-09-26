import React, { useState } from "react";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CottageIcon from '@mui/icons-material/Cottage';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import HourglassBottomOutlinedIcon from '@mui/icons-material/HourglassBottomOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import about7 from '../assets/images/resource/about-7.jpg'
import { Link, useNavigate } from "react-router-dom";
import Layout from "./Layout";
import './CalculatorTitle.css';
import HomeMortgage from "./Pages/Calculator/HomeMortgage";
import SimpleCalculator from "./Pages/Calculator/SimpleCalculator";
import Calculator from "./Pages/Calculator/TestCalculator/Calculator";


function CalculatorsTitle() {
    const navigate = useNavigate();

    const [homemortgage, setHomemortgage] = useState(false);
    const [firsthomemortgage, setFirsthomemortgage] = useState(false);
    const [personalloan, setPersonalloan] = useState(false);
    const [carloan, setCarloan] = useState(false);
    const [Borrowing, setBorrowing] = useState(false);

    function GetCalculatorType(calculatorType) {

        if (calculatorType == "Home Mortage") {
            setHomemortgage(true);
            setFirsthomemortgage(false);
            setPersonalloan(false);
            setCarloan(false);
            setBorrowing(false);
        }
        else if (calculatorType == "First Home Mortage") {
            setHomemortgage(false);
            setFirsthomemortgage(true);
            setPersonalloan(false);
            setCarloan(false);
            setBorrowing(false);
        }
        else if (calculatorType == "Personal Loan") {
            setHomemortgage(false);
            setFirsthomemortgage(false);
            setPersonalloan(true);
            setCarloan(false);
            setBorrowing(false);
        }
        else if (calculatorType == "Car Loan") {
            setHomemortgage(false);
            setFirsthomemortgage(false);
            setPersonalloan(false);
            setCarloan(true);
            setBorrowing(false);
        }
        else if (calculatorType == "Borrowing power") {
            setHomemortgage(false);
            setFirsthomemortgage(false);
            setPersonalloan(false);
            setCarloan(false);
            setBorrowing(true);
        }
    }

    return <Layout>
       
        <section className="feature-style-three pt_50">
            <div className="auto-container">
                <div className="sec-title mb_30 centred">
                    <h6 className="mt-4">Amber Loans: Bringing You the Best Deals</h6>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12 feature-block margin-bottom">
                        <div className="ImageCard">
                            <div className="ImageCard_Child">
                                <h1>Amber Loans calculators</h1>
                                <p style={{color:"var(--white-color)"}}>Use our suite of popular mortgage & home loan calculators to work your borrowing capacity, home loan repayments, stamp duty, savings targets and more.</p>
                            </div>
                            <div className="ImageCard_Child_2">
                                <img src={about7} alt="" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-12 col-md-12 col-sm-12 feature-block margin-bottom text-center">
                        <h2>Help me work out...</h2>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                             
                                <div className="icon-box"><CottageIcon className="icon-modification" style={{ fontSize: '50px', marginbottom: '16px!important' }} /></div>
                                <h4 style={{ 'marginbottom': '5px' }}><Link to="/calculate-home-loan-repayments" >Home Loan Repayments</Link></h4>
                                <p>Work out your minimum monthly loan repayments and the impact of making extra repayments.</p>
                                <h6><Link to="/calculate-home-loan-repayments" >Calculate</Link></h6>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><CreditScoreOutlinedIcon className="icon-modification" style={{ fontSize: '50px', marginbottom: '16px!important' }} /></div>
                                <h4 style={{ 'marginbottom': '5px' }}><a href="/service">Borrowing power</a></h4>
                                <p>Calculate how much you can borrow based on your salary and financial commitments.</p>
                                <h6><Link to="/calculate-borrowing-power" >Calculate</Link></h6>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><OtherHousesOutlinedIcon className="icon-modification" style={{ fontSize: '50px', marginbottom: '16px!important' }} /></div>
                                <h4 style={{ 'marginbottom': '5px' }}><a href="/service">How long to repay?</a></h4>
                                <p>Work out how long it will take you to repay your home loan and pay off your mortgage.</p>
                                <h6><Link to="/calculate-how-long-to-repay" >Calculate</Link></h6>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><HourglassBottomOutlinedIcon className="icon-modification" style={{ fontSize: '50px', marginbottom: '16px!important' }} /></div>
                                <h4 style={{ 'marginbottom': '5px' }}><a href="/service">Remaining Balance</a></h4>
                                <p>Use this calculator to work out the remaining balance of your home loan, based on certain timeframes.</p>
                                <h6><Link to="/calculate-remaining-balance" >Calculate</Link></h6>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><CalendarMonthOutlinedIcon className="icon-modification" style={{ fontSize: '50px', marginbottom: '16px!important' }} /></div>
                                <h4 style={{ 'marginbottom': '5px' }}><a href="/service">Fortnightly repayments</a></h4>
                                <p>See how much interest and time you'll save if you make fortnightly repayments on your home loan.</p>
                                <h6><Link to="/calculate-fortnightly-repayments" >Calculate</Link></h6>
                            </div>
                        </div>
                    </div> */}

                    <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                {/* <div className="icon-box"><i className="icon-5"></i></div> */}
                                <div className="icon-box"><PersonIcon className="icon-modification" style={{ fontSize: '50px', marginbottom: '16px!important' }} /></div>
                                <h4 style={{ marginbottom: '5px!important' }} ><Link to="/calculate-personal-loan">Personal Loan</Link></h4>
                                <p>Estimate monthly payments, interest rates, and total costs for smarter financial planning.</p>
                                <h6><Link to="/calculate-personal-loan">Calculate</Link></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                {/* <div className="icon-box"><i className="icon-6"></i></div> */}
                                <div className="icon-box"><DirectionsCarIcon className="icon-modification" style={{ fontSize: '50px', marginbottom: '16px!important' }} /></div>
                                <h4 style={{ 'marginbottom': '5px' }}><Link to="/calculate-car-loan">Car Loan</Link></h4>
                                <p>Effortlessly calculate monthly payments, interest rates, and total costs to plan your car purchase.</p>
                                <h6><Link to="/calculate-car-loan">Calculate</Link></h6>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><CottageIcon className="icon-modification" style={{ fontSize: '50px', marginbottom: '16px!important' }} /></div>
                                <h4 style={{ 'marginbottom': '5px' }}><a href="/service">First Home Loan</a></h4>
                                <p>Effortlessly estimate payments, interest rates, and costs to plan your first home purchase wisely.</p>
                                <h6><Link onClick={(e) => GetCalculatorType('First Home Mortage')}>Calculate</Link></h6>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><HomeIcon className="icon-modification" style={{ fontSize: '50px', marginbottom: '16px!important' }} /></div>
                                <h4 style={{ 'marginbottom': '5px' }}><a href="/service">Home Loan</a></h4>
                                <p>Estimate monthly payments, interest rates, and costs to plan your first mortgage with ease.</p>
                                <h6><Link onClick={(e) => GetCalculatorType('Home Mortage')}>Calculate</Link></h6>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
        {/* {
            carloan ? <Calculator Title="Car" /> : null
        }
        {
            personalloan ? <Calculator Title="Personal" /> : null
        }
        {
            homemortgage ? null : null
        }
        {
            firsthomemortgage ? null : null
        } */}

    </Layout>
}

export default CalculatorsTitle;
