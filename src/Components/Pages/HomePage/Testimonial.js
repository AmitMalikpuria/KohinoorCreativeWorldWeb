import TestimonialSlider01 from '../../../slider/TestimonialSlider01';
import Testimonialbg from '../../../assets/images/background/testimonial-bg.jpg';

export default function Testimonial() {
    return (
        <>
            <section className="testimonial-section centred pt_120 pb_120">
                <div className="bg-layer" style={{ backgroundImage: `url(${Testimonialbg})` }}></div>
                <div className="auto-container">
                    <div className="sec-title">
                        <h6>Testimonials</h6>
                        <h2>Love from Our Clients</h2>
                    </div>
                    <div className="content-box">
                        {/*Theme Carousel*/}
                        <TestimonialSlider01 />
                    </div>
                </div>
            </section>
        </>
    )
}
