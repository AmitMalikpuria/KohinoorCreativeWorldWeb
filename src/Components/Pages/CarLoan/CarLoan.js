import React, { useState, } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../Layout";
import about1 from '../../../assets/images/resource/about-1.jpg';
import about7 from '../../../assets/images/resource/about-7.jpg';
import CarLoanimg from '../../../assets/images/service/car.jpg'
import CheckIcon from '@mui/icons-material/Check';
import about10 from '../../../assets/images/resource/about-10.jpg';
import womanbuyingcar from '../../../assets/images/service/woman-buying-car.jpg';
import CircleIcon from '@mui/icons-material/Circle';
import PersonIcon from '@mui/icons-material/Person';
import './CarLoan.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';

import FAQ from "../../FAQ";
import Contactus from "../DialogBox/Contactus";
import CarLoanBannerimg from '../../../assets/images/banner/CarBanner.jpg'

function CarLoan() {



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

    return <Layout breadcrumbTitle="Car loan" breadcrumbBanner={CarLoanBannerimg}>
        <section className="about-section pt_40 pb_40">
            {/* <div className="pattern-layer rotate-me"></div> */}
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12 feature-block margin-bottom">
                        <div className="ImageCard">
                            <div className="ImageCard_Child">
                                <h1>Car loans</h1>
                                <p style={{ fontWeight: "200", fontSize: "17px", color: "var(--white-color)" }}>We search over 40 lenders to find you the right car loan. Plus, our car buying service for new cars gets you the right car for the best deal, delivered to your door!</p>
                            </div>
                            <div className="ImageCard_Child_2">
                                <img src={CarLoanimg} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 content-side" >
                        <div className="blog-details-content">
                            <div className="news-block-three">
                                <div className="inner-box">
                                    {/* <figure className="image-box" ><img src={news25} alt="" style={{height:"20rem", width:"40rem"}} /></figure> */}
                                    <h2 className="text-center" style={{ fontSize: "38px" }}>Top tips to consider when buying a car</h2>
                                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                        <div className="lower-content" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "start", width: "80%" }}>
                                            <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
                                                <CheckIcon style={{ fontSize: "31px", color: "var(--theme-color)" }} />
                                                <div>
                                                    <h5 style={{ fontSize: "25px", color: "var(--theme-color)" }}> Don’t just look at the interest rate when choosing your car loan</h5>
                                                    <br /> <p>Low rate loans may seem great on paper, but could include hidden fees and charges that can really add up over time.</p>
                                                </div>
                                            </div>

                                            <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
                                                <CheckIcon style={{ fontSize: "31px", color: "var(--theme-color)" }} />
                                                <div>
                                                    <h5 style={{ fontSize: "25px", color: "var(--theme-color)" }}> Consider loans that let you pay extra on top of your monthly repayments</h5>
                                                    <br /> <p>This is a great way of reducing the overall cost of the loan, but not all lenders will allow you to do this, and some of them will charge you extra fees for early repayment</p>
                                                </div>
                                            </div>

                                            <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
                                                <CheckIcon style={{ fontSize: "31px", color: "var(--theme-color)" }} />
                                                <div>
                                                    <h5 style={{ fontSize: "25px", color: "var(--theme-color)" }}> Consider total costs</h5>
                                                    <br /> <p>Make sure you consider the total cost of the loan over time, for example break costs and monthly charges, not just the monthly repayment</p>
                                                </div>
                                            </div>

                                            <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
                                                <CheckIcon style={{ fontSize: "31px", color: "var(--theme-color)" }} />
                                                <div>
                                                    <h5 style={{ fontSize: "25px", color: "var(--theme-color)" }}> Read the fine print</h5>
                                                    <br /> <p>Make sure you read the fine print of your loan agreement so you really understand any additional fees and charges and how they will impact your total repayments</p>
                                                </div>
                                            </div>

                                            <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
                                                <CheckIcon style={{ fontSize: "31px", color: "var(--theme-color)" }} />
                                                <div>
                                                    <h5 style={{ fontSize: "25px", color: "var(--theme-color)" }}> Lease or buy?</h5>
                                                    <br /> <p>There are important differences between leasing and buying a car, and it's worth having a good idea of how each option works to make the right choice for you. Read more here to decide if leasing a car is right for you. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 feature-block margin-bottom exchange-block">
                        <div className="whychoose_ImageCard">
                            <div className="whychoose_ImageCard_Child_2">
                                <img src={about10} alt="" style={{ borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }} />
                            </div>
                            <div className="whychoose_ImageCard_Child">
                                <h2>The truth about dealer finance</h2>
                                <p style={{ fontSize: "17px" }}>If you’re in the market for a new car, chances are at some stage you’ll be offered finance by a dealer.</p>
                                <p style={{ fontSize: "17px", marginTop: "-20px" }}>Showroom car finance can sound tempting – often with very low rates. But scratch the surface because the finance you sign up for may not be what you expected. Watch this short video to find out more.</p>
                            </div>
                        </div>
                    </div>
                    <FAQ />
                    <div className="col-lg-12 col-md-12 col-sm-12 feature-block  exchange-block mt_60">
                        <div className="whychoose_ImageCard">
                            <div className="whychoose_ImageCard_Child" style={{ gap: "20px" }}>
                                <h2>Need a car loan for your business?</h2>
                                <h3 style={{ fontSize: "31px", color: "var(--theme-color)" }}> Specialising in car loans for sole traders and other businesses.</h3>
                                <p style={{ fontSize: "17px" }}>Businesses looking for car finance have a range of options open to them. The most appropriate type of loan for each business' needs will depend on business structure, cash-flow requirements, GST registration status and tax considerations.</p>
                                <div className="form-group">
                                    {/* <Link to="/contactus#_form" className="theme-btn btn-one">Contact Us</Link> */}
                                    <Contactus btn1="btn-one" />
                                </div>
                            </div>
                            <div className="whychoose_ImageCard_Child_2">
                                <img src={womanbuyingcar} alt="" style={{ objectFit: "cover", borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }} />
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

export default CarLoan;
