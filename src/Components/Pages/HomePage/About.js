import shape3 from '../../../assets/images/shape/shape-3.png';
import about1 from '../../../assets/images/resource/about-1.jpg';
import about7 from '../../../assets/images/resource/about-7.jpg';

export default function About() {
    return (
        <>
            <section className="about-section pt_40 pb_120" style={{ paddingBottom: "60px" }}>
                {/* <div className="pattern-layer rotate-me"></div> */}
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12 feature-block margin-bottom text-center">
                            <h2>Get to know Amber Loans</h2>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 feature-block margin-bottom">
                            <div className="ImageCard">
                                <div className="ImageCard_Child">
                                    <h1>About Amber Loans</h1>
                                    <p style={{fontWeight:"200",fontSize:"17px",color:"var(--white-color)"}}>Amber Loans has helped Australians finance their homes, investment properties, cars and businesses by delivering a range of choices with a team of trusted experts.</p>
                                </div>
                                <div className="ImageCard_Child_2">
                                    <img src={about7} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image_block_one">
                                <div className="image-box pr_90 mr_40">
                                    {/* <div className="image-shape" style={{ backgroundImage: `url(${shape3})` }}></div> */}
                                    <figure className="image"><img src={about1} alt="" style={{borderRadius:"15px"}} /></figure>
                                    <div className="rating-box">
                                        <ul className="rating mb_5 clearfix">
                                            <li><i className="icon-9"></i></li>
                                            <li><i className="icon-9"></i></li>
                                            <li><i className="icon-9"></i></li>
                                            <li><i className="icon-9"></i></li>
                                            <li><i className="icon-9"></i></li>
                                        </ul>
                                        <h6>4.5 Star Rating</h6>
                                    </div>
                                    {/* <div className="experience-box">
                                        <div className="inner">
                                            <h2>20</h2>
                                            <h6>Years of Experience</h6>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content_block_one">
                                <div className="content-box ml_40">
                                    <div className="sec-title mb_20">
                                        <h6>About</h6>
                                        <h2>Amber Loans</h2>
                                    </div>
                                    <div className="text-box mb_40">
                                        <p>Amber Loans has helped Australians finance their homes, investment properties, cars and businesses by delivering a range of choices with a team of trusted experts.</p>
                                    </div>
                                    <div className="inner-box mb_45">
                                        <div className="single-item">
                                            <div className="icon-box"><i className="icon-10"></i></div>
                                            <h3>Solution Focused</h3>
                                            <p>At Amber Loans, we believe in more than just providing loans. We're your partners in achieving your financial goals. We understand that every financial situation is unique, and we approach each client with a personalized, solution-focused approach.</p>
                                        </div>
                                        <div className="single-item">
                                            <div className="icon-box"><i className="icon-11"></i></div>
                                            <h3>99.99% Success</h3>
                                            <p>Amber Loans make your financial dreams a reality. Our team of experts guides you through the process, ensuring a smooth and successful loan application.</p>
                                        </div>
                                    </div>
                                    {/* <div className="btn-box">
                            <a href="/about" className="theme-btn btn-one">Discover More</a>
                            </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
