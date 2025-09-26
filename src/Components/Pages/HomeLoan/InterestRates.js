import React from "react";
import img1 from '../../../assets/images/resource/about-1.jpg'
import './InterestRates.css'

function InterestRates() {
    return (

        <div className="col-lg-12 col-md-12 col-sm-12 feature-block exchange-block pb_120">
            <div className="interestCard">
                <div className="">
                    <h3>Latest home loan interest rates</h3>
                </div>
                <div className="img__Card">
                    <img src={img1} style={{borderRadius:"15px"}}></img>
                </div >
                <div className="_mycard">
                    <div className="interestCard_Child">
                        <div className="interestCard_subChild1">
                            <p>Starting from</p>
                            <div style={{ display: "flex", justifyContent: "center", gap: "7px" }}>
                                <h1>5.54</h1>
                                <div>
                                    <p>%*</p>
                                    <p>p.a.</p>
                                </div>
                            </div>

                        </div>
                        {/* <div className="interestCard_subChild2">
                        <p>%*</p>
                        <p>p.a.</p>
                    </div> */}
                    </div>
                    <div className="interestCard_Child" style={{ backgroundColor: "var(--white-color)" }}>
                        <div className="interestCard_subChild1">
                            <p style={{ color: "var(--theme-color)" }}>Comparison rate</p>
                            <div style={{ display: "flex", justifyContent: "center", gap: "7px" }}>
                                <h1 style={{ color: "var(--theme-color)" }}>6.08</h1>
                                <div>
                                    <p style={{ color: "var(--theme-color)" }}>%#</p>
                                    <p style={{ color: "var(--theme-color)" }}>p.a.</p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="interestCard_subChild2">
                        <p style={{ color: "var(--theme-color)" }}>%#</p>
                        <p style={{ color: "var(--theme-color)" }}>p.a.</p>
                    </div> */}
                    </div>
                </div>
            </div>
            <div className="compare-rates__border" style={{ marginTop: "-43px", marginBottom: "40px" }}>

            </div>
        </div >


    )
}

export default InterestRates;
