'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import img6 from '../../../assets/images/Companies/Godrej.jpg'
import img7 from '../../../assets/images/Companies/Kalpataru.jpg'

import img9 from '../../../assets/images/Companies/Prestige.png'
import img10 from '../../../assets/images/Companies/Puri.png'
import img11 from '../../../assets/images/Companies/ReputedBuilder.jpg'
import img12 from '../../../assets/images/Companies/Sattva.jpg'
import img13 from '../../../assets/images/Companies/ShriRamProperties.jpg'
import img14 from '../../../assets/images/Companies/Sobha.jpg'
import img15 from '../../../assets/images/Companies/Supertech.jpg'
import img16 from '../../../assets/images/Companies/VTUReality.jpg'
import img17 from '../../../assets/images/Companies/Vatika.jpg'

import img18 from '../../../assets/images/Companies/Companies/ATS.jpeg'
import img19 from '../../../assets/images/Companies/Companies/Ashiyana.png'
import img20 from '../../../assets/images/Companies/Companies/Birla.jpeg'
import img21 from '../../../assets/images/Companies/Companies/CentralPark.jpeg'
import img22 from '../../../assets/images/Companies/Companies/Conscient.jpeg'
import img23 from '../../../assets/images/Companies/Companies/DLF.png'
import img24 from '../../../assets/images/Companies/Companies/Elan.png'
import img25 from '../../../assets/images/Companies/Companies/Emaar.png'
import img26 from '../../../assets/images/Companies/Companies/Experion.jpeg'
import img27 from '../../../assets/images/Companies/Companies/Ganga.jpeg'
import img28 from '../../../assets/images/Companies/Companies/M3M.jpeg'
import img29 from '../../../assets/images/Companies/Companies/MRG.png'
import img30 from '../../../assets/images/Companies/Companies/Mahindra.png'
import img31 from '../../../assets/images/Companies/Companies/Signature.jpeg'
import img32 from '../../../assets/images/Companies/Companies/Smartworld.png'
import img33 from '../../../assets/images/Companies/Companies/Tulip.jpeg'
import img34 from '../../../assets/images/Companies/Companies/Vatika.jpeg'
import img35 from '../../../assets/images/Companies/Companies/adani.png'
import img36 from '../../../assets/images/Companies/Companies/puri.png'

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
            <SwiperSlide className="slide" >

              <div className="inner-box">
                <figure className="thumb-box"><img className="imgcompanies"  src={img12} alt="" /></figure>
              </div>

            </SwiperSlide>
            <SwiperSlide className="slide" >

              <div className="inner-box">
                <figure className="thumb-box"><img className="imgcompanies"  src={img13} alt="" /></figure>
              </div>

            </SwiperSlide>
            <SwiperSlide className="slide" >

              <div className="inner-box">
                <figure className="thumb-box"><img className="imgcompanies"  src={img14} alt="" /></figure>
              </div>

            </SwiperSlide>
            <SwiperSlide className="slide" >

              <div className="inner-box">
                <figure className="thumb-box"><img className="imgcompanies"  src={img15} alt="" /></figure>
              </div>

            </SwiperSlide>
            <SwiperSlide className="slide" >

              <div className="inner-box">
                <figure className="thumb-box"><img className="imgcompanies"  src={img16} alt="" /></figure>
              </div>

            </SwiperSlide>
            <SwiperSlide className="slide" >

              <div className="inner-box">
                <figure className="thumb-box"><img className="imgcompanies"  src={img17} alt="" /></figure>
              </div>

            </SwiperSlide>
            <SwiperSlide className="slide" >

              <div className="inner-box">
                <figure className="thumb-box"><img className="imgcompanies"  src={img18} alt="" /></figure>
              </div>

            </SwiperSlide>
            <SwiperSlide className="slide" >

              <div className="inner-box">
                <figure className="thumb-box"><img className="imgcompanies"  src={img19} alt="" /></figure>
              </div>

            </SwiperSlide>
            <SwiperSlide className="slide" >

              <div className="inner-box">
                <figure className="thumb-box"><img className="imgcompanies"  src={img20} alt="" /></figure>
              </div>

            </SwiperSlide>
            <SwiperSlide className="slide" >

              <div className="inner-box">
                <figure className="thumb-box"><img className="imgcompanies"  src={img21} alt="" /></figure>
              </div>

            </SwiperSlide>
            <SwiperSlide className="slide" >

              <div className="inner-box">
                <figure className="thumb-box"><img className="imgcompanies"  src={img22} alt="" /></figure>
              </div>

            </SwiperSlide>
            <SwiperSlide className="slide" >

              <div className="inner-box">
                <figure className="thumb-box"><img className="imgcompanies"  src={img23} alt="" /></figure>
              </div>

            </SwiperSlide>
            <SwiperSlide className="slide" >

              <div className="inner-box">
                <figure className="thumb-box"><img className="imgcompanies"  src={img24} alt="" /></figure>
              </div>

            </SwiperSlide>
            <SwiperSlide className="slide" >

              <div className="inner-box">
                <figure className="thumb-box"><img className="imgcompanies"  src={img25} alt="" /></figure>
              </div>

            </SwiperSlide>
            <SwiperSlide className="slide" >

              <div className="inner-box">
                <figure className="thumb-box"><img className="imgcompanies"  src={img26} alt="" /></figure>
              </div>

            </SwiperSlide>
            <SwiperSlide className="slide" >

              <div className="inner-box">
                <figure className="thumb-box"><img className="imgcompanies"  src={img27} alt="" /></figure>
              </div>

            </SwiperSlide>
            <SwiperSlide className="slide" >

              <div className="inner-box">
                <figure className="thumb-box"><img className="imgcompanies"  src={img28} alt="" /></figure>
              </div>

            </SwiperSlide>
            <SwiperSlide className="slide" >

              <div className="inner-box">
                <figure className="thumb-box"><img className="imgcompanies"  src={img29} alt="" /></figure>
              </div>

            </SwiperSlide>

            <SwiperSlide className="slide" >

              <div className="inner-box">
                <figure className="thumb-box"><img className="imgcompanies"  src={img30} alt="" /></figure>
              </div>

            </SwiperSlide>
            <SwiperSlide className="slide" >

              <div className="inner-box">
                <figure className="thumb-box"><img className="imgcompanies"  src={img31} alt="" /></figure>
              </div>

            </SwiperSlide>
            <SwiperSlide className="slide" >

              <div className="inner-box">
                <figure className="thumb-box"><img className="imgcompanies"  src={img32} alt="" /></figure>
              </div>

            </SwiperSlide>
            <SwiperSlide className="slide" >

              <div className="inner-box">
                <figure className="thumb-box"><img className="imgcompanies"  src={img33} alt="" /></figure>
              </div>

            </SwiperSlide>
            <SwiperSlide className="slide" >

              <div className="inner-box">
                <figure className="thumb-box"><img className="imgcompanies"  src={img34} alt="" /></figure>
              </div>

            </SwiperSlide>
            <SwiperSlide className="slide" >

              <div className="inner-box">
                <figure className="thumb-box"><img className="imgcompanies"  src={img35} alt="" /></figure>
              </div>

            </SwiperSlide>
            <SwiperSlide className="slide" >

              <div className="inner-box">
                <figure className="thumb-box"><img className="imgcompanies"  src={img36} alt="" /></figure>
              </div>

            </SwiperSlide>


          </Swiper>
        </div>

      </div>

    </section>
  )
}

export default CompareHomeLoan;
