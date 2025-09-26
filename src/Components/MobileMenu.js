'use client'

import { useState, } from "react";
import { Link, useNavigate } from "react-router-dom";
//import logo from "../../src/DDL_Logo2.png";
import logo from "../assets/images/logo/kohinoorlogo.png";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {

    const navigate = useNavigate();

    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
        subMenuKey: "",
    });

    const [isMobileMenu, setMobileMenu] = useState(false);
    function CloseSideMenu(event, url, value) {
        console.log("Value", value)
        event.preventDefault();
        value ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible");
        navigate(url);
    }

    const handleToggle = (key, subMenuKey = "") => {
        if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
            setIsActive({
                status: false,
                key: "",
                subMenuKey: "",
            });
        } else {
            setIsActive({
                status: true,
                key,
                subMenuKey,
            });
        }
    };

    return (
        <>
            <div className="mobile-menu" >
                <div className="menu-backdrop" onClick={handleMobileMenu} />
                <div className="close-btn" onClick={handleMobileMenu}><i className="fas fa-times"></i></div>
                <nav className="menu-box">
                    <div className="nav-logo" style={{backgroundColor:"var(--secondary-color)"}}>
                        <a onClick={(e) => CloseSideMenu(e, "/", setMobileMenu(true))} className="newLogo" style={{ paddingLeft: "0px", marginTop: "20px" }}>
                            <img src={logo} alt="" style={{ transform: "scale(1)" }} />
                            {/* <span style={{ fontSize: "35px", fontWeight: "900", letterSpacing: "1px", color: "var(--white-color)", scale: "0.8" }}>DDR</span>
                            <span style={{ fontSize: "20px", fontWeight: "700", color: "var(--white-color)", letterSpacing: "1px", scale: "0.8" }}>Dream Dwell Realtors</span><br /> */}
                        </a>
                    </div>
                    {/*menu-outer*/}
                    <div className="menu-outer">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix">
                                <li><a onClick={(e) => CloseSideMenu(e, "/", setMobileMenu(true))}>Home</a></li>
                                <li><a onClick={(e) => CloseSideMenu(e, "/", setMobileMenu(true))}>About Us</a></li>
                                <li className={isActive.key == 2 ? "dropdown current" : "dropdown"}><a href="#">Programs</a>
                                    <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                        <li><a onClick={(e) => CloseSideMenu(e, "/", setMobileMenu(true))}>Program 1</a></li>
                                    </ul>
                                    <div className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(2)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li><a onClick={(e) => CloseSideMenu(e, "/", setMobileMenu(true))}>Vision</a></li>
                                <li><a onClick={(e) => CloseSideMenu(e, "/", setMobileMenu(true))}>Event</a></li>
                                <li><a onClick={(e) => CloseSideMenu(e, "/", setMobileMenu(true))}>Story</a></li>
                                <li><a onClick={(e) => CloseSideMenu(e, "/", setMobileMenu(true))}>Contact Us</a></li>
                                <li><a onClick={(e) => CloseSideMenu(e, "/", setMobileMenu(true))}>Registration Form</a></li>

                            </ul>
                        </div>
                    </div>
                    {/*menu-outer end*/}
                    <div className="contact-info">
                        <h4>Contact Info</h4>
                        <ul>
                            <li>2106/7 HANUMAN COLONY,<br />
                                ROHTAK, HARYANA, 124001</li>
                            <li><LocalPhoneIcon style={{ fontSize: "18px" }} />&nbsp;<Link href="tel:+917082392820">+91 7082392820</Link></li>
                            <li><MailIcon style={{ fontSize: "18px" }} />&nbsp;<Link href="mailto:kohinnoorcreativeworld@gmail.com">kohinnoorcreativeworld@gmail.com</Link></li>
                        </ul>
                    </div>

                    {/*Social Links*/}
                    <div className="social-links">
                        <ul className="clearfix">
                            <li>
                                <a href="https://wa.me/917082392820?text=Hi%20Kohinoor..." target="_blank">
                                    <WhatsAppIcon style={{ fontSize: "23px" }} />
                                </a>
                            </li>
                            <li><a href="#" target="_blank">
                                <InstagramIcon style={{ fontSize: "23px" }}/>
                            </a>
                            </li>
                            <li><a href="#" target="_blank">
                                <FacebookIcon style={{ fontSize: "23px" }}/>
                            </a>
                            </li>
                            {/* <li><Link href="/"><span className="fab fa-twitter"></span></Link></li>
                            <li><Link href="/"><span className="fab fa-facebook-square"></span></Link></li>
                            <li><Link href="/"><span className="fab fa-pinterest-p"></span></Link></li>
                            <li><Link href="/"><span className="fab fa-instagram"></span></Link></li>
                            <li><Link href="/"><span className="fab fa-youtube"></span></Link></li> */}
                        </ul>
                    </div>
                </nav>
            </div>
            {/* End Mobile Menu */}
            <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />

        </>
    )
}
export default MobileMenu;
