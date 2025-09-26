import React from "react";
import Layout from '../../Layout';
import { Link } from "react-router-dom";
import TestimonialSlider1 from "../../../slider/TestimonialSlider01";
//import RakeshDahiya from '../../../assets/images/Members/RakeshDahiya.jpg'

import team1 from '../../../assets/images/team/avatar1.jpg'

function Directors() {
    return <Layout breadcrumbTitle="Board of Directors">
        <div>
            {/* Team-section */}
            <section className="team-section pt_120 pb_75">
                <div className="auto-container">
                    <div className="sec-title mb_70 centred">
                        <h6>Our People</h6>
                        <h2>Our Board Members</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                            <div
                                className="team-block-one wow fadeInUp animated"
                                data-wow-delay="00ms"
                                data-wow-duration="1500ms">
                                <Link to="/franchise-owner">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="" alt="" /></figure>
                                            <ul className="social-links clearfix">
                                                <li><Link ><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link ><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link ><i className="fab fa-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="lower-content">
                                            <h3><Link to="/franchise-owner">Rakesh Dahiya</Link></h3>
                                            <span className="designation">Franchise Owner Manager</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        {/* <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                            <div
                                className="team-block-one wow fadeInUp animated"
                                data-wow-delay="200ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src={team1} alt="" /></figure>
                                        <ul className="social-links clearfix">
                                            <li><Link href="/team"><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link href="/team"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link href="/team"><i className="fab fa-instagram"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="lower-content">
                                        <h3><Link href="/team-details">Guy Hawkins</Link></h3>
                                        <span className="designation">Co-Founder</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                            <div
                                className="team-block-one wow fadeInUp animated"
                                data-wow-delay="400ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src={team1} alt="" /></figure>
                                        <ul className="social-links clearfix">
                                            <li><Link href="/team"><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link href="/team"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link href="/team"><i className="fab fa-instagram"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="lower-content">
                                        <h3><Link href="/team-details">Bessie Cooper</Link></h3>
                                        <span className="designation">Chairman</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                            <div
                                className="team-block-one wow fadeInUp animated"
                                data-wow-delay="600ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src={team1} alt="" /></figure>
                                        <ul className="social-links clearfix">
                                            <li><Link href="/team"><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link href="/team"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link href="/team"><i className="fab fa-instagram"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="lower-content">
                                        <h3><Link href="/team-details">Devon Lane</Link></h3>
                                        <span className="designation">Vice Chairman</span>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
            {/* Team-section end */}

            {/* testimonial-style-two */}
            <section className="testimonial-style-two pt_120 pb_120">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-12 col-sm-12 title-column">
                            <div className="sec-title mr_70">
                                <h6>Testimonials</h6>
                                <h2>Love from Happy Clients</h2>
                                <p>Amet dui scelerisque habitant eget tincidunt facilisis pretium lorem ipsum dilore. </p>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                            <div className="content-box">
                                {/*Theme Carousel*/}
                                <TestimonialSlider1 />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* testimonial-style-two end */}


        </div>

    </Layout>;
}

export default Directors;
