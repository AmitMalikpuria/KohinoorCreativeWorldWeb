// 'use client'
import React, { useEffect, useState } from "react";
import BackToTop from "./BackToTop";
import DataBg from "./DataBg";
import Breadcrumb from "./Breadcrumb";
import SearchPopup from "./SearchPopup";
import Sidebar from "./Sidebar";
import Header1 from './Header1';
import Footer1 from './Footer1';

import HomePage from "./Pages/HomePage.js";

// import { inter, manrope } from '../font'

import '../../node_modules/react-modal-video/css/modal-video.css'
import 'swiper/css'
import "swiper/css/pagination"
import 'swiper/css/free-mode';


import '../assets/css/color/crimson.css';
import '../assets/css/color/orange.css';
import '../assets/css/color/pink.css';
import '../assets/css/color/theme-color.css';
import '../assets/css/color/violet.css';

import '../../src/assets/css/module-css/about.css';
import '../../src/assets/css/module-css/apps.css';
import '../../src/assets/css/module-css/banner.css';
import '../../src/assets/css/module-css/blog-details.css';
import '../../src/assets/css/module-css/calculator.css';
import '../../src/assets/css/module-css/card.css';
import '../../src/assets/css/module-css/career-details.css';
import '../../src/assets/css/module-css/career.css';
import '../../src/assets/css/module-css/contact.css';
import '../../src/assets/css/module-css/error.css';
import '../../src/assets/css/module-css/exchange.css';
import '../../src/assets/css/module-css/faq.css';
import '../../src/assets/css/module-css/feature.css';
import '../../src/assets/css/module-css/funfact.css';
import '../../src/assets/css/module-css/news.css';
import '../../src/assets/css/module-css/page-title.css';
import '../../src/assets/css/module-css/process.css';
import '../../src/assets/css/module-css/requirements.css';
import '../../src/assets/css/module-css/service.css';
import '../../src/assets/css/module-css/sidebar.css';
import '../../src/assets/css/module-css/subscribe.css';
import '../../src/assets/css/module-css/team-details.css';
import '../../src/assets/css/module-css/team.css';
import '../../src/assets/css/module-css/testimonial.css';
import '../../src/assets/css/module-css/video.css';

import '../../src/assets/css/animate.css';
import '../../src/assets/css/bootstrap.css';
import '../../src/assets/css/color.css';
import '../../src/assets/css/elpath.css';
import '../../src/assets/css/flaticon.css';
import '../../src/assets/css/font-awesome-all.css';
import '../../src/assets/css/jquery.fancybox.min.css';
import '../../src/assets/css/nice-select.css';
import '../../src/assets/css/animate.css';
import '../../src/assets/css/owl.css';
import '../../src/assets/css/rtl.css';
import '../../src/assets/css/style.css';
import '../../src/assets/css/switcher-style.css';
import { handleScrollToTop } from "./Pages/Calculator/Helper.js";


function Layout({ headerStyle, footerStyle, headTitle, breadcrumbTitle, children, wrapperCls,breadcrumbBanner }) {
    console.log("header", headerStyle);
    const [scroll, setScroll] = useState(0);
    // Mobile Menu
    const [isMobileMenu, setMobileMenu] = useState(false);
    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu);
        !isMobileMenu ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible");
    }

    // Popup
    const [isPopup, setPopup] = useState(false);
    const handlePopup = () => setPopup(!isPopup);

    // Sidebar
    const [isSidebar, setSidebar] = useState(false);
    const handleSidebar = () => setSidebar(!isSidebar);

    useEffect(() => {
        const WOW = require('wowjs');
        window.wow = new WOW.WOW({
            live: false
        });
        window.wow.init();

        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
    }, []);

    useEffect(() => {
        handleScrollToTop();
    }, [])

    return (<>
        <DataBg />
        <div className={`page-wrapper ${wrapperCls ? wrapperCls : ""}`} id="#top">
            {!headerStyle && <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} />}
            {headerStyle == 1 ? <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} /> : null}
            {/*{headerStyle == 2 ? <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} /> : null}
                    {headerStyle == 3 ? <Header3 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} /> : null}
     */}
            <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />
            {/* <SearchPopup isPopup={isPopup} handlePopup={handlePopup} /> */}

            {breadcrumbTitle && breadcrumbBanner && <Breadcrumb breadcrumbTitle={breadcrumbTitle} breadcrumbBanner={breadcrumbBanner} />}

            {children}

            {!footerStyle && <Footer1 />}
            {/* {footerStyle == 1 ? <Footer1 /> : null}
                    {!footerStyle && <Footer2 />}
                    {footerStyle == 2 ? <Footer2 /> : null} */}
        </div>
        <BackToTop scroll={scroll} />
    </>
    )
}

export default Layout;