import React from "react";
import Layout from '../../Layout';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import RoofingIcon from '@mui/icons-material/Roofing';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import Groups2Icon from '@mui/icons-material/Groups2';
import img10 from '../../../assets/images/Projects/MRG/mrg10.jpg';
import Contactus from "../DialogBox/Contactus";

import img1 from '../../../assets/images/Projects/MRG/mrg1.jpg';
import img2 from '../../../assets/images/Projects/MRG/mrg2.jpg';
import img3 from '../../../assets/images/Projects/MRG/mrg3.jpg';
import img4 from '../../../assets/images/Projects/MRG/mrg4.jpg';
import img5 from '../../../assets/images/Projects/MRG/mrg5.jpg';
import img6 from '../../../assets/images/Projects/MRG/mrg6.jpg';
import img7 from '../../../assets/images/Projects/MRG/mrg7.jpg';
import img8 from '../../../assets/images/Projects/MRG/mrg8.jpg';
import img9 from '../../../assets/images/Projects/MRG/mrg9.jpg';
import img11 from '../../../assets/images/Projects/MRG/mrg11.jpg';


function MRGCrown() {
    const [isGalleryOpen, setIsGalleryOpen] = React.useState(false);

    return <Layout>
        <section className="about-style-two _about-style-two pt_10 pb_70">
            <div className="auto-container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12 col-sm-12 image-column">
                        <div className="image_block_two">
                            <div className="image-box">
                                <div className="image-shape">
                                    <div className="shape-3" style={{ backgroundImage: "url(assets/images/shape/shape-11.png)" }}></div>
                                    <div className="shape-4" style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}></div>
                                </div>
                                <figure className="image">
                                    <img src={img10} alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 col-sm-12 content-column">
                        <div className="content_block_three">
                            <div className="content-box ">
                                <div className="sec-title">
                                    <h2 className="pb_10">THE CROWN OF DWARKA EXPRESSWAY</h2>
                                    <h3 style={{ color: "var(--theme-color)" }}>MRG CROWN</h3>
                                </div>
                                <div className="text-box mt_10 mb_40">
                                    <p>
                                        Developed by <span style={{ color: "var(--theme-color)" }}> MRG Group</span>
                                    </p>
                                    <ul className="list-style-one clearfix"  >
                                        <li ><LocationOnIcon />&nbsp; Location : Sector 106, Gurugram, Dwarka Expressway </li>
                                        <li><DomainAddIcon />&nbsp; Property Type : 3BHK Residential</li>
                                        <li><RoofingIcon />&nbsp; Status : Under Construction</li>
                                        <li><CurrencyRupeeIcon />&nbsp; Starting from ₹2.29 crore</li>
                                        <li><FullscreenIcon />&nbsp; Size : 3 BHK units ranging from 1,359 sq.ft to 1,593 sq.ft</li>
                                        <li><Groups2Icon />&nbsp; Amenities : Clubhouse, Swimming Pool, Gymnasium , Badminton, Squash & More</li>
                                        <li><AddRoadIcon />&nbsp; Connectivity : IGI Airport & Other Highways Connectivity (0 to 20 Minutes)</li>
                                    </ul>
                                </div>
                                <div className="btn-box">
                                    <Contactus btn1="btn-one" name="Enquire Now" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <section className="career-details pt_0 pb_60 _career-details">
            <div className="auto-container">
                <div className="row clearfix">
                    {/* <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                        <div className="career-sidebar ml_40">
                            <h4>Information</h4>
                            <ul className="info-list clearfix">
                                <li>
                                    <i className="icon-22"></i>
                                    <h6>Salary</h6>
                                </li>
                                <li>
                                    <i className="icon-36"></i>
                                    <h6>Application Period</h6>
                                    <p>12 Jun 2023 - 25 July 2023</p>
                                </li>
                                <li>
                                    <i className="icon-37"></i>
                                    <h6>Experience</h6>
                                    <p>At least 05 years in Banking</p>
                                </li>
                                <li>
                                    <i className="icon-34"></i>
                                    <h6>Job Location</h6>
                                    <p>Manhattan, New York, USA</p>
                                </li>
                                <li>
                                    <i className="icon-32"></i>
                                    <h6>Age Limit</h6>
                                    <p>Age 25 to 32 years old</p>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                    <div className="col-lg-12 col-md-12 col-sm-12 content-side">
                        <div className="career-details-content">
                            <div className="content-one mb_40">
                                <span style={{ marginBottom: "0px" }}>THE CROWN OF DWARKA EXPRESSWAY</span>
                                <h2 className="pb_20" style={{ color: "var(--theme-color)" }}>MRG CROWN</h2>

                                <h3>Project Overview</h3>
                                <p>MRG Crown is a luxury residential project located in Sector 106, Gurugram, along the Dwarka Expressway. Developed by MRG Group, this project offers 3 BHK independent luxury floors designed to provide a blend of comfort and modern amenities</p>
                                <ol className="list-style-one clearfix new-list-stype-one" style={{ listStyleType: "disc", color: "black" }}>
                                    <li><strong>Location: Sector 106, Gurugram, Dwarka Expressway</strong></li>
                                    <li>Type: Low-rise luxury floors</li>
                                    <li><strong>Configuration: 3 BHK units</strong></li>
                                    <li>Total Area: Approximately 8.5 acres</li>
                                    <li><strong>Number of Units: Around 460 units across 3 towers with 4 floors each</strong></li>
                                </ol>
                            </div>
                            <div className="content-two mb_40">
                                <h3>Unit Sizes</h3>
                                <ol className="list-style-one clearfix new-list-stype-one" >
                                    <li><strong>  3 BHK units ranging from 1,359 sq.ft to 1,593 sq.ft</strong></li>
                                </ol>
                            </div>
                            <div className="content-two mb_40">
                                <h3>Amenities</h3>
                                <ol className="list-style-one clearfix new-list-stype-one" >
                                    <li>22,000 sq.ft clubhouse</li>
                                    <li>1.5-acre dedicated green area</li>
                                    <li>Half Olympic-sized swimming pool</li>
                                    <li>Gymnasium </li>
                                    <li>Badminton and squash courts</li>
                                    <li>Billiards and table tennis facilities</li>
                                    <li>Yoga and meditation areas</li>
                                    <li>Kid’s pool and aerobics center</li>
                                </ol>
                            </div>
                            <div className="content-two mb_40">
                                <h3>Gallery</h3>
                                <button className="theme-btn btn-two pt_10" style={{ borderRadius: "5px", fontSize: "18px", padding: "10px 15px 10px 15px" }} onClick={() => setIsGalleryOpen(!isGalleryOpen)}>{isGalleryOpen ? "Close" : "View"} </button>
                                {
                                    isGalleryOpen && (
                                        <div className="row align-items-center pt_10">
                                            <div className="col-lg-3 col-md-6 col-sm-12 image-column pb_30">
                                                <img src={img1} alt="" style={{ width: "100%", height: "auto" }} />
                                            </div>
                                            <div className="col-lg-3 col-md-6 col-sm-12 image-column pb_30">
                                                <img src={img2} alt="" style={{ width: "100%", height: "auto" }} />
                                            </div>
                                            <div className="col-lg-3 col-md-6 col-sm-12 image-column pb_30">
                                                <img src={img3} alt="" style={{ width: "100%", height: "auto" }} />
                                            </div>
                                            <div className="col-lg-3 col-md-6 col-sm-12 image-column pb_30">
                                                <img src={img4} alt="" style={{ width: "100%", height: "auto" }} />
                                            </div>
                                            <div className="col-lg-3 col-md-6 col-sm-12 image-column pb_30">
                                                <img src={img5} alt="" style={{ width: "100%", height: "auto" }} />
                                            </div>
                                            <div className="col-lg-3 col-md-6 col-sm-12 image-column pb_30">
                                                <img src={img6} alt="" style={{ width: "100%", height: "auto" }} />
                                            </div>
                                            <div className="col-lg-3 col-md-6 col-sm-12 image-column pb_30">
                                                <img src={img7} alt="" style={{ width: "100%", height: "auto" }} />
                                            </div>
                                            <div className="col-lg-3 col-md-6 col-sm-12 image-column pb_30">
                                                <img src={img8} alt="" style={{ width: "100%", height: "auto" }} />
                                            </div>
                                        </div>
                                    )
                                }


                            </div>
                            <div className="content-two mb_40">
                                <h3>Key Features</h3>
                                <ol className="list-style-one clearfix new-list-stype-one" >
                                    <li><strong>Private car parking and office space</strong></li>
                                    <li><strong>Fully modular kitchen</strong></li>
                                    <li>Vastu-compliant architecture</li>
                                    <li><strong>EV charging stations</strong> </li>
                                    <li>VRV air conditioning in all rooms</li>
                                    <li><strong>Terrace space for each unit</strong></li>
                                </ol>
                            </div>
                            <div className="content-two mb_40">
                                <h3>Connectivity</h3>
                                <ol className="list-style-one clearfix new-list-stype-one" >
                                    <li>0 km from Dwarka Expressway</li>
                                    <li>5 minutes to Palam Vihar and Ansal Plaza</li>
                                    <li>10 minutes to Dwarka and Radisson Blu Hotel  </li>
                                    <li><strong>15 minutes to IGI Airport and Aerocity </strong></li>
                                    <li>20 minutes to Cybercity and Udyog Vihar</li>
                                </ol>
                            </div>
                            <div className="content-two mb_40">
                                <h3>Pricing</h3>
                                <ol className="list-style-one clearfix new-list-stype-one" >
                                    <li>Prices for <strong> 3 BHK Units</strong> start from approximately<strong> ₹2.29 crore</strong>, varying based on the unit size and specific configurations.</li>
                                </ol>
                            </div>
                            <div className="content-two mb_40">
                                <h3>Possession Date</h3>
                                <ol className="list-style-one clearfix new-list-stype-one" >
                                    <li><strong>The project is currently under construction, with possession expected by August 2026.</strong></li>
                                </ol>
                            </div>
                            <div className="content-two mb_40">
                                <p>For more detailed information, including brochures and floor plans, you can visit the official MRG Group website or contact their sales team directly.</p>
                                <Contactus btn1="btn-one" name="Contact with our Team" />
                            </div>
                            {/* <div className="content-four">
                                <div className="btn-box"><a href="#" className="theme-btn btn-one">Apply For Job</a></div>
                                <ul className="social-as clearfix">
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                </ul>
                            </div> */}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </Layout>;
}

export default MRGCrown;
