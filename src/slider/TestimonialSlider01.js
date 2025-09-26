'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import testimonial1png from '../assets/images/resource/testimonial-1.png'
import testimonial2png from '../assets/images/resource/testimonial-2.png'
import testimonial3png from '../assets/images/resource/testimonial-3.png'
import testimonial4png from '../assets/images/resource/testimonial-4.png'
import testimonial5png from '../assets/images/resource/testimonial-5.png'


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    spaceBetween: 30,
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

    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider1() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide">
                    <div className="testimonial-block-one">
                        <div className="inner-box">
                            {/* <figure className="thumb-box"><img src={testimonial1png} alt="" /></figure> */}
                            <figure className="thumb-box"><AccountCircleIcon style={{fontSize:"110px",color:"var(--theme-color)"}}/></figure>
                            <h4>Priya Sharma</h4>
                             {/* <span className="designation">Manager</span> */} 
                            <ul className="rating mb_6 clearfix">
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            </ul>
                            <p>“Dream Dwell Realtors helped us find our perfect family home in Sector 14. Their team was patient, understood our needs, and showed us properties that truly matched our requirements. The entire process, from viewing to final paperwork, was handled very professionally. Bahut dhanyavaad!”</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block-one">
                        <div className="inner-box">
                            {/* <figure className="thumb-box"><img src={testimonial2png} alt="" /></figure> */}
                            <figure className="thumb-box"><AccountCircleIcon style={{fontSize:"110px",color:"var(--theme-color)"}}/></figure>
                            <h4>Rajesh Kumar</h4>
                            {/* <span className="designation">Manager</span> */}
                            <ul className="rating mb_6 clearfix">
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            </ul>
                            <p>“Excellent service from Dream Dwell, I was looking to invest in a residential plot near Rohtak, and they provided me with several good options within my budget. Their guidance on the legal aspects was particularly helpful. I highly recommend them.”</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block-one">
                        <div className="inner-box">
                            {/* <figure className="thumb-box"><img src={testimonial3png} alt="" /></figure> */}
                            <figure className="thumb-box"><AccountCircleIcon style={{fontSize:"110px",color:"var(--theme-color)"}}/></figure>
                            <h4>Sunita</h4>
                            {/* <span className="designation">Manager</span> */}
                            <ul className="rating mb_6 clearfix">
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            </ul>
                            <p>“I was a bit nervous about selling my old house, but the team at Dream Dwell Realtors made it so easy. They handled everything efficiently and got me a good price. Their communication was excellent throughout. Mujhe bahut achha laga inke saath kaam karke." (I really enjoyed working with them.)”</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block-one">
                        <div className="inner-box">
                            {/* <figure className="thumb-box"><img src={testimonial4png} alt="" /></figure> */}
                            <figure className="thumb-box"><AccountCircleIcon style={{fontSize:"110px",color:"var(--theme-color)"}}/></figure>
                            <h4>Vikas Gupta</h4>
                            {/* <span className="designation">Manager</span> */}
                            <ul className="rating mb_6 clearfix">
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            </ul>
                            <p>“Dream Dwell Realtors were instrumental in finding the right commercial space for my new factory unit. They understood the specific requirements of my business and showed me properties that were suitable and well-located. Their negotiation skills were also impressive.”</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block-one">
                        <div className="inner-box">
                            {/* <figure className="thumb-box"><img src={testimonial5png} alt="" /></figure> */}
                            <figure className="thumb-box"><AccountCircleIcon style={{fontSize:"110px",color:"var(--theme-color)"}}/></figure>
                            <h4>Julien Anthor</h4>
                            {/* <span className="designation">Manager</span> */}
                            <ul className="rating mb_6 clearfix">
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            </ul>
                            <p>“The team at Amber Loans was incredibly helpful throughout the entire home loan process. Love from our grateful clients.”</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block-one">
                        <div className="inner-box">
                            {/* <figure className="thumb-box"><img src={testimonial3png} alt="" /></figure> */}
                            <figure className="thumb-box"><AccountCircleIcon style={{fontSize:"110px",color:"var(--theme-color)"}}/></figure>
                            <h4>Simran Kaur</h4>
                            {/* <span className="designation">Manager</span> */}
                            <ul className="rating mb_6 clearfix">
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            </ul>
                            <p>“As an NRI looking to invest in commercial property in Haryana, I relied heavily on Dream Dwell Realtors. They provided excellent market analysis and helped me identify a promising retail space. Their assistance with legal formalities was invaluable. Shukriya!”</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
