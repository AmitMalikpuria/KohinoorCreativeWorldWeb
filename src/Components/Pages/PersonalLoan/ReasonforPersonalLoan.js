import React from "react";
import { Link } from "react-router-dom";

import homeimage from '../../../assets/images/service/home-renovate-min.jpg'
import debt from '../../../assets/images/service/debt-min.jpg'
import wedding from '../../../assets/images/service/wedding-min.jpg'
import holiday from '../../../assets/images/service/holiday-min.jpg'
import boat from '../../../assets/images/service/boat-min.jpg'
import './ReasonforPersonalLoan.css'

function ReasonforPersonalLoan() {
    return (
        <>
            <section className="card-section centred pb_90 mod_mt">
                <div className="pattern-layer">
                    <div className="pattern-1 rotate-me"></div>
                    <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}></div>
                </div>
                <div className="auto-container">
                    <div className="sec-title mb_40 mt_70">
                        <h2>Reasons to get a personal loan</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 card-block">
                            <div className="card-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box"><img src={homeimage} alt="" /></figure>
                                    <div className="lower-content">
                                        <h3>Renovate your home</h3>
                                        <p>Whether you need some extra space for the kids or you just want to give your home a facelift, renovating your current home is often much cheaper than buying a new one.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 card-block">
                            <div className="card-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box"><img src={debt} alt="" /></figure>
                                    <div className="lower-content">
                                        <h3>Consolidate your debt</h3>
                                        <p>If you are struggling to manage the debt on your credit cards, it might be worth your while to consolidate your debt into one personal loan at a lower interest rate. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 card-block">
                            <div className="card-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box"><img src={wedding} alt="" /></figure>
                                    <div className="lower-content">
                                        <h3>Help pay for a wedding</h3>
                                        <p>Weddings can be expensive, but that does not mean you should have to skimp on your big day. A personal loan can help make your wedding day one to remember.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 card-block">
                            <div className="card-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box"><img src={holiday} alt="" /></figure>
                                    <div className="lower-content">
                                        <h3>Take a holiday</h3>
                                        <p>Free up some extra funds for a much needed break and take the opportunity to travel the world.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 card-block">
                            <div className="card-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box"><img src={boat} alt="" /></figure>
                                    <div className="lower-content">
                                        <h3>A new boat</h3>
                                        <p>If you want to set sail on a new boat but you are falling a bit short on funds, a personal loan may be able to put you within reach of your marine dreams.</p>
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

export default ReasonforPersonalLoan;
