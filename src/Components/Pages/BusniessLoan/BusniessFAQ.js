'use client'


import { useState } from 'react'
import CircleIcon from '@mui/icons-material/Circle';

function BusniessFAQ() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
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
    return (
        <> <div className="col-lg-4 col-md-12 col-sm-12 accordion-column">
            <h2>Business Lending FAQs</h2>
        </div>
            <div className="col-lg-8 col-md-12 col-sm-12 accordion-column">
                <ul className="accordion-box">
                    {/*Accordion Block*/}
                    <li className="accordion block">
                        <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                            <h4>I am a business owner who rents my commercial premises. Should I consider buying a commercial property instead?</h4>
                            <div className="icon-box"></div>
                        </div>
                        <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                            <div className="content">
                                <div className="text ">
                                    <p>There are pros and cons to buying and leasing a commercial property for your business. Buying a property provides security and freedom and it is an asset that can grow in value and be sold down the track. However, they can be quite expensive and there also ongoing maintenance costs that you will have to consider.</p>
                                    <p className='mt_15'>On the other hand, leasing a property gives you the flexibility to relocate when needed, and it is an affordable option for businesses - not only when they are starting out, but if they want to expand and acquire another business. However, you will have a lack of control over the property and the cost of rent will generally increase each year.</p>
                                    {/* <ul className="list-item mb_50 clearfix">
                                        <li><CircleIcon style={{ color: "var(--theme-color)", transform: "scale(0.3)" }} /> be 18 years or older </li>
                                        <li><CircleIcon style={{ color: "var(--theme-color)", transform: "scale(0.3)" }} /> be an Australian resident</li>
                                        <li><CircleIcon style={{ color: "var(--theme-color)", transform: "scale(0.3)" }} /> have a regular income</li>
                                        <li><CircleIcon style={{ color: "var(--theme-color)", transform: "scale(0.3)" }} /> be looking to borrow more than $5,000</li>
                                    </ul> */}
                                </div>
                            </div>
                        </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                        <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                            <div className="icon-box"></div>
                            <h4>Why use a finance broker for your business’s finance needs?</h4>
                        </div>
                        <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                            <div className="content">
                                <div className="text">
                                    <p>A finance broker has the knowledge and experience needed to help you grow your business and provide advice on the right financial solutions for your goals.</p>
                                    <p className='mt_15'>They can source and apply for commercial loans and assist with any equipment and vehicle finance needs.</p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="accordion block">
                        <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                            <div className="icon-box"></div>
                            <h4>Will I get a better deal if I go direct to my business’ bank?</h4>
                        </div>
                        <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                            <div className="content">
                                <div className="text">
                                    <p>A finance broker has the knowledge and experience needed to help you grow your business and provide advice on the right financial solutions for your goals.</p>
                                    <p className='mt_15'>By going to your business bank, you will only have access to their products. A broker has access to a panel of lenders offering hundreds of products. Better yet, your broker can help you source through the various options to find a solution that suits your unique financial situation.</p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="accordion block">
                        <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}>
                            <div className="icon-box"></div>
                            <h4>What finance needs can a Amber Loans broker help me with?  </h4>
                        </div>
                        <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                            <div className="content">
                                <div className="text">
                                    <p>Your Amber Loans broker can assist you with sourcing and applying for a business loan and arranging equipment finance. In addition, we are on hand to help you with all of your property needs - from commercial loans to investment and residential property loans.</p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="accordion block">
                        <div className={isActive.key == 5 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(5)}>
                            <div className="icon-box"></div>
                            <h4>What should I bring to my first meeting with a Amber Loans broker?</h4>
                        </div>
                        <div className={isActive.key == 5 ? "acc-content current" : "acc-content"}>
                            <div className="content">
                                <div className="text">
                                    <p>If you are seeking a business finance solution, you will need to bring:</p>
                                    <ul className="list-item mb_50 clearfix">
                                        <li><CircleIcon style={{ color: "var(--theme-color)", transform: "scale(0.3)" }} /> Last 2-year’s tax returns for the business </li>
                                        <li><CircleIcon style={{ color: "var(--theme-color)", transform: "scale(0.3)" }} /> Financial statements (Profit & Loss, cashflow statement, balance sheet, income statement)</li>
                                        <li><CircleIcon style={{ color: "var(--theme-color)", transform: "scale(0.3)" }} /> Your latest management accounts statement</li>
                                        <li><CircleIcon style={{ color: "var(--theme-color)", transform: "scale(0.3)" }} /> Your BAS statement</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="accordion block">
                        <div className={isActive.key == 6 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(6)}>
                            <div className="icon-box"></div>
                            <h4>What can I expect during my first meeting with my broker?</h4>
                        </div>
                        <div className={isActive.key == 6 ? "acc-content current" : "acc-content"}>
                            <div className="content">
                                <div className="text">
                                    <p>The more the broker understands about your business and goals, the better he/she will be able to assist your needs. You can expect your broker will speak to you about:</p>
                                    <ul className="list-item mb_50 clearfix">
                                        <li><CircleIcon style={{ color: "var(--theme-color)", transform: "scale(0.3)" }} /> What your business does </li>
                                        <li><CircleIcon style={{ color: "var(--theme-color)", transform: "scale(0.3)" }} /> How it is structured</li>
                                        <li><CircleIcon style={{ color: "var(--theme-color)", transform: "scale(0.3)" }} /> What your goals and targets are</li>
                                        <li><CircleIcon style={{ color: "var(--theme-color)", transform: "scale(0.3)" }} /> Who are your competitors</li>
                                        <li><CircleIcon style={{ color: "var(--theme-color)", transform: "scale(0.3)" }} /> Your view on threats, risks, and opportunities</li>
                                    </ul>
                                    <p className='mt_15'>Once he/she understands your business, he/she will discuss the appropriate finance options.</p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="accordion block">
                        <div className={isActive.key == 7 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(7)}>
                            <div className="icon-box"></div>
                            <h4>Can I finance plant and equipment?</h4>
                        </div>
                        <div className={isActive.key == 7 ? "acc-content current" : "acc-content"}>
                            <div className="content">
                                <div className="text">
                                    <p>Yes!</p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="accordion block">
                        <div className={isActive.key == 8 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(8)}>
                            <div className="icon-box"></div>
                            <h4>What is a commercial loan?</h4>
                        </div>
                        <div className={isActive.key == 8 ? "acc-content current" : "acc-content"}>
                            <div className="content">
                                <div className="text">
                                    <p>A loan that is secured against a commercial property.</p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="accordion block">
                        <div className={isActive.key == 9 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(9)}>
                            <div className="icon-box"></div>
                            <h4>What is debtor finance?</h4>
                        </div>
                        <div className={isActive.key == 9 ? "acc-content current" : "acc-content"}>
                            <div className="content">
                                <div className="text">
                                    <p>Debtor finance refers to products that fund a company by financing its invoices. It allows business to access funds owing in outstanding invoices before the debtor pays. Debtor finance ensures you are not forced to wait for outstanding funds that are needed in order sustain your business, such as paying wages and paying bills.</p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="accordion block">
                        <div className={isActive.key == 10 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(10)}>
                            <div className="icon-box"></div>
                            <h4>What is a business will / succession plan / buy/sell agreement?</h4>
                        </div>
                        <div className={isActive.key == 10 ? "acc-content current" : "acc-content"}>
                            <div className="content">
                                <div className="text">
                                    <p>At some point, you will have to leave your business. A business will or succession plan outlines how you will transition out of your business.</p>
                                    <p className='mt_15'>A buy/sell agreement is a legally binding contract between business partners or co-owners that describes a plan should an owner pass away, leave voluntarily, or is forced out of the business. It will set out how the transfer of ownership will occur and to whom; determine the value of the business; and how the purchase of the ownership interest being transferred will be funded.</p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="accordion block">
                        <div className={isActive.key == 11 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(11)}>
                            <div className="icon-box"></div>
                            <h4>What is Key Person insurance?</h4>
                        </div>
                        <div className={isActive.key == 11 ? "acc-content current" : "acc-content"}>
                            <div className="content">
                                <div className="text">
                                    <p>Key person insurance is a type of corporate-owned life insurance which insures a business against the loss of a key employee typically a founder, executive or partner who are essential to a company’s success and profitability.</p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="accordion block">
                        <div className={isActive.key == 12 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(12)}>
                            <div className="icon-box"></div>
                            <h4>What are the different types of business loans?</h4>
                        </div>
                        <div className={isActive.key == 12 ? "acc-content current" : "acc-content"}>
                            <div className="content">
                                <div className="text">
                                    <p>There are many types of business loans, the main ones being: commercial loans, working capital solutions (debtor finance, overdraft, credit card, secured or unsecured line of credit, etc), secured business loans, and development finance.</p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="accordion block">
                        <div className={isActive.key == 13 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(13)}>
                            <div className="icon-box"></div>
                            <h4>What is development finance?</h4>
                        </div>
                        <div className={isActive.key == 13? "acc-content current" : "acc-content"}>
                            <div className="content">
                                <div className="text">
                                    <p>Development finance is a loan that funds the construction of a site and/or property. The goal is to make money out of the development. Generally this is for unit blocks or commercial property. </p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="accordion block">
                        <div className={isActive.key == 14 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(14)}>
                            <div className="icon-box"></div>
                            <h4>Which business loan is right for me?</h4>
                        </div>
                        <div className={isActive.key == 14 ? "acc-content current" : "acc-content"}>
                            <div className="content">
                                <div className="text">
                                    <p>It depends on your situation, your business, and many other factors. Speak to a broker to find the right solution. </p>
                                </div>
                            </div>
                        </div>
                    </li>                 


                </ul>
            </div>
        </>
    )
}

export default BusniessFAQ;
