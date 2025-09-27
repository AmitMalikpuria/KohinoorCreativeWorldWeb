
'use client'

import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import PersonalLoanBanner from '../../../assets/images/banner/personalloanbanner.jpg'
import CarLoanBanner from '../../../assets/images/banner/CarLoanBanner.jpg'
import Building1 from '../../../assets/images/banner/Building1.jpg'
import Building2 from '../../../assets/images/banner/building2.jpg'
import Contactus from "../../Pages/DialogBox/Contactus";

import sliderimg1 from '../../../assets/images/Slider/img1.jpg';
import sliderimg2 from '../../../assets/images/Slider/img2.jpg';
import sliderimg3 from '../../../assets/images/Slider/img3.jpg';
import sliderimg4 from '../../../assets/images/Slider/img4.jpg';
import sliderimg5 from '../../../assets/images/Slider/img5.jpg';
import sliderimg6 from '../../../assets/images/Slider/img6.jpg';

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
                        <div className="bg-layer" style={{ backgroundImage: `url(${sliderimg1})` }}></div>
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
                                <h2><span >Haryanvi Folk Dance</span><br></br>  </h2> 
                                <p> Haryanvi folk dance is a vibrant expression of Haryana’s culture, performed with energy, rhythm, and traditional attire. It reflects the joy, unity, and rich heritage of the people of Haryana.</p>
                               
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item p_relative">
                        <div className="bg-layer" style={{ backgroundImage: `url(${sliderimg2})` }}></div>
                        <div className="pattern-layer">
                            {/* <div className="pattern-1" style={{ backgroundImage: `url(${Shape1})` }}></div>
                            <div className="pattern-2" style={{ backgroundImage: `url(${Shape2})` }}></div> */}
                        </div>
                        <div className="auto-container">
                            <div className="content-box">
                                <h2><span >Swang Folk</span></h2>
                                 <p> Swang is a traditional folk theatre of Haryana that blends music, dance, and storytelling to depict social and cultural themes. It is one of the oldest forms of rural entertainment, keeping heritage alive through performance.</p>
                                {/* <div className="btn-box">
                                    <Contactus btn1="btn-one" name="GET A CONSULTATION" />
                                </div> */}
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

