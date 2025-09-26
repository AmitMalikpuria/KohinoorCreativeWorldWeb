import Layout from "../../Layout"
import { useState } from 'react'

import CircleIcon from '@mui/icons-material/Circle';

function FAQPage() {

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

    return <Layout breadcrumbTitle="FAQ's">
        <><div className="row mt_60">
            <div className="col-lg-6 col-md-12 col-sm-12 accordion-column">
                <ul className="accordion-box">
                    {/*Accordion Block*/}
                    <li className="accordion block">
                        <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                            <h4>Am I eligible for a car loan?</h4>
                            <div className="icon-box"></div>
                        </div>
                        <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                            <div className="content">
                                <div className="text ">
                                    <p>To apply for a car loan, you must:</p>
                                    <ul className="list-item mb_50 clearfix">
                                        <li><CircleIcon style={{ color: "var(--theme-color)", transform: "scale(0.3)" }} /> be 18 years or older </li>
                                        <li><CircleIcon style={{ color: "var(--theme-color)", transform: "scale(0.3)" }} /> be an Australian resident</li>
                                        <li><CircleIcon style={{ color: "var(--theme-color)", transform: "scale(0.3)" }} /> have a regular income</li>
                                        <li><CircleIcon style={{ color: "var(--theme-color)", transform: "scale(0.3)" }} /> be looking to borrow more than $5,000</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                        <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                            <div className="icon-box"></div>
                            <h4>Can I choose between a fixed or variable rate loan for a car loan?</h4>
                        </div>
                        <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                            <div className="content">
                                <div className="text">
                                    <p>All car loans are fixed rate loans.</p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="accordion block">
                        <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                            <div className="icon-box"></div>
                            <h4>Can I include insurance and warranty in the car loan amount?</h4>
                        </div>
                        <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                            <div className="content">
                                <div className="text">
                                    <p>Some lenders will allow you to include these in the loan amount.</p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="accordion block">
                        <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}>
                            <div className="icon-box"></div>
                            <h4>How does pre-approval work for car loans?</h4>
                        </div>
                        <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                            <div className="content">
                                <div className="text">
                                    <p>Pre-approval means having your loan approved before you find the car you’d like to buy. This means you can shop around for your new car with peace of mind knowing what you can afford.</p><br></br>
                                    <p>Once you find the car you’d like to purchase, your broker will arrange for the funds to be drawn and payment to be made.</p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="accordion block">
                        <div className={isActive.key == 5 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(5)}>
                            <h4>What documentation do I need to apply for a loan?</h4>
                            <div className="icon-box"></div>
                        </div>
                        <div className={isActive.key == 5 ? "acc-content current" : "acc-content"}>
                            <div className="content">
                                <div className="text ">
                                    <p>If you are a PAYG Applicant you will need:</p>
                                    <ul className="list-item mb_50 clearfix">
                                        <li><CircleIcon style={{ color: "var(--theme-color)", transform: "scale(0.3)" }} /> a clear copy of your drivers licence (front and back) </li>
                                        <li><CircleIcon style={{ color: "var(--theme-color)", transform: "scale(0.3)" }} /> your last 2 pay slips</li>
                                        <li><CircleIcon style={{ color: "var(--theme-color)", transform: "scale(0.3)" }} /> a recent rates notice (if you own property)</li>
                                        <li><CircleIcon style={{ color: "var(--theme-color)", transform: "scale(0.3)" }} /> a copy of the contract for sale for the car</li>
                                    </ul>
                                </div>
                                <div className="text">
                                    <p>If you are a self-employed applicant you will need:</p>
                                    <ul className="list-item mb_50 clearfix">
                                        <li><CircleIcon style={{ color: "var(--theme-color)", transform: "scale(0.3)" }} /> a clear copy of your drivers licence (front and back) </li>
                                        <li><CircleIcon style={{ color: "var(--theme-color)", transform: "scale(0.3)" }} /> a recent rates notice (if you own property)</li>
                                    </ul>
                                </div>
                                <div className="text ">
                                    <p>If you are a commercial full doc applicant you will need:</p>
                                    <ul className="list-item mb_50 clearfix">
                                        <li><CircleIcon style={{ color: "var(--theme-color)", transform: "scale(0.3)" }} /> a clear copy of your drivers licence (front and back) </li>
                                        <li><CircleIcon style={{ color: "var(--theme-color)", transform: "scale(0.3)" }} /> a recent rates notice (if you own property)</li>
                                        <li><CircleIcon style={{ color: "var(--theme-color)", transform: "scale(0.3)" }} /> recent financials (for the business and individual)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="accordion block">
                        <div className={isActive.key == 6 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(6)}>
                            <div className="icon-box"></div>
                            <h4>What are the benefits of going through a broker for my car?</h4>
                        </div>
                        <div className={isActive.key == 6 ? "acc-content current" : "acc-content"}>
                            <div className="content">
                                <div className="text">
                                    <p>Your broker has access to a number of different lenders. As such, they are not only able to find you a sharply priced car loan, but a loan solution that meets your unique set of circumstances. In other words, they can find you a loan that meets some of your other requirements, like no monthly administration fees, or no early payment penalties. In addition, they can offer you low fixed rate options that allow you repayment flexibility, ie: weekly/fortnightly/monthly.</p><br></br>
                                    <p>Moreover, a broker works for you, not a car dealership or a particular lender. While a dealership may focus on clearing out stock, a broker’s focus is making sure you find a loan that is well suited to your needs.</p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="accordion block">
                        <div className={isActive.key == 7 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(7)}>
                            <div className="icon-box"></div>
                            <h4>Can I get a car loan if I am self-employed?</h4>
                        </div>
                        <div className={isActive.key == 7 ? "acc-content current" : "acc-content"}>
                            <div className="content">
                                <div className="text">
                                    <p>Yes, there are loans available for the self-employed. You may be able to claim part of the car’s costs, including loan interest, as a tax deduction.</p><br></br>
                                    <p>If you purchase a car for less than $20,000, you can immediately claim the full value back as a tax deduction within the same year you buy it.</p><br></br>
                                    <p>If you purchase a car with a value of more than $20,000, you can still claim a deduction over time using the general small business pool.</p><br></br>
                                    <p>It is also worth considering equipment finance, which allows you to rent a vehicle over a set period of time. This allows you to have access to the vehicle straight away.</p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="accordion block">
                        <div className={isActive.key == 8 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(8)}>
                            <div className="icon-box"></div>
                            <h4>Can I get a car loan if I have a poor credit history?</h4>
                        </div>
                        <div className={isActive.key == 8 ? "acc-content current" : "acc-content"}>
                            <div className="content">
                                <div className="text">
                                    <p>Yes, there are lenders who can assist you if you have a poor credit history. Speak to your Amber Loans broker for more information.</p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="accordion block">
                        <div className={isActive.key == 9 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(9)}>
                            <h4>What types of vehicles can my broker finance for me?</h4>
                            <div className="icon-box"></div>
                        </div>
                        <div className={isActive.key == 9 ? "acc-content current" : "acc-content"}>
                            <div className="content">
                                <div className="text ">
                                    <p>We can source loans for the following:</p>
                                    <ul className="list-item mb_50 clearfix">
                                        <li><CircleIcon style={{ color: "var(--theme-color)", transform: "scale(0.3)" }} /> Cars </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="accordion block">
                        <div className={isActive.key == 10 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(10)}>
                            <div className="icon-box"></div>
                            <h4>How long will my car loan take to be approved?</h4>
                        </div>
                        <div className={isActive.key == 10 ? "acc-content current" : "acc-content"}>
                            <div className="content">
                                <div className="text">
                                    <p>You could have your finance approved within 2 days. Sometimes, depending on the circumstances of the transaction, the loan approval process can take longer. For example, some car dealerships can try and delay the process by not providing a Tax Invoice, giving them the opportunity to quote the finance themselves.</p><br></br>
                                    <p>We can organise car loan pre-approval for you to ensure there is no disappointment and delays regarding sourcing finance for your vehicle. In order to proceed with a pre-approval, we require an indication of the vehicle you are looking to purchase (the vehicle description may change) along with an application. It is best to provide supporting documents (i.e. Privacy Consent, Pay slips and Drivers Licence) upfront to ensure all income calculations are correct.</p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="accordion block">
                        <div className={isActive.key == 11 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(11)}>
                            <div className="icon-box"></div>
                            <h4>How is buying privately different from buying through a dealer?</h4>
                        </div>
                        <div className={isActive.key == 11 ? "acc-content current" : "acc-content"}>
                            <div className="content">
                                <div className="text">
                                    <p>Purchasing a vehicle privately may give you more room for negotiation on price and the ability to select a vehicle you are looking for in the price range you can afford. However, if you don’t buy through a dealership, you will have to provide more information in order to have the loan approved. For example, you will have to prove that the car title is clear, in order to allow your chosen lender to put a charge on it. In other words, you will have to access a payout letter that makes it clear you are purchasing a vehicle free from past owner encumbrance. The value of the vehicle will also be evaluated to ensure you are not paying too much.</p><br></br>
                                    <p>Purchasing a vehicle from the dealership is quite easy and all that is required is a Tax Invoice and banking details to electronically transfer funds at settlement.</p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="accordion block">
                        <div className={isActive.key == 12 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(12)}>
                            <div className="icon-box"></div>
                            <h4>Are there extra fees when buying cars privately?</h4>
                        </div>
                        <div className={isActive.key == 12 ? "acc-content current" : "acc-content"}>
                            <div className="content">
                                <div className="text">
                                    <p>When financing a vehicle privately there can be additional fees to cover an inspection report and photos of the vehicle. This fee can vary depending on the location of the inspection report. Some lenders also charge additional establishment fees.</p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="accordion block">
                        <div className={isActive.key == 13 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(13)}>
                            <h4>Are there any fees involved in taking out a car loan?</h4>
                            <div className="icon-box"></div>
                        </div>
                        <div className={isActive.key == 13 ? "acc-content current" : "acc-content"}>
                            <div className="content">
                                <div className="text ">
                                    <p>Yes, there may be some fees involved, including:</p>
                                    <ul className="list-item mb_50 clearfix">
                                        <li><CircleIcon style={{ color: "var(--theme-color)", transform: "scale(0.3)" }} /> lender application fee </li>
                                        <li><CircleIcon style={{ color: "var(--theme-color)", transform: "scale(0.3)" }} /> origination fee </li>
                                        <li><CircleIcon style={{ color: "var(--theme-color)", transform: "scale(0.3)" }} /> vehicle inspection fee (for private purchases) </li>
                                        <li><CircleIcon style={{ color: "var(--theme-color)", transform: "scale(0.3)" }} /> PPSR (Financiers Security Registration fee) </li>
                                        <li><CircleIcon style={{ color: "var(--theme-color)", transform: "scale(0.3)" }} /> stamp duty (applicable in NSW only)</li>
                                        <li><CircleIcon style={{ color: "var(--theme-color)", transform: "scale(0.3)" }} /> monthly account keeping fees </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="accordion block">
                        <div className={isActive.key == 14 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(14)}>
                            <div className="icon-box"></div>
                            <h4>Is a deposit required for a car loan?</h4>
                        </div>
                        <div className={isActive.key == 14 ? "acc-content current" : "acc-content"}>
                            <div className="content">
                                <div className="text">
                                    <p>You do not need a deposit to take out a car loan, however it may increase your chances of success and will also reduce your repayments.</p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="accordion block">
                        <div className={isActive.key == 15 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(15)}>
                            <div className="icon-box"></div>
                            <h4>How long do I have to pay off my car loan?</h4>
                        </div>
                        <div className={isActive.key == 15 ? "acc-content current" : "acc-content"}>
                            <div className="content">
                                <div className="text">
                                    <p>Loan terms vary depending on the lender you choose, ranging from 2 to 7 years.</p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="accordion block">
                        <div className={isActive.key == 16 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(16)}>
                            <div className="icon-box"></div>
                            <h4>How old can the vehicle be?</h4>
                        </div>
                        <div className={isActive.key == 16 ? "acc-content current" : "acc-content"}>
                            <div className="content">
                                <div className="text">
                                    <p>If you are a PAYG applicant, the vehicle cannot be more than 12 years old at the end of the contract. If you are a self-employed applicant, the vehicle cannot be more than 15 years old at the end of the contract. For those considering a classic car, some lenders do offer classic car loans.</p>
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
            </div>
        </>
    </Layout>;
}

export default FAQPage;
