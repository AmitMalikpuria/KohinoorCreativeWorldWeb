
'use client'

import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import PersonalLoanBanner from '../../../assets/images/banner/personalloanbanner.jpg'
import CarLoanBanner from '../../../assets/images/banner/CarLoanBanner.jpg'
import Building1 from '../../../assets/images/banner/Building1.jpg'
import Building2 from '../../../assets/images/banner/building2.jpg'
import Contactus from "../../Pages/DialogBox/Contactus";

// import Shape1 from '../../../assets/images/shape/shape-1.png';
// import Shape2 from '../../../assets/images/shape/shape-2.png';


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}

export default function Banner() {
    return (
        <>
            <section className="banner-section p_relative" >
                <Swiper {...swiperOptions} className="banner-carousel">
                    <SwiperSlide className="slide-item p_relative">
                        <div className="bg-layer" style={{ backgroundImage: `url(${Building1})` }}></div>
                        <div className="pattern-layer">
                            {/* <div className="pattern-1" style={{ backgroundImage: `url(${Shape1})` }}></div>
                            <div className="pattern-2" style={{ backgroundImage: `url(${Shape2})` }}></div> */}
                        </div>
                        {/* <div className="auto-container" style={{paddingTop:"0px!important"}}>
                            <div className="content-box">
                                <h2><span style={{  }}>Sell Smarter, Not Harder </span><br></br> Your Property, Our Priority </h2> <p> Experience real estate excellence with us. From finding the perfect home to navigating the buying process, we’re here to ensure your real estate journey is smooth, successful, and satisfying</p>
                                <div className="btn-box">
                                     <Contactus btn1="btn-one" name="GET A CONSULTATION" />
                                </div>
                            </div>
                        </div> */}
                        <div className="auto-container" style={{paddingTop:"0px!important"}}>
                            <div className="content-box">
                                <h2><span >Luxury & Premium</span><br></br> Residences </h2> <p> We know what a home is really worth Find homes to buy or rent and check house prices</p>
                                <div className="btn-box">
                                     <Contactus btn1="btn-one" name="GET A CONSULTATION" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item p_relative">
                        <div className="bg-layer" style={{ backgroundImage: `url(${Building2})` }}></div>
                        <div className="pattern-layer">
                            {/* <div className="pattern-1" style={{ backgroundImage: `url(${Shape1})` }}></div>
                            <div className="pattern-2" style={{ backgroundImage: `url(${Shape2})` }}></div> */}
                        </div>
                        <div className="auto-container">
                            <div className="content-box">
                                <h2><span >Your Property, Our Priority </span></h2> <p> Discover the perfect home for your family, from cozy apartments and spacious villas to modern townhouses. We offer a wide selection of fresh bookings and resale options to match your lifestyle and budget.</p>
                                <div className="btn-box">
                                    <Contactus btn1="btn-one" name="GET A CONSULTATION" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>


                    <div className="owl-nav">
                        <button type="button" className="owl-prev h1p">
                            <span className="icon-3"></span>
                        </button>
                        <button type="button" className="owl-next h1n">
                            <span className="icon-4"></span>
                        </button>
                    </div>
                </Swiper>

            </section>
        </>
    )
}

