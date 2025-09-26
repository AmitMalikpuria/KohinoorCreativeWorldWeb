import React from "react";
import Layout from "../../Layout";
import { Link } from "react-router-dom";
import news25 from '../../../assets/images/news/news-25.jpg'
import about7 from '../../../assets/images/service/service-3.jpg';
import Contactus from "../DialogBox/Contactus";

function Hottest_Affordable_Suburbs() {
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
                                    <h2 style={{fontWeight:"100",fontSize:"45px",letterSpacing:"2px"}}>Hottest affordable suburbs to watch in 2024</h2><hr></hr>
                                    <p style={{fontWeight:"bolder"}}>Industry experts have predicted the suburbs set to outperform next year in the annual realestate.com.au Hot 100. We reveal the cheapest suburbs on the list.</p><hr></hr>
                                    <p>The end of the year is fast approaching, which means that many property seekers will take a well-earned break before resuming their search for a home in the new year.</p>
                                    <p>But where are the best suburbs to find an affordable home?</p>
                                    <p>To find out, realestate.com.au brought together a panel of industry experts – including the heads of major agency groups, buyer’s agents, researchers, investors and their own economists - to identify the suburbs to watch in the new year.</p>
                                    <p>Suburbs were nominated based on factors such as affordability, location, family appeal and investment and infrastructure projects.</p>
                                    <p>Of the top 100 suburbs on the list, Armadale in Perth had the most affordable houses based on median sale price.</p>
                                    
                                </div>
                            </div>
                        </div>                       
                        <div className="ImageCard" style={{}}>
                            <div className="ImageCard_Child" style={{gap:100}}>
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

export default Hottest_Affordable_Suburbs;
