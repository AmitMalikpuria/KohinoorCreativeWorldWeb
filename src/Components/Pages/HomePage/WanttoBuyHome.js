import React, { useState } from "react";
import { Link } from "react-router-dom";
import imgbackground from '../../../assets/images/background/process-bg.jpg'
import shape12 from '../../../assets/images/shape/shape-12.png'
import shape13 from '../../../assets/images/shape/shape-13.png'
import Contactus from "../DialogBox/Contactus";
import Dialog1 from "../DialogBox/Dialog1";

function WanttoBuyHome() {

    const [opendialog, setOpendialog] = useState(false);


    return <section className="process-section centred pt_40 pb_90">
        <div className="bg-layer" style={{ backgroundImage: `url(${imgbackground})`, backgroundColor: "rgb(255, 255, 255, 0.5)" }}></div>
        <div className="auto-container">
            <div className="sec-title mb_110">
                {/* <h6>Our process</h6> */}
                <h2>Help me work out...</h2>
            </div>
            {/* {
                opendialog ? <Dialog1 open={true} /> : <Dialog1 close={true} />
            } */}
            <div className="inner-container">
                <Link to="/contactus">
                    <div className="processing-block-one">
                        <div className="arrow-shape" ></div>
                        <div className="inner-box">
                            <Link to="/contactus"><span className="count-text"> Contact <br />us</span></Link>

                            <h3>I want to buy<br /> a home</h3>
                            {/* <p>Amet minim mollit no duis deserunt ulamco.</p> */}
                        </div>
                    </div>
                </Link>
                <Link to="/contactus">
                    <div className="processing-block-one">
                        <div className="arrow-shape" ></div>
                        <div className="inner-box">
                            <Link to="/contactus"><span className="count-text"> Contact <br />us</span></Link>
                            <h3>I want to buy an <br />investment</h3>
                            {/* <p>Amet minim mollit no duis deserunt ulamco.</p> */}
                        </div>
                    </div>
                </Link>
                <Link to="/contactus">
                    <div className="processing-block-one">
                        <div className="inner-box">
                            <Link to="/contactus"><span className="count-text"> Contact <br />us</span></Link>
                            <h3>I'm considering <br />refinancing</h3>
                            {/* <p>Amet minim mollit no duis deserunt ulamco.</p> */}
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    </section>
}

export default WanttoBuyHome;
