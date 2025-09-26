import React from "react";
import shape3 from '../../../assets/images/shape/shape-3.png';
import about1 from '../../../assets/images/resource/about-1.jpg';
import image from '../../../assets/images/banner/bedroomimage.jpg';

function HomeBanner() {
    return <section className="about-section home_banner mt_50 mb_50" style={{ height: "auto" }} >
        {/* <div className="pattern-layer rotate-me"></div> */}
        <div className="auto-container">
            <div className="row clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12 feature-block">
                    <div className="ImageCard" style={{ borderTopLeftRadius: "0px" }}>
                        <div className="ImageCard_Child">
                            <h1 style={{ fontWeight: "700 !important" }}>Grow your Real Estate business with Dream Dwell Realtors</h1>
                            <p style={{ fontWeight: "200", fontSize: "17px", color: "var(--white-color)" }}>Dream Dwell Realtors is a leading real estate firm offering services in property sales, rentals, and management. They provide personalized solutions and expert market knowledge to meet your real estate needs. Their experienced team ensures smooth transactions and top-notch customer service. Whether you’re buying, selling, or renting, Dream Dwell Realtors is there to guide you. Known for integrity and reliability, they are your trusted real estate partner. Choose Dream Dwell Realtors for expert help in making successful property investments.</p>
                        </div>
                        <div className="ImageCard_Child_2 ">
                            <img src={image} alt="" style={{ borderTopRightRadius: "0px" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default HomeBanner;
