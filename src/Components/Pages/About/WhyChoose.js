import React, { useState } from "react";
import about7 from '../../../assets/images/resource/about-7.jpg';
import about8 from '../../../assets/images/resource/about-8.jpg';
import about10 from '../../../assets/images/resource/about-10.jpg';
import './WhyChoose.css'
import { Link } from "react-router-dom";
import Contactus from "../DialogBox/Contactus";


function WhyChoose() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (

        <>
            <section className="exchange-section pt_120 pb_90 centred">
                <div className="auto-container">
                    <div className="sec-title mb_70">
                        <h2>Why choose Amber Loans?</h2>
                    </div>
                    <div className="tabs-box">
                        <div className="tab-btn-box p_relative mb_60">
                            <ul className="tab-btns tab-buttons" role="tablist">
                                <li className="nav-link" onClick={() => handleOnClick(1)}>
                                    <a className={activeIndex == 1 ? "nav-link active" : "nav-link"} >We're on your side</a>
                                </li>
                                <li className="nav-item" onClick={() => handleOnClick(2)}>
                                    <a className={activeIndex == 2 ? "nav-link active" : "nav-link"} >How can we help?</a>
                                </li>
                                <li className="nav-item" onClick={() => handleOnClick(3)}>
                                    <a className={activeIndex == 3 ? "nav-link active" : "nav-link"} >Trusted Broker</a>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                            <div className={activeIndex == 1 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                <div className="row clearfix">
                                    <div className="col-lg-12 col-md-12 col-sm-12 feature-block margin-bottom exchange-block">
                                        <div className="whychoose_ImageCard">
                                            <div className="whychoose_ImageCard_Child" style={{ gap: "20px" }}>
                                                {/* <h1>About Amber Loans</h1> */}
                                                <p style={{ fontWeight: "200", fontSize: "17px", color: "var(--title-color)" }}>We know how important it is for you to be able to trust the advice you are receiving from our experts.</p>
                                                <p style={{ fontWeight: "200", fontSize: "17px", color: "var(--title-color)" }}>We can assist you with your personal finances including your home loan, car loan and insurances  We can also help you organise finance to start or grow your business and fund your assets.</p>
                                                <p style={{ fontWeight: "200", fontSize: "17px", color: "var(--title-color)" }}>We don’t charge to find the right loan for you. Your broker is paid by the lender once your loan settles. In some limited circumstances your broker may charge a fee, which would be discussed with you before proceeding.</p>
                                            </div>
                                            <div className="whychoose_ImageCard_Child_2">
                                                <img src={about8} alt="" style={{ borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex == 2 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                <div className="row clearfix">
                                    <div className="col-lg-12 col-md-12 col-sm-12 feature-block margin-bottom exchange-block">
                                        <div className="whychoose_ImageCard">
                                            <div className="whychoose_ImageCard_Child" style={{ gap: "20px" }}>
                                                <p style={{ fontWeight: "200", fontSize: "17px", color: "var(--title-color)" }}>We have local experts available to help you with all things finance related. They'll make complicated easy and provide you with the information and advice you need to make the right decisions with your money.</p>
                                                <p style={{ fontWeight: "200", fontSize: "17px", color: "var(--title-color)" }}>Contact one of our local experts today to see how we can help you.</p>
                                                <div className="form-group">
                                                    {/* <Link to="/contactus#_form" className="theme-btn btn-one">Contact Us</Link> */}
                                                    <Contactus btn1="btn-one" />
                                                </div>
                                            </div>
                                            <div className="whychoose_ImageCard_Child_2">
                                                <img src={about7} alt="" style={{ borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex == 3 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                <div className="row clearfix">
                                    <div className="col-lg-12 col-md-12 col-sm-12 feature-block margin-bottom exchange-block">
                                        <div className="whychoose_ImageCard">
                                            <div className="whychoose_ImageCard_Child" style={{ gap: "20px" }}>
                                                <p style={{ fontWeight: "200", fontSize: "17px", color: "var(--title-color)" }}>Australians have trusted Amber Loans brokers to help them find the right home loan to finance their property dreams.</p>
                                                {/* <p style={{ fontWeight: "200", fontSize: "17px", color: "var(--title-color)" }}>Our network of more than 100 experienced brokers around Australia have access to thousands of loan products from more than 10 lenders, including our exclusive range of Amber Loans branded lending products.</p> */}
                                                <div className="form-group">
                                                    {/* <Link to="/contactus#_form" className="theme-btn btn-one">Contact Us</Link> */}
                                                    <Contactus btn1="btn-one" />
                                                </div>
                                            </div>
                                            <div className="whychoose_ImageCard_Child_2">
                                                <img src={about10} alt="" style={{ borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }} />
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

export default WhyChoose;
