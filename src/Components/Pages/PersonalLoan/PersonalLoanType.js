import React, { useState } from "react";
import about7 from '../../../assets/images/resource/about-7.jpg';
import about8 from '../../../assets/images/resource/about-8.jpg';
import about10 from '../../../assets/images/resource/about-10.jpg';
import './PersonalLoanType.css'
import { Link } from "react-router-dom";
import Contactus from "../DialogBox/Contactus.js";

function PersonalLoanType() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    
    return (
        <>
            <section className="exchange-section pt_120 pb_120 centred" >
                <div className="auto-container">
                    <div className="sec-title mb_70">
                        <h2>Types of personal loans</h2>
                    </div>
                    <div className="tabs-box">
                        <div className="tab-btn-box p_relative mb_40">
                            <ul className="tab-btns tab-buttons" role="tablist">
                                <li className="nav-link" onClick={() => handleOnClick(1)}>
                                    <a className={activeIndex == 1 ? "nav-link active" : "nav-link"} >Secure loans</a>
                                </li>
                                <li className="nav-item" onClick={() => handleOnClick(2)}>
                                    <a className={activeIndex == 2 ? "nav-link active" : "nav-link"} >Unsecure loans</a>
                                </li>
                                <li className="nav-item" onClick={() => handleOnClick(3)}>
                                    <a className={activeIndex == 3 ? "nav-link active" : "nav-link"} >Fixed Vs Variable loans</a>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                            <div className={activeIndex == 1 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                <div className="row clearfix">
                                    <div className="col-lg-12 col-md-12 col-sm-12 feature-block margin-bottom exchange-block">
                                        <div className="whychoose_ImageCard">
                                            <div className="whychoose_ImageCard_Child">
                                                {/* <h1>About Amber Loans</h1> */}
                                                <p>If you are purchasing a major item such as a boat, or if you own one already, a lender may be willing to take it as a security for the loan. This could mean that you are entitled to a lower rate than that of an unsecured loan as the lender has a lower risk of loss if you fail to make your repayments. It can also mean that you have a higher chance of getting approved!</p>
                                                <p>Your local Amber Loan broker can help you weigh up the pros and cons of a secured loan and help you decide what type of loan is right for your individual circumstances.</p>
                                                <div className="form-group">
                                                    {/* <Link to="/contactus#_form" className="theme-btn btn-one">Contact Us</Link> */}
                                                    <Contactus btn1="btn-one"/>
                                                </div>
                                            </div>
                                            <div className="whychoose_ImageCard_Child_2">
                                                <img src={about8} alt="" style={{borderTopRightRadius:"10px",borderBottomRightRadius:"10px"}} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex == 2 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                <div className="row clearfix">
                                    <div className="col-lg-12 col-md-12 col-sm-12  feature-block margin-bottom exchange-block">
                                        <div className="whychoose_ImageCard">
                                            <div className="whychoose_ImageCard_Child">
                                                <p>Unsecured loans are those that do not require you to own any assets to apply, whilst also giving you greater flexibility to use the funds as you wish. However, it is important to be aware that the interest rates are often higher than secured loans as the lenders perceive these loans to be a higher risk because you have nothing to fall back on if you can not make repayments.</p>
                                                <p>There are many factors to consider when weighing up your options so be sure to always consult with your local broker about which loan is right for you</p>
                                                <div className="form-group">
                                                    {/* <Link to="/contactus#_form" className="theme-btn btn-one">Contact Us</Link> */}
                                                    <Contactus btn1="btn-one"/>
                                                </div>
                                            </div>
                                            <div className="whychoose_ImageCard_Child_2">
                                                <img src={about7} alt="" style={{borderTopRightRadius:"10px",borderBottomRightRadius:"10px"}} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex == 3 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                <div className="row clearfix">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 feature-block margin-bottom exchange-block">
                                        <div className="whychoose_ImageCard">
                                            <div className="whychoose_ImageCard_Child">
                                                <p style={{ fontWeight: "bolder", marginBottom: "-20px" }}>Fixed rate loans</p>
                                                <p>For those of us that like the security of knowing exactly how much our repayments will be over the lifetime of the loan, a fixed rate loan is the way to go. Fixed rate loans are exactly that, loans where the rate of interest is locked in and will not change, allowing you to easily budget and forecast your repayments.</p>
                                                <p style={{ fontWeight: "bolder", marginBottom: "-20px" }}>Variable rate loans</p>
                                                <p style={{ marginBottom: "-20px" }}>On the flip side, variable rates can be subject to change and the interest can either increase or even decrease during the life of your loan. Variable rate loans can also be more flexible if you would like to repay your loan faster, as lenders may allow you to make extra repayments on the loan.</p>
                                                <p >Everyone's personal circumstances are different which is why your local broker can steer you in the right direction and find the right loan suited to your needs. </p>

                                            </div>
                                            <div className="whychoose_ImageCard_Child_2">
                                                <img src={about10} alt="" style={{borderTopRightRadius:"10px",borderBottomRightRadius:"10px"}} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PersonalLoanType;
