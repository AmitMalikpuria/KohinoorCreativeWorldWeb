'use client'

import { useState } from "react"
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import HardwareIcon from '@mui/icons-material/Hardware';

import servicebg from '../../../assets/images/background/service-bg.jpg';
import { Link } from "react-router-dom";


export default function Pricing() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <section className="service-section pt_120 pb_90">
                <div className="bg-layer" style={{ backgroundImage: `url(${servicebg})` }}></div>
                <div className="auto-container">
                    <div className="sec-title centred mb_60">
                        <h2>Why Buy With Us</h2>
                        <h6 className="mt_20">Our Services</h6>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-3 col-sm-12 service-block">
                            <div className="service-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="shape"></div>
                                    <div className="icon-box"><HandshakeIcon style={{ fontSize: "50px", textAlign: "center" }} /></div>
                                    <h4 style={{ fontWeight: "700!important" }}>Real Estate Consultation</h4>
                                    <ul className="list-item clearfix">
                                        <p>Your trusted source for expert real estate consultation: Personalized guidance, in-depth market analysis, accurate property evaluations, strategic investment advice, and smooth buying/selling processes.</p>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 service-block">
                            <div className="service-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="shape"></div>
                                    <div className="icon-box"><SupervisedUserCircleIcon style={{ fontSize: "50px" }} /></div>
                                    <h4>NRI Services</h4>
                                    <ul className="list-item clearfix">
                                        <p>Simplify NRI property ownership with our comprehensive management, legal, investment, and tax assistance.</p>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 service-block">
                            <div className="service-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="shape"></div>
                                    <div className="icon-box"><SupportAgentIcon style={{ fontSize: "50px" }} /></div>
                                    <h4>After Sales Assistance</h4>
                                    <ul className="list-item clearfix">
                                        <p>Comprehensive after-sales service: documentation, property care, legal support, problem solving, and long-term assistance.</p>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 service-block">
                            <div className="service-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="shape"></div>
                                    <div className="icon-box"><HardwareIcon style={{ fontSize: "50px" }} /></div>
                                    <h4>Legal Consultation</h4>
                                    <ul className="list-item clearfix">
                                       <p>Expert legal guidance for property: laws, documents, disputes, compliance, contracts, and transactions.</p>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one wow fadeInUp animated" data-wow-delay="900ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="shape"></div>
                                    <div className="icon-box"><i className="icon-15"></i></div>
                                    <h4><a href="/service-details-4">Home & Property Loan</a></h4>
                                    <ul className="list-item clearfix">
                                        <li>Residential Mortgages</li>
                                        <li>Buy-to-let Mortgages</li>
                                        <li>Building Mortgages</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="shape"></div>
                                    <div className="icon-box"><i className="icon-16"></i></div>
                                    <h4><a href="/service-details-5">All Bank Account</a></h4>
                                    <ul className="list-item clearfix">
                                        <li>Instant Access Savings</li>
                                        <li>Instant Access Cash</li>
                                        <li>Young Savers Account</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="shape"></div>
                                    <div className="icon-box"><i className="icon-17"></i></div>
                                    <h4><a href="/service-details-6">borrowing accounts</a></h4>
                                    <ul className="list-item clearfix">
                                        <li>House loan</li>
                                        <li>Setter personal loan</li>
                                        <li>Overdraft</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="shape"></div>
                                    <div className="icon-box"><i className="icon-18"></i></div>
                                    <h4><a href="/service-details-7">Private Banking</a></h4>
                                    <ul className="list-item clearfix">
                                        <li>Dedicated personal service</li>
                                        <li>Specialist teams</li>
                                        <li>Tailored products</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one wow fadeInUp animated" data-wow-delay="900ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="shape"></div>
                                    <div className="icon-box"><i className="icon-19"></i></div>
                                    <h4><a href="/service-details-8">Fixed term accounts</a></h4>
                                    <ul className="list-item clearfix">
                                        <li>Fixed Term Saving</li>
                                        <li>Fixed Rate Cash</li>
                                        <li>Resume your Current</li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}
