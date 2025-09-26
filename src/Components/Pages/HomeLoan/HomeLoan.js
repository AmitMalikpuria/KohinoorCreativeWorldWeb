import React, { useState, } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../Layout.js";
import CarLoanimg from '../../../assets/images/service/car.jpg'
import CheckIcon from '@mui/icons-material/Check';
import about10 from '../../../assets/images/resource/about-10.jpg';
import womanbuyingcar from '../../../assets/images/service/woman-buying-car.jpg';
import PersonIcon from '@mui/icons-material/Person';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import homeimg from '../../../assets/images/service/home.jpg'
import home2img from '../../../assets/images/service/service-2.jpg'
import WanttoBuyHome from "../HomePage/WanttoBuyHome";
import Contactus from '../DialogBox/Contactus.js'
import CompareHomeLoan from "./CompareHomeLoan.js";

import FAQ from "../../FAQ";
import HomeLoanFAQ from "./HomeLoanFAQ";
import InterestRates from "./InterestRates.js";
import Dialog1 from "../DialogBox/Dialog1.js";
import HomeBannerImg from '../../../assets/images/banner/HomeBanner.jpg'

function HomeLoan() {
    return <Layout breadcrumbTitle="Home loan" breadcrumbBanner={HomeBannerImg} >
        <section className="about-section pt_40 pb_40">
            {/* <div className="pattern-layer rotate-me"></div> */}
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12 feature-block margin-bottom">
                        <div className="ImageCard">
                            <div className="ImageCard_Child">
                                <h1>Home loans
                                </h1>
                                <p style={{ fontWeight: "200", fontSize: "17px", color: "var(--white-color)" }}>Whether you are buying your first home, refinancing or investing, your Amber loans broker can help you with expert advice throughout the whole process.</p>
                            </div>
                            <div className="ImageCard_Child_2">
                                <img src={homeimg} alt="" />
                            </div>
                        </div>
                    </div>
                    {/* <WanttoBuyHome /> */}
                    <Dialog1 />

                    <div className="col-lg-12 col-md-12 col-sm-12 content-side" >
                        <div className="blog-details-content">
                            <div className="news-block-three">
                                <div className="inner-box">
                                    {/* <figure className="image-box" ><img src={news25} alt="" style={{height:"20rem", width:"40rem"}} /></figure> */}

                                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                        <div className="lower-content" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "start", width: "80%" }}>
                                            <p>A number of different types of home loans are available. The one that is right for your needs will depend on your circumstances, but usually, most lenders offer several different types of home loans.</p>
                                            <p>Remember, the different types of home loans each have various features that appeal to different borrowers. The key is to have the type of home loan that is right for your circumstances.</p>
                                            <h2 className="text-center" style={{ fontSize: "38px", fontWeight: "700" }}>The main types of home loans</h2>
                                            <p>Let’s compare the different types of home loans available and their pros and cons.</p>
                                            <p>When considering a home loan, there are various loan types to choose from, such as variable interest rate loan (standard and basic), fixed interest rate loan and Line of Credit (equity loan). See below for detailed descriptions for each type of home loan.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <InterestRates />
                    <HomeLoanFAQ />

                    <div className="col-lg-12 col-md-12 col-sm-12 feature-block margin-bottom exchange-block">
                        <div className="whychoose_ImageCard" style={{ backgroundColor: "var(--theme-color)" }}>
                            <div className="whychoose_ImageCard_Child_2">
                                <img src={home2img} alt="" />
                            </div>
                            <div className="whychoose_ImageCard_Child">
                                <h2 className="mt_70" style={{ color: "var(--white-color)" }}>Contact us for Loan</h2>
                                <div className="form-group">
                                    {/* <Link to="/contactus" className="theme-btn btn-three">Contact Us</Link> */}
                                    <Contactus btn1="btn-three" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <CompareHomeLoan />
                    <div className="col-lg-12 col-md-12 col-sm-12 feature-block mt_60 mb_30">
                        <div className="Font_Card_parent">
                            <div className="Font_Card_child">
                                <HomeOutlinedIcon style={{ fontSize: "100px", color: "var(--theme-color)" }} />
                                <h3><Link to="/home-loan">Home loans</Link> </h3>
                            </div>
                            <div className="Font_Card_child">
                                <PersonIcon style={{ fontSize: "100px", color: "var(--theme-color)" }} />
                                <h3><Link to="/personal-loan">Personal loans</Link></h3>
                            </div>
                            <div className="Font_Card_child">
                                <DirectionsCarOutlinedIcon style={{ fontSize: "100px", color: "var(--theme-color)" }} />
                                <h3><Link to="/car-loan">Car loans</Link> </h3>
                            </div>
                            <div className="Font_Card_child">
                                <PriceCheckIcon style={{ fontSize: "100px", color: "var(--theme-color)" }} />
                                <h3><Link to="/business-loan">Business loans</Link> </h3>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    </Layout>;
}

export default HomeLoan;
