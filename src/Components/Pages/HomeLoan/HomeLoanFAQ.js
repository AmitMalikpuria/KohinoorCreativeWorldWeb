import React from "react";
import { useState } from 'react'
import CircleIcon from '@mui/icons-material/Circle';

function HomeLoanFAQ() {

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

    return <> <div className="col-lg-4 col-md-12 col-sm-12 accordion-column">
        <h2 className="mb_20">Different types of home loans in Australia</h2>
    </div>
        <div className="col-lg-8 col-md-12 col-sm-12 accordion-column">
            <ul className="accordion-box">
                {/*Accordion Block*/}
                <li className="accordion block">
                    <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                        <h4>Bridging loan</h4>
                        <div className="icon-box"></div>
                    </div>
                    <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                            <div className="text ">
                                <p>If you are buying a new property whilst you are still looking to sell your existing property, you might want to look into something called a bridging loan.  A bridging loan is a short term loan that gives you up to 6 months to sell the existing property, helping you navigate this awkward time as you transition to your new home.  </p>
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
                        <h4>Construction loan</h4>
                    </div>
                    <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                            <div className="text">
                                <p>A construction loan is a specialised loan that helps you meet the unique needs of ongoing payments throughout the contruction process. The key difference between a construction loan and a regular home loan is that it allows you to draw down on the loan balance, whilst a traditional home loan is made available in one lump sum to the borrower. </p>
                            </div>
                        </div>
                    </div>
                </li>

                <li className="accordion block">
                    <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                        <div className="icon-box"></div>
                        <h4>Fixed vs variable home loan</h4>
                    </div>
                    <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                            <div className="text">
                                <p>A fixed-rate loan is one that allows you to lock-in the current interest rate at the time of settlement. This means that the lender can not make any adjustments to the interest rate, whether it be up or down.  Depending on your situation and needs, you may want to fix a rate for up to 5 years, although the lifetime of the loan itself may be 25 or 30 years.</p><br></br>
                                <p>Though some people might like the security of knowing exactly how much their repayments will be, they might lose out on falling interest rates as the market changes.</p>
                            </div>
                        </div>
                    </div>
                </li>

                <li className="accordion block">
                    <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}>
                        <div className="icon-box"></div>
                        <h4>Interest only home loan</h4>
                    </div>
                    <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                            <div className="text">
                                <p>When borrowing money from a lender or bank, you can choose to pay just the interest on the loan or both the interest and the principal (the actual amount borrowed). If you choose to pay only the interest on the loan, your repayments will be much lower freeing up cash for things like renovations and other expenses. However, a lender or bank will always assess your ability to pay back both interest and principle in order to qualify for the loan as interest-only loans have a limited life span of up to 5 years. </p>
                            </div>
                        </div>
                    </div>
                </li>

                <li className="accordion block">
                    <div className={isActive.key == 5 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(5)}>
                        <h4>Introductory loan</h4>
                        <div className="icon-box"></div>
                    </div>
                    <div className={isActive.key == 5 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                            <div className="text ">
                                <p>The interest rate is usually low to attract borrowers. Also known as a honeymoon rate, this rate generally lasts only for around 12 months before it rises. Rates can be fixed or capped. Most revert to the standard rates at the end of the honeymoon period.</p><br></br>
                                <p>Pros:</p>
                                <ul className="list-item mb_50 clearfix">
                                    <li><CircleIcon style={{ color: "var(--theme-color)", transform: "scale(0.3)" }} /> Usually the lowest available rates </li>
                                    <li><CircleIcon style={{ color: "var(--theme-color)", transform: "scale(0.3)" }} /> When payments are made at the introductory rate, the principal can be reduced quickly</li>
                                    <li><CircleIcon style={{ color: "var(--theme-color)", transform: "scale(0.3)" }} /> Some lenders provide an offset account against these loans</li>
                                </ul>
                                <p>Cons:</p>
                                <ul className="list-item mb_50 clearfix">
                                    <li><CircleIcon style={{ color: "var(--theme-color)", transform: "scale(0.3)" }} /> Payments usually increase after the introductory period </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>

                <li className="accordion block">
                    <div className={isActive.key == 6 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(6)}>
                        <div className="icon-box"></div>
                        <h4>Home loans on pensions - age & disability</h4>
                    </div>
                    <div className={isActive.key == 6 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                            <div className="text">
                                <p>Whilst it can be difficult to receive a home loan as a pensioner due to being considered risky by lenders, it is still possible to get a mortgage despite the challenges involved. If you are on a pension or applying for a home loan at an older age, you may be limited in the amount of funds you can borrow, this is due to a higher risk being associated by lenders when processing the loan application. The types of home loans available for pensioners can include reverse, mortgages, line of credit home loans and investment loans.</p>
                            </div>
                        </div>
                    </div>
                </li>

                <li className="accordion block">
                    <div className={isActive.key == 7 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(7)}>
                        <div className="icon-box"></div>
                        <h4>Line of credit loan</h4>
                    </div>
                    <div className={isActive.key == 7 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                            <div className="text">
                                <p>Once you have owned a property for a while and you have built up some equity by making repayments, you can then apply for a loan called a line of credit. This type of loan allows you to access the funds whenever it is needed. </p><br></br>
                                <p>This product is a handy and creative way to manage your cash as the money can be used for virtually anything and paid back on your terms. </p><br></br>
                                <p>As long you have more cash coming in than going out these accounts can be useful. However, they can be very costly if the balance of the line of credit is not regularly reduced as it can have higher interest rates and reduce the equity in your home.</p><br></br>
                            </div>
                        </div>
                    </div>
                </li>

                <li className="accordion block">
                    <div className={isActive.key == 8 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(8)}>
                        <div className="icon-box"></div>
                        <h4>Low doc loan</h4>
                    </div>
                    <div className={isActive.key == 8 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                            <div className="text">
                                <p>As the name suggests, a low-doc loan is a loan suited to borrowers who may find it difficult to provide the paperwork needed for a traditional home loan. This type of loan usually appeals to investors and people who are self-employed as lenders will use other sources of documentation to consider your suitability for a loan.</p>
                            </div>
                        </div>
                    </div>
                </li>

                <li className="accordion block">
                    <div className={isActive.key == 9 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(9)}>
                        <h4>Non-conforming loan</h4>
                        <div className="icon-box"></div>
                    </div>
                    <div className={isActive.key == 9 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                            <div className="text ">
                                <p>Some people with a poor credit rating may struggle to be approved for a traditional home loan from as they are perceived as a greater risk to the lender. But not all is lost,  as a non-conforming loan allows these people to secure a loan as lenders can use other evidence of your ability to repay a loan. A larger deposit is often needed as a sign that you are able to repay the loan and a higher interest rate is needed to offset the risk for the lender. </p>

                            </div>
                        </div>
                    </div>
                </li>

                <li className="accordion block">
                    <div className={isActive.key == 10 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(10)}>
                        <div className="icon-box"></div>
                        <h4>Self employed home loans</h4>
                    </div>
                    <div className={isActive.key == 10 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                            <div className="text">
                                <p>When you’re self employed, getting a home loan can involve a few extra steps making the process more complex. A guideline of some common requirements you should have ready when applying for a home loan are the following: </p><br></br>
                                <ul className="list-item mb_50 clearfix">
                                    <li><CircleIcon style={{ color: "var(--theme-color)", transform: "scale(0.3)" }} /> Proof that your ABN has been registered for at least 2 years </li>
                                    <li><CircleIcon style={{ color: "var(--theme-color)", transform: "scale(0.3)" }} /> Last 2 years’ personal and business tax returns and tax assessment notices </li>
                                    <li><CircleIcon style={{ color: "var(--theme-color)", transform: "scale(0.3)" }} /> Balance sheet and profit and loss statements covering the most recent 2 years </li>
                                    <li><CircleIcon style={{ color: "var(--theme-color)", transform: "scale(0.3)" }} /> Details of any external liabilities: leases, hire purchase, overdrafts, company loans and/or guarantees </li>
                                    <li><CircleIcon style={{ color: "var(--theme-color)", transform: "scale(0.3)" }} /> Last 1 month’s business bank statements </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>

                <li className="accordion block">
                    <div className={isActive.key == 11 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(11)}>
                        <div className="icon-box"></div>
                        <h4>Split rate (principal and interest) loans</h4>
                    </div>
                    <div className={isActive.key == 11 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                            <div className="text">
                                <p>A split rate loan allows you to fix one portion of the loan whilst the setting the remaining amount as a variable. You can even choose how much you would like to allocate to both, giving you the best of both worlds with the peace of mind a fixed rate provides whilst also being able to capitalise on the possibility of rates dropping.</p>
                            </div>
                        </div>
                    </div>
                </li>

                <li className="accordion block">
                    <div className={isActive.key == 12 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(12)}>
                        <div className="icon-box"></div>
                        <h4>Variable (principal and interest) loans</h4>
                    </div>
                    <div className={isActive.key == 12 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                            <div className="text">
                                <p>The rate of interest you need to pay to the lender for your home loan can be subject to the movements of the interest rates set by the Reserve Bank of Australia. Essentially if the Reserve Bank of Australia moves the rate up or down, your lender is likely to follow suit by passing on the changes to you.</p>
                            </div>
                        </div>
                    </div>
                </li>



            </ul>
        </div>
    </>
}

export default HomeLoanFAQ;
