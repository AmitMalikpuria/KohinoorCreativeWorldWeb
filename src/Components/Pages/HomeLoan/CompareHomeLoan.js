'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import img6 from '../../../assets/images/Companies/Godrej.jpg'
import img7 from '../../../assets/images/Companies/Kalpataru.jpg'

import img9 from '../../../assets/images/Companies/Prestige.png'
import img10 from '../../../assets/images/Companies/Puri.png'
import img11 from '../../../assets/images/Companies/ReputedBuilder.jpg'


import Testimonialimg from "../../../assets/images/background/testimonial-bg.jpg"
import './CompareHomeLoan.css'
import { useEffect, useState } from "react"




function CompareHomeLoan() {

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
    <section className="testimonial-section centred pt_60 pb_60">
      <div className="bg-layer" style={{ backgroundImage: `url(${Testimonialimg})` }}></div>
      <div className="auto-container">
        <div className="sec-title mb_10 compare_mb">
          <h2>Leading Real Estate Developers</h2>
        </div>
        <div className="content-box">
          <Swiper {...swiperOptions} className="theme_carousel owl-theme">
            <SwiperSlide className="slide">

              <div className="inner-box">
                <figure className="thumb-box"><img className="imgcompanies"  src={img6} alt="" /></figure>
              </div>

            </SwiperSlide>

            <SwiperSlide className="slide" >

              <div className="inner-box">
                <figure className="thumb-box"><img className="imgcompanies"  src={img7} alt="" /></figure>
              </div>

            </SwiperSlide>

            <SwiperSlide className="slide" >

              <div className="inner-box">
                <figure className="thumb-box"><img className="imgcompanies"  src={img9} alt="" /></figure>
              </div>

            </SwiperSlide>
            <SwiperSlide className="slide" >

              <div className="inner-box">
                <figure className="thumb-box"><img className="imgcompanies"  src={img10} alt="" /></figure>
              </div>

            </SwiperSlide>
            <SwiperSlide className="slide" >
              <div className="inner-box">
                <figure className="thumb-box"><img className="imgcompanies"  src={img11} alt="" /></figure>
              </div>
            </SwiperSlide>      
          </Swiper>
        </div>

      </div>

    </section>
  )
}

export default CompareHomeLoan;
