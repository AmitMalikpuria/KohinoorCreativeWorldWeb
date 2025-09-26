import React, { useState, } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../Layout";
import about1 from '../../../assets/images/resource/about-1.jpg';
import about7 from '../../../assets/images/resource/about-7.jpg';
import PersonalLoanimg from '../../../assets/images/service/personal.jpg'

import carLoanimg from '../../../assets/images/service/car.jpg'
import CheckIcon from '@mui/icons-material/Check';
import about10 from '../../../assets/images/resource/about-10.jpg';
import womanbuyingcar from '../../../assets/images/service/woman-buying-car.jpg';
import CircleIcon from '@mui/icons-material/Circle';
import './PersonalLoan.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import AccessibilityOutlinedIcon from '@mui/icons-material/AccessibilityOutlined';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';

import PersonIcon from '@mui/icons-material/Person';
import PersonalLoanType from "./PersonalLoanType";
import ReasonforPersonalLoan from "./ReasonforPersonalLoan";
import FAQ from "../../FAQ";
import PersonalLoanFAQ from "./PersonalLoanFAQ";
import PersonalLoanImg from '../../../assets/images/banner/Personal2Banner.jpg'


function PersonalLoan() {

    const [isActive, setIsActive] = useState({
        status: false,
        key: 0,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return <Layout breadcrumbTitle="Personal loan" breadcrumbBanner={PersonalLoanImg}>
        <section className="about-section pt_40 pb_40">
            {/* <div className="pattern-layer rotate-me"></div> */}
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12 feature-block margin-bottom">
                        <div className="ImageCard">
                            <div className="ImageCard_Child">
                                <h1>Personal loans</h1>
                                <p style={{fontWeight:"200",fontSize:"17px",color:"var(--white-color)"}}>Amber Loans can help you fulfil your wishlist with a personal loan suited to your needs.</p>
                            </div>
                            <div className="ImageCard_Child_2">
                                <img src={PersonalLoanimg} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 content-side" >
                        <div className="blog-details-content">
                            <div className="news-block-three">
                                <div className="inner-box">
                                    {/* <figure className="image-box" ><img src={news25} alt="" style={{height:"20rem", width:"40rem"}} /></figure> */}
                                    <h2 className="text-center" style={{ fontSize: "38px" }}>What is a personal loan?</h2>
                                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                        <div className="lower-content" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "start", width: "80%" }}>
                                            <p style={{ fontSize: "18px" }}>At Amber Loans, we understand there are special times in life when you could use a little extra cash for things like planning a wedding, taking a well-deserved holiday, completing some home renovations or giving the kids a high-quality education.</p>
                                            <p style={{ fontSize: "18px" }}>A personal loan is a short term loan of typically 5-7 years, often with interest rates higher than that of mortgages but lower than that of a credit card, offering a useful solution for those special projects. Also, because you are assessed based on your credit risk and experience, the turn around time for approval is usually much faster than that of a mortgage too.</p>
                                            <p style={{ fontSize: "18px" }}>At Amber Loans we do all the legwork by comparing multiple products from a range of lenders so that we track down competitively priced personal loans that let you achieve your goals.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PersonalLoanType />
                    <ReasonforPersonalLoan />
                    <PersonalLoanFAQ />
                    <div className="col-lg-12 col-md-12 col-sm-12 feature-block margin-bottom exchange-block _mt_">
                        <div className="whychoose_ImageCard" style={{ backgroundColor: "var(--theme-color)" }}>
                            <div className="whychoose_ImageCard_Child_2">
                                <img src={carLoanimg} alt="" />
                            </div>
                            <div className="whychoose_ImageCard_Child">
                                <h2 className="mt_70" style={{ color: "var(--white-color)" }}>Looking for a car loan? Find out more here</h2>
                                <div className="form-group">
                                    <Link to="/car-loan" className="theme-btn btn-three">Car loans</Link>
                                </div>
                            </div>
                        </div>
                    </div>
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

export default PersonalLoan;
