import React, { useState } from "react";


function WhoWeAre() {

    const [isActive, setIsActive] = useState({
        status: false,
        key: 0,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return <div>
        <section className="faq-section pb_100">
            <div className="auto-container">
                <div className="sec-title centred mb_70">
                    <h2>Who We are</h2>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 accordion-column">
                        <ul className="accordion-box">
                            {/*Accordion Block*/}
                            <li className="accordion block">
                                <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                    <div className="icon-box"></div>
                                    <h4>Company Profile</h4>
                                </div>
                                <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                    <div className="content">
                                        <div className="text">
                                            <p>Amber Loans is an established mortgage brokerage in Australia, focused on helping Australians achieve their property ownership goals. Amber Loans is quickly building a reputation for its dedication to providing expert advice and reliable home loan solutions. The company is committed to offering personalized service and leveraging modern technology to ensure clients have access to the best mortgage options available. Amber Loans aims to make the property journey smoother and more accessible for all Australians, focusing on delivering a tailored experience for every customer.</p>
                                            {/* <p>Amber Loans, part of Australia’s leading digital property business REA Group, is a nationally recognised and trusted brand that helps Australians realise their property ownership dreams.</p><br/>
                                            <p> Amber Loans has grown to become one of the largest mortgage brokerages in Australia with a network of more than 1,000 brokers and 750 franchises nationwide.</p><br/>
                                            <p>REA Group acquired Amber Loans, and as part of the acquisition united the brokerage with Smartline Personal Mortgage Advisers under the Amber Loans brand.</p> */}
                                        </div>
                                    </div>
                                </div>
                            </li>
                            {/*Accordion Block*/}
                            <li className="accordion block">
                                <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                                    <div className="icon-box"></div>
                                    <h4>Our Network</h4>
                                </div>
                                <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                    <div className="content">
                                        <div className="text">
                                            <p>Amber Loans has a nationwide network of experienced mortgage brokers who provide expert guidance and offer financial solutions tailored to each customer’s unique needs.
                                            </p><br />
                                            <p>Our brokers give customers access to a broad range of home loan products from a diverse panel of lenders, including the Big 4 banks and specialized boutique options. In addition to home loans, we also offer assistance with personal loans, commercial loans, asset finance, and general insurance, ensuring a comprehensive approach to meeting all of our customers' financial needs.</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 accordion-column">
                        <ul className="accordion-box">
                            {/*Accordion Block*/}
                            <li className="accordion block">
                                <div className={isActive.key == 5 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(5)}>
                                    <div className="icon-box"></div>
                                    <h4>Our Role in the Community</h4>
                                </div>
                                <div className={isActive.key == 5 ? "acc-content current" : "acc-content"}>
                                    <div className="content">
                                        <div className="text">
                                        <p>Amber Loans supports people in need through voluntary contributions from its network. The Foundation delivers real impact to registered Australian charities focused on people, their needs, housing, and financial literacy. Amber Loans believes that collective efforts can create a greater impact than individual actions. The Amber Loans operates both at the state and national levels to broaden and deepen the Foundation’s reach. The Foundation committees are run and managed by the Amber Loans network, including owners, loan writers, and administration staff, ensuring that its charitable initiatives are driven by those who are directly involved with the company.</p>
                                            {/* <p>The Amber Loans Pty Ltd (ALPL) supports people in need through voluntary contributions from its network. The Foundation delivers real impact to registered Australian charities focused on people, their needs, housing, and financial literacy. Amber Loans believes that collective efforts can create a greater impact than individual actions. The ALPL operates both at the state and national levels to broaden and deepen the Foundation’s reach. The Foundation committees are run and managed by the Amber Loans network, including owners, loan writers, and administration staff, ensuring that its charitable initiatives are driven by those who are directly involved with the company.</p> */}
                                        </div>
                                    </div>
                                </div>
                            </li>
                            {/*Accordion Block*/}
                            <li className="accordion block">
                                <div className={isActive.key == 6 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(6)}>
                                    <div className="icon-box"></div>
                                    <h4>How We Operate</h4>
                                </div>
                                <div className={isActive.key == 6 ? "acc-content current" : "acc-content"}>
                                    <div className="content">
                                        <div className="text">
                                            <p>Our Customer Charter fully discloses our service, payment model, privacy policy and complaints procedure.</p><br></br>
                                            {/* <p>Amber Loans holds an Australian Credit Licence: no. 382869. and Smartline Operations Pty Limited holds an Australian Credit Licence no. 382869. both are owned by REA Group Limited.</p> */}
                                        </div>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>;
}

export default WhoWeAre;
