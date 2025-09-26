import React from "react";
import Layout from "../../Layout";
import { Link } from "react-router-dom";
import news25 from '../../../assets/images/news/news-25.jpg'
import about7 from '../../../assets/images/service/service-3.jpg';
import Contactus from "../DialogBox/Contactus";

function PropertyMarket() {
    return <Layout >
        {/* sidebar-page-container */}
        <section className="sidebar-page-container pt_80 pb_120">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12 content-side">
                        <div className="blog-details-content">
                            <div className="news-block-three">
                                <div className="inner-box">
                                    {/* <figure className="image-box" ><img src={news25} alt="" style={{height:"20rem", width:"40rem"}} /></figure> */}
                                    <div className="lower-content">
                                        {/* <div className="post-date"><h4>14<span>Jan</span></h4></div> */}
                                        {/* <ul className="post-info mb_15">
                                        <li><i className="icon-32"></i><Link href="/blog-details">Admin</Link></li>
                                        <li><i className="icon-33"></i>3 Comment</li>
                                    </ul> */}
                                        <h2 style={{ fontWeight: "100", fontSize: "45px", letterSpacing: "2px" }}>What to expect from the property market in 2024</h2><hr></hr>
                                        <p style={{ fontWeight: "bolder" }}>For housing, the big question on everyone's mind is whether the property price gains seen in 2023 will continue in 2024.</p>
                                        <p style={{ fontWeight: "bolder" }}>While there are many uncertainties, we do see national home prices ending the year higher, though the outlook varies widely between states.</p><hr></hr>
                                    </div>
                                </div>
                            </div>
                            <div className="content-one pb_20">
                                <div className="text-box mb_50">
                                    <h2>The current state of the market</h2>
                                    <p>From January to November 2023, national property prices increased by 5.5%. Capital city prices were 6.6% higher and regional prices were 2.8% higher. An outcome not many expected after 2022’s fast falls.</p>
                                    <p>Over the year, house prices have risen at a moderately faster pace than unit prices, with increases of 5.6% and 5.0%, respectively. It should be noted that capital city house prices are rising faster (6.9%) than units (5.3%).</p>
                                    <p>The trend is reversed in regional markets, with stronger unit price growth (4.2%) than houses (2.5%).</p>
                                    <p>While prices have continued to rise, the rate of price growth has slowed over recent months.</p>
                                    <p>This slowing has likely been driven by the lift in new listings on realestate.com.au which is giving buyers more choice and reducing competition, while affordability remains stretched. </p>
                                    <p>With this year’s sustained price rises and stronger homebuying demand environment, market conditions are firmer and confidence amongst both buyers and sellers is up relative to the same time last year.</p>
                                </div>
                            </div>
                            <div className="content-one pb_20">
                                <div className="text-box mb_50">
                                    <h2>What to expect in 2024</h2>
                                    <p>Home prices are expected to continue rising in 2024, though the pace of growth is set to keep slowing.</p>
                                    <p>It’s one reason why it’s likely the cash rate has peaked in this current tightening cycle, with interest rates set to hold steady at this higher level for the foreseeable future.</p>
                                    <p>In addition to supporting factors like record net overseas migration, tight rental markets, low unemployment, and home equity gains, from the middle of 2024 we’ll see the commencement of stage three tax cuts, which are most beneficial for higher income earners. This could lead to increased demand for higher priced housing.</p>
                                    <p>A higher share of borrowers with large deposits is one reason why prices in 2023 have been so resilient to higher interest rates. Many in the market in 2023 were upgrade buyers taking advantage of large equity boosts from the pandemic boom, which saw prices increase 36% since early 2020.</p>
                                </div>
                            </div>
                            <div className="ImageCard" style={{}}>
                                <div className="ImageCard_Child" style={{ gap: 100 }}>
                                    {/* <h1>About Amber Loans</h1> */}
                                    <h5>Don't miss out, places in the scheme are limited! To find out how you can apply contact your local Amber Loans broker today.</h5>
                                    <div className="form-group">
                                        {/* <Link to="/contactus#_form" className="theme-btn btn-three">Contact Us</Link> */}
                                        <Contactus btn1="btn-three"/>
                                    </div>
                                </div>
                                <div className="ImageCard_Child_2">
                                    <img src={about7} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        {/* sidebar-page-container end */}



    </Layout>
}

export default PropertyMarket;
