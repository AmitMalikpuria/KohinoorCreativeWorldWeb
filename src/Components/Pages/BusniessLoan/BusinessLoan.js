import React, { useState, } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../Layout";
import about1 from '../../../assets/images/resource/about-1.jpg';
import about7 from '../../../assets/images/resource/about-7.jpg';
import BusinessLoanimg from '../../../assets/images/service/businessloan.jpg'
import CheckIcon from '@mui/icons-material/Check';
import about10 from '../../../assets/images/resource/about-10.jpg';
import businessloanImage from '../../../assets/images/service/businessloanImage.jpg';
import CircleIcon from '@mui/icons-material/Circle';
import PersonIcon from '@mui/icons-material/Person';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';

import FAQ from "../../FAQ";
import Contactus from "../DialogBox/Contactus";
import BUsinessLoanBannerimg from '../../../assets/images/banner/BusinessLoanBanner.jpg'
import BusniessFAQ from "./BusniessFAQ";
import WideChoice from "./WideChoice";

function BusinessLoan() {



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

    return <Layout breadcrumbTitle="Business loan" breadcrumbBanner={BUsinessLoanBannerimg}>
        <section className="about-section pt_40 pb_40">
            {/* <div className="pattern-layer rotate-me"></div> */}
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12 feature-block margin-bottom">
                        <div className="ImageCard">
                            <div className="ImageCard_Child">
                                <h1>Business loans</h1>
                                <p style={{ fontWeight: "200", fontSize: "17px", color: "var(--white-color)" }}>Looking to grow your business? We can help you understand the finance options available and do all the legwork in sourcing the right business loan for your needs.</p>
                            </div>
                            <div className="ImageCard_Child_2">
                                <img src={BusinessLoanimg} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 content-side" >
                        <div className="blog-details-content">
                            <div className="news-block-three">
                                <div className="inner-box">
                                    {/* <figure className="image-box" ><img src={news25} alt="" style={{height:"20rem", width:"40rem"}} /></figure> */}
                                    <h2 className="text-center" style={{ fontSize: "38px" }}>Business finance - what to consider</h2>
                                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                        <div className="lower-content" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "start", width: "80%" }}>
                                            <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
                                                <CheckIcon style={{ fontSize: "31px", color: "var(--theme-color)" }} />
                                                <div>
                                                    <h5 style={{ fontSize: "25px", color: "var(--theme-color)" }}> Seek help to find the right package</h5>
                                                    <br /> <p>With so many finance providers offering different finance types, with varying structures and repayment options, it can be difficult to find the one that’s best for your business. It pays to seek independent advice before you make your choice, and this is where your Amber Loans broker can help.</p>
                                                </div>
                                            </div>
                                            <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
                                                <CheckIcon style={{ fontSize: "31px", color: "var(--theme-color)" }} />
                                                <div>
                                                    <h5 style={{ fontSize: "25px", color: "var(--theme-color)" }}> Finding the right loan</h5>
                                                    <br /> <p>A business overdraft gives you access to cash to cover short term requirements, such as bridging the gap between service delivery and payment. An overdraft is usually unsecured, but is likely to offer a cheaper interest rate than a credit card.</p>
                                                    <p>If you need to make a larger purchase, you might consider a business equity line, which is suited to businesses that might need a cash injection on a very occasional basis. This form of business finance is likely to require security.</p>
                                                    <p>If you know how much you need to borrow, you might consider a business fixed rate loan, which gives you the certainty of fixed month payments. But if your cash flow is volatile you might opt for a business variable loan, as you may be able to reduce repayments if needed.</p>

                                                </div>
                                            </div>

                                            <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
                                                <CheckIcon style={{ fontSize: "31px", color: "var(--theme-color)" }} />
                                                <div>
                                                    <h5 style={{ fontSize: "25px", color: "var(--theme-color)" }}> What you'll need</h5>
                                                    <br /> <p>To be eligible for business finance, you’ll need to demonstrate a history of financial performance, including evidence of solid cash flow and the ability to manage expenses and liabilities.</p>
                                                    <br /> <p>The sheer variety of loans can be overwhelming, but your Amber Loans expert can help you navigate through the various options to find the one that’s right for you.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <WideChoice/>
                    <BusniessFAQ />
                    <div className="col-lg-12 col-md-12 col-sm-12 feature-block  exchange-block mt_60">
                        <div className="whychoose_ImageCard">
                            <div className="whychoose_ImageCard_Child" style={{ gap: "40px", padding: "110px 50px 50px 50px",justifyContent:"center",alignItems:"center" }}>
                                <h2>Talk us now</h2>
                                <div className="form-group">
                                    {/* <Link to="/contactus#_form" className="theme-btn btn-one">Contact Us</Link> */}
                                    <Contactus btn1="btn-one" />
                                </div>
                            </div>
                            <div className="whychoose_ImageCard_Child_2">
                                <img src={businessloanImage} alt="" style={{ objectFit: "cover", borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 feature-block car-margin-bottom mt_60 mb_30">
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

export default BusinessLoan;
