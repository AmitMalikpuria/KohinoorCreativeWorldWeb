import shape8 from '../assets/images/shape/shape-8.png';
import shape9 from '../assets/images/shape/shape-9.png';
//import logo2 from '../../src/DDL_Logo2.png';
import logo2 from '../assets/images/logo/kohinoorlogo.png';
import { Link } from 'react-router-dom';
import { handleScrollToTop } from '../Components/Pages/Calculator/Helper.js';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Footer1() {
    return (
        <>
            <footer className="main-footer">
                <div className="widget-section">
                    <div className="pattern-layer">
                        <div className="pattern-1" style={{ backgroundImage: `url(${shape8})` }}></div>
                        <div className="pattern-2" style={{ backgroundImage: `url(${shape9})` }}></div>
                    </div>
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-3 col-12-6 col-sm-12 footer-column">
                                <div className="footer-widget logo-widget">
                                    <figure className="footer-logo"><Link to="/"><img src={logo2} alt="" className='footer_logo' /></Link></figure>
                                    {/* <figure className="footer-logo">
                                        <Link to="/" className="newLogo" style={{ padding: "10px 10px", backgroundColor: "var(--white-color)", borderRadius: "5px" }} onClick={handleScrollToTop} >
                                            <span style={{ fontSize: "35px", fontWeight: "900!important", letterSpacing: "1.5px", fontFamily: "var(--manrope)", color: "var(--theme-color)", scale: "0.8", paddingTop: "27px", paddingRight: "10px" }}>DDR</span>
                                            <span style={{ fontSize: "20px", fontWeight: "900", color: "var(--secondary-color)", letterSpacing: "1.5px", fontFamily: "var(--manrope)" }}>Dream Dwell Realtors</span>
                                        </Link>
                                    </figure> */}
                                    <p style={{ fontFamily: "var(--manrope)", fontWeight: "300" }}>Kohinnoor Creative World is an initiative to explore and celebrate the creative legacy of Haryana and its rich folk culture. </p>
                                    <ul className="social-links">
                                        <li>
                                            <a href="https://wa.me/917082392820?text=Hii%20Kohinoor..." target="_blank">
                                                <WhatsAppIcon style={{ fontSize: "20px" }} />
                                            </a>
                                        </li>
                                        <li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                        {/* <li><a href="https://www.facebook.com/profile.php?id=61574474723252#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><Link to="/"><i className="fab fa-twitter"></i></Link></li> */}
                                        
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-12 footer-column">
                                <div className="footer-widget links-widget ml_40">
                                    <div className="widget-title">
                                        <h4 style={{ color: "var(--theme-color)" }}>Explore</h4>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="links-list clearfix">
                                            <li><Link to="/" onClick={handleScrollToTop}>Home</Link></li>
                                            <li><Link to="/" onClick={handleScrollToTop}>About Us</Link></li>
                                            <li><Link to="/" onClick={handleScrollToTop}>Contact Us</Link></li>
                                            <li><Link to="/" onClick={handleScrollToTop}>Privacy Policy</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12 footer-column">
                                <div className="footer-widget links-widget">
                                    <div className="widget-title">
                                        <h4 style={{ color: "var(--theme-color)" }}>Address</h4>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="links-list clearfix" style={{ listStyleType: "none" }}>
                                            <p><Link to="tel:919929800823"><LocalPhoneIcon />&nbsp; +91 7082392820</Link></p>
                                            <p><Link to="mailto:Yadavpushpender22@gmail.com"><MailOutlineIcon />&nbsp; kohinnoorcreativeworld@gmail.com</Link></p>
                                            <p><Link onClick={handleScrollToTop}><LocationOnIcon />&nbsp; 2106/7, Hanuman Colony, Rohtak <br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Haryana, 124001</Link></p>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget contact-widget">
                                    <div className="widget-title">
                                        <h4 style={{ color: "var(--theme-color)" }}>Our Location</h4>
                                    </div>
                                    <div className="form-inner">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3492.6285035607593!2d76.58438892505625!3d28.909385571455545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d85977c135d3d%3A0x49128b05e3713f9d!2sHanuman%20Colony!5e0!3m2!1sen!2sin!4v1758878267580!5m2!1sen!2sin" height={200} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom centred">
                    <div className="auto-container">
                        <div className="copyright"><p>Copyright 2025 by <Link to="/" onClick={handleScrollToTop}>KohinoorCreativeWorld</Link>. All Right Reserved.</p></div>
                    </div>
                </div>
            </footer>


        </>
    )
}
