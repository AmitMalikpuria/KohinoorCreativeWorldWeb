
import Menu from "./Menu"
import MobileMenu from './MobileMenu'
//import logo from '../../src/DDL_Logo2.png'
import logo from '../assets/images/logo/kohinoorlogo.png'

import { Link } from "react-router-dom"
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Contactus from "./Pages/DialogBox/Contactus";
import WhatsApp from "./Pages/Whatsapp/WhatsApp";


export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            <WhatsApp />
            <header className={`main-header header-style-one ${scroll ? "fixed-header" : ""}`}>
                {/* Header Top */}
                <div className="header-top">
                    <div className="large-container">
                        <div className="top-inner">
                            <ul className="info-list clearfix">

                            </ul>
                            <ul className="links-list clearfix">
                                <li><Link to="#" style={{ letterSpacing: "2px", fontFamily: "var(--manrope)" }}><LocalPhoneIcon style={{ fontSize: "18px", fontWeight: "800" }} />+91 7082392820</Link></li>
                                <li><Link to="#" style={{ letterSpacing: "2px", fontFamily: "var(--manrope)" }}><MailOutlineIcon /> kohinnoorcreativeworld@gmail.com</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="modified__border">

                </div>
                {/* Header lower */}
                <div className="header-lower nav_outerbox_background" style={{ backgroundColor: "var(--white-color)" }}>
                    <div className="large-container" >
                        <div className="outer-box">
                            <div className="logo-box" >
                                <div className="shape"></div>
                                <figure className="logo"><Link to="/"><img src={logo} alt="" className="logo_shape" /></Link></figure>
                               
                            </div>
                            <div className="menu-area">
                                {/* Mobile Navigation Toggler */}
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                                    <i className="icon-bar"></i>
                                    <i className="icon-bar"></i>
                                    <i className="icon-bar"></i>
                                </div>
                                <nav className="main-menu navbar-expand-md navbar-light clearfix">
                                    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent" style={{ marginRight: "20px" }}>
                                        <Menu />
                                    </div>
                                </nav>
                                <div className="menu-right-content ml_70">
                                    <Contactus btn1="_btn-one" name="Registration Form" />
                                    {/* <a href="/contact" className="theme-btn btn-one">Free Consultation</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*End Header lower*/}
                {/* Sticky Header  */}
                <div className={`sticky-header ${scroll ? "animated slideInDown borderbottom" : ""}`} style={{ display: "block" }}>
                    <div className="large-container">
                        <div className="outer-box">
                            <div className="logo-box">
                                <div className="shape"></div>
                                <figure className="logo"><Link to="/"><img src={logo} alt="" style={{ height: '39px', marginLeft: '69px', transform: 'scale(2)' }} /></Link></figure>
                                {/* <figure className="logo"><Link to="/" className="newLogo">
                                    <span style={{ fontSize: "35px", fontWeight: "900!important", letterSpacing: "1.5px", fontFamily: "var(--manrope)" }}>DDR</span>
                                    <span style={{ fontSize: "20px", fontWeight: "900", color: "var(--secondary-color)", letterSpacing: "1.5px", fontFamily: "var(--manrope)" }}>Dream Dwell Realtors</span><br />
                                </Link></figure> */}
                            </div>
                            <div className="menu-area">
                                <nav className="main-menu clearfix">
                                    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                        <Menu />
                                    </div>
                                </nav>
                                <div className="menu-right-content ml_70">
                                    <a href="/" className="theme-btn _btn-one">Registration Form</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Sticky Menu */}
                {/* Mobile Menu  */}

                <MobileMenu handleMobileMenu={handleMobileMenu} handleSidebar={handleSidebar} isSidebar={isSidebar} />
            </header>
        </>
    )
}
