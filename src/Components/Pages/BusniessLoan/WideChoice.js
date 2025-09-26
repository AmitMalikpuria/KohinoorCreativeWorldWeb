'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import img6 from '../../../assets/images/Businesschoice/BankSa.jpg'
import img7 from '../../../assets/images/Businesschoice/BetterChoice.jpg'
import img8 from '../../../assets/images/Businesschoice/Commonwealth.png'
import img9 from '../../../assets/images/Businesschoice/ImgBank.png'
import img10 from '../../../assets/images/Businesschoice/Liberty.jpg'
import img11 from '../../../assets/images/Businesschoice/Melbourn.jpg'
import img12 from '../../../assets/images/Businesschoice/Prospa.png'
import img13 from '../../../assets/images/Businesschoice/WestPac.jpg'
import img14 from '../../../assets/images/Businesschoice/pepermoney.jpg'
import img15 from '../../../assets/images/Businesschoice/suncorp.jpg'


import Testimonialimg from "../../../assets/images/background/testimonial-bg.jpg"

import { useEffect, useState } from "react"

function WideChoice() {

    const [slidesnumber, setslidesnumber] = useState(7)
    const [screenwidth, setscreenwidth] = useState(window.innerWidth)



    function getScreenWidth() {
        const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        if (width < 500) {
            setslidesnumber(4);
        }
    }

    useEffect(() => {
        getScreenWidth()
    }, [screenwidth])





    const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: slidesnumber,
        spaceBetween: 30,
        autoplay: {
            delay: 2000,
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

        breakpoints: {
            320: {
                slidesPerView: 7,
                // spaceBetween: 30,
            },
            575: {
                slidesPerView: 7,
                // spaceBetween: 30,
            },
            767: {
                slidesPerView: 7,
                // spaceBetween: 30,
            },
            991: {
                slidesPerView: 7,
                // spaceBetween: 30,
            },
            1199: {
                slidesPerView: 7,
                // spaceBetween: 30,
            },
            1350: {
                slidesPerView: 7,
                // spaceBetween: 30,
            },
        }
    }

    return (
        <section className="testimonial-section centred pt_60 pb_60 mb_60">
            <div className="bg-layer" style={{ backgroundImage: `url(${Testimonialimg})` }}></div>
            <div className="auto-container">
                <div className="sec-title mb_50 compare_mb">
                    <h2>A wide choice of commercial finance lenders</h2>
                </div>
                <div className="content-box">
                    <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                        <SwiperSlide className="slide">

                            <div className="inner-box">
                                <figure className="thumb-box"><img className="imgcompanies" style={{ borderRadius: "0px" }} src={img6} alt="" /></figure>
                            </div>

                        </SwiperSlide>

                        <SwiperSlide className="slide" >

                            <div className="inner-box">
                                <figure className="thumb-box"><img className="imgcompanies" style={{ borderRadius: "0px" }} src={img7} alt="" /></figure>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide className="slide" >

                            <div className="inner-box">
                                <figure className="thumb-box"><img className="imgcompanies" style={{ borderRadius: "0px" }} src={img8} alt="" /></figure>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide className="slide" >

                            <div className="inner-box">
                                <figure className="thumb-box"><img className="imgcompanies" style={{ borderRadius: "0px" }} src={img9} alt="" /></figure>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide className="slide" >

                            <div className="inner-box">
                                <figure className="thumb-box"><img className="imgcompanies" style={{ borderRadius: "0px" }} src={img10} alt="" /></figure>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide className="slide" >

                            <div className="inner-box">
                                <figure className="thumb-box"><img className="imgcompanies" style={{ borderRadius: "0px" }} src={img11} alt="" /></figure>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide className="slide" >

                            <div className="inner-box">
                                <figure className="thumb-box"><img className="imgcompanies" style={{ borderRadius: "0px" }} src={img12} alt="" /></figure>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide className="slide" >

                            <div className="inner-box">
                                <figure className="thumb-box"><img className="imgcompanies" style={{ borderRadius: "0px" }} src={img13} alt="" /></figure>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide className="slide" >

                            <div className="inner-box">
                                <figure className="thumb-box"><img className="imgcompanies" style={{ borderRadius: "0px" }} src={img14} alt="" /></figure>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide className="slide" >

                            <div className="inner-box">
                                <figure className="thumb-box"><img className="imgcompanies" style={{ borderRadius: "0px" }} src={img15} alt="" /></figure>
                            </div>

                        </SwiperSlide>
                        

                    </Swiper>
                </div>
                {/* <div className="bottom_text">
                    <div className="bottom_text_Child">
                        <p>See the latest rates from over 30 lenders, including the big four banks. Our online comparison tool lets you compare the rates and features of thousands of loans to find the one that's right for you~.</p>
                    </div>
                </div> */}
            </div>

        </section>
    )
}

export default WideChoice;
