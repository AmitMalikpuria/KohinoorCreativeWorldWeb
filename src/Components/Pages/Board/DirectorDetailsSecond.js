import React from "react";
import Layout from "../../Layout";
import { Link } from "react-router-dom";
import avatar from '../../../assets/images/team/avatar1.jpg'
import shape3 from '../../../assets/images/shape/shape-3.png'
import shape11 from '../../../assets/images/shape/shape-11.png'
import Ritesh from '../../../assets/images/Owner/Ritesh.jpg'
import Testimonial from "../HomePage/Testimonial";


function DirectorDetailsSecond() {
    return <section className="team-details pt_30 ">
        <div className="auto-container">
            <div className="row clearfix">
                

                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                    <div className="image_block_three">
                        <div className="image-box pl_80">
                            <div className="image-shape">
                                {/* <div className="shape-1" style={{ backgroundImage: `url(${shape3})` }}></div> */}
                                <div className="shape-2" style={{ backgroundImage: `url(${shape11})` }}></div>
                            </div>
                            <figure className="image">
                                <img src={Ritesh} alt="" />
                            </figure>
                            {/* <div className="experience-box">
                                <div className="inner">
                                    <h2>
                                        10+<span>Years</span>
                                    </h2>
                                    <h5>of Experience </h5>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                    <div className="content-box mr_25">
                        <h2 style={{ color: "var(--theme-color)" }}>Ritesh Saini</h2>
                        {/* <span className="designation">Property Broker</span> */}
                        {/* <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo semila diam et, sollicitudin eget. Tellus
                                    velit etiam elit, mi pretium eu. Suspendisse imperdiet enim ornare elit, eu vestibulum enim imperdiet
                                    viverra.
                                </p>
                                <figure className="signature">
                                    <img src={signature} alt="" />
                                </figure> */}
                        <h3>Contact Details</h3>
                        <ul className="info-list mb_30 clearfix">
                            <li>
                                <span>Deals In:</span>  <Link> Residential, Commercial, Plot Lands, Fresh Bookings, Resale, Rent</Link>
                            </li>
                            <li>
                                <span>Email:</span> <Link href="mailto:sainiritesh704@gmail.com">sainiritesh704@gmail.com</Link>
                            </li>
                            <li>
                                <span>Phone:</span> <Link href="tel:919958425477">+91 9958425477
                                </Link>
                            </li>
                        </ul>
                        {/* <ul className="social-links clearfix">
                            <li>
                                <Link href="/team-details">
                                    <i className="fab fa-facebook-f"></i>
                                </Link>
                            </li>
                            <li>
                                <Link href="/team-details">
                                    <i className="fab fa-twitter"></i>
                                </Link>
                            </li>
                            <li>
                                <Link href="/team-details">
                                    <i className="fab fa-instagram"></i>
                                </Link>
                            </li>
                        </ul> */}
                        {/* <h3 className="mt_30">Business Hours</h3>
                        <ul className="info-list mb_30 clearfix">
                            <li>
                                <span>MONDAY:</span>  9AM - 5PM
                            </li>                            
                            <li>
                                <span>TUESDAY:</span>  9AM - 5PM
                            </li>
                            <li>
                                <span>WEDNESDAY:</span>  9AM - 5PM
                            </li>
                            <li>
                                <span>THRUSDAY:</span>  9AM - 5PM
                            </li>
                            <li>
                                <span>FRIDAY:</span>  9AM - 5PM
                            </li>
                            <li>
                                <span>SATURDAY:</span>  CLOSED
                            </li>
                            <li>
                                <span>SUNDAY:</span>  CLOSED
                            </li>
                           
                        </ul> */}
                        {/* <div className="form-group mt_50">
                            <Link to="/contactus#_form" className="theme-btn btn-one">Contact Us</Link>
                        </div> */}
                    </div>
                </div>

            </div>
        </div>
    </section>
}

export default DirectorDetailsSecond;
