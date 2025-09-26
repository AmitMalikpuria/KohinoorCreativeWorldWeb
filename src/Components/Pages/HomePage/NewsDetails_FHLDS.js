import React from "react";
import Layout from "../../Layout";
import { Link } from "react-router-dom";
import news25 from '../../../assets/images/news/news-25.jpg'
import about7 from '../../../assets/images/service/service-3.jpg';
import Contactus from "../DialogBox/Contactus";

function NewsDetails() {
    return <Layout >
        {/* sidebar-page-container */}
        <section className="sidebar-page-container pt_80 pb_120">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12 content-side">
                        <div className="blog-details-content">
                            <div className="news-block-three">
                                <div className="inner-box">
                                    {/* <figure className="image-box" ><img src={news25} alt="" /></figure> */}
                                    <div className="lower-content">
                                        {/* <div className="post-date"><h4>14<span>Jan</span></h4></div> */}
                                        {/* <ul className="post-info mb_15">
                                            <li><i className="icon-32"></i><Link href="/blog-details">Admin</Link></li>
                                            <li><i className="icon-33"></i>3 Comment</li>
                                        </ul> */}
                                        <h2 style={{fontWeight:"100",fontSize:"45px",letterSpacing:"2px"}}>The Government's First Home Loan Deposit Scheme  (FHLDS) - Updated for 2022-23</h2><hr></hr>
                                        <p style={{fontWeight:"bolder"}}>The federal government has launched an initiative to assist people in entering the housing market for the first time by underwriting home loans for first home buyers. The government scheme for first time buyers allows approved applicants to take out a mortgage with just a 5% deposit and avoid paying lenders mortgage insurance.</p><hr></hr>
                                        <p>Exciting increases have been announced in the 2022-23 Federal Budget, allowing more first home buyers access to this scheme! The First Home Loan Deposit scheme has now been officially renamed the First Home Guarantee and from 1 July 2022 – 30 June 2025, the number of placements for the low deposit scheme will increase to 50,000 spots. After this three year period the number of placements will then revert to 35,000 per year.</p>
                                        <p>During this 3 year period, making up the 50,000 spots will include:</p>
                                        <ul className="list-item mb_50 clearfix">
                                            <li>35,000 places per year for the First Home Guarantee (formerly First Home Loan Deposit Scheme) for eligible first home buyers to enter the market with a 5% deposit and no LMI. </li>
                                            <li>5,000 places per year for the newly announced Regional Home Guarantee for eligible home buyers to purchase a new home in a regional location with a 5% deposit and no LMI. </li>
                                            <li>10,000 places per year for the Family Home Guarantee for eligible single parents buying a home with a 2% deposit and no LMI.</li>
                                        </ul>
                                        {/* <blockquote>
                                            <div className="icon-box"><img src="assets/images/icons/icon-5.png" alt="" /></div>
                                            <h5>“Lorem ipsum dolor sit amet, consectetur adipiscing elit amet purus tempor dui pharet consequat nibh elit urna interdum viera quam and arcu duis quis lectus donec nulla and aliquam dolore intun rodeo</h5>
                                            <div className="author-inner">
                                                <figure className="author-thumb"><img src="assets/images/news/author-1.jpg" alt="" /></figure>
                                                <h3>Donald Richard</h3>
                                                <span>Finance Advisor</span>
                                            </div>
                                        </blockquote> */}
                                    </div>
                                </div>
                            </div>
                            <div className="content-one pb_20">
                                <div className="text-box mb_50">
                                    <h2>What is the First Home Guarantee (Formerly First Home Loan Deposit Scheme)?</h2>
                                    <p>The government’s scheme is designed to allow easier and faster access to the property market for first home buyers. Initially starting in 2020 as the First Home Loan Deposit Scheme (FHLDS) - now renamed The First Home Guarantee1 - allows first time buyers the opportunity to purchase a home with a deposit of as little as 5%, while avoiding lenders' mortgage insurance (LMI). Most banks and lenders require a minimum deposit of 20% of the property’s value for the borrower to be exempt from LMI. The scheme allows first home buyers who can’t reach this threshold to take out a loan if they have saved at least 5% of the value of the property they are buying. The government will underwrite the loan so that borrowers do not have to pay LMI.</p>
                                </div>
                            </div>
                            <div className="content-two mb_50">
                                <h2>How does it work?</h2>
                                <p>You will need to apply for the scheme through one of the scheme’s participating lenders, or authorised representatives such as a Amber Loans broker and demonstrate your eligibility. If you are approved, you can then take out a home loan with a lender and the government will act as your guarantor. Although your lender will still do their normal checks on your financial situation, this will make it easier to get a loan without having saved for a 20% deposit.</p>
                                <br /> <p>Usually, if a lender decides to approve a loan with a deposit of less than 20%, they will require the borrower to pay what’s called lenders mortgage insurance (LMI). This is a form of insurance that the lender takes out so as to cover the risk of the borrower being unable to repay the mortgage. Because the government is serving as guarantor on the loan, there is no need for the bank to take out insurance. LMI can be quite expensive, depending on the size of the deposit, the size of the loan, and the terms of the lender. The government says you could save around $10,000 on LMI, but the amount you actually save will be dependent on the particulars of your loan. Also, if you had previously planned to save for a 20% deposit, you would not have had to pay LMI, in any event.</p>
                                <br /> <p>If you take out a home loan under the scheme, you will then receive support until your loan’s balance is reduced to below 80% of the value of your property at purchase. However, if you refinance your loan, sell your home or move out, you will no longer be eligible for support. If you are refinancing your home and you still owe more than 80% of the value of the property, you will likely need to pay the fee for lenders' mortgage insurance with your new lender. </p>
                            </div>
                            <div className="ImageCard" style={{}}>
                                <div className="ImageCard_Child" style={{gap:100}}>
                                    {/* <h1>About Amber Loans</h1> */}
                                    <h5>Don't miss out, places in the scheme are limited! To find out how you can apply contact your local Amber Loans broker today.</h5>
                                    <div className="form-group">
                                        {/* <Link to="/contactus#_form" className="theme-btn btn-three">Contact Us</Link> */}
                                        <Contactus btn1="btn-three"/>
                                    </div>
                                </div>
                                <div className="ImageCard_Child_2">
                                    <img src={about7} alt="" />
                                </div>
                            </div>
                            <div className="content-two mb_50 mt_40">
                                <h2>Benefits</h2>
                                <p>The government’s deposit scheme can also be used alongside the First Home Super Saver Scheme. The Super Saver Scheme allows home buyers to withdraw voluntary superannuation contributions they have made to their super fund, and to put this money towards a deposit on a property. So, if you have made voluntary super contributions (of up to $15,000 per financial year), you can withdraw that money to take advantage of the government’s 5% deposit offer. Announced in the 2021-22 Federal Budget, from 1 July 2022, the limit you can withdraw has been increased from $30,000 for to $50,000 for individuals. </p>
                            </div>
                            <div className="content-two mb_50 ">
                                <h2>Risks</h2>
                                <p>There is a risk in taking out a loan with a smaller deposit, since the amount left owing is obviously going to be larger. Because of this, your mortgage might end up lasting longer than it otherwise would. The standard maximum loan term is 30 years, and your mortgage is not likely to be extended beyond this. However, if you are to take out a larger loan over the same loan term, your minimum repayments will obviously need to be larger. This means that a mortgage taken out under the government’s 5% deposit scheme could put more pressure on borrowers and make it harder to pay back a home loan.</p>
                               <br/> <p>The other drawback of the government’s home ownership scheme is that borrowers will have to pay more total interest over the course of the loan. Since the deposit will be smaller, the amount against which interest is calculated will be greater. This might affect borrowers less if they are expecting their earnings to increase substantially during their career, in which case they could accelerate the repayment of their loan. However, lenders may charge extra fees for making additional repayments on fixed rate home loans in excess of allowable annual limits.</p>
                            </div>
                            <div className="content-two mb_50 ">
                                <h2>Am I eligible for the First Home Guarantee? </h2>
                                <p>The scheme is open to individuals who are earning up to $125,000 per year, as well as couples with combined earnings of up to $200,000. To apply for this scheme, you will need to provide your most recent notice of assessment from the ATO to prove you meet the income requirements. To be eligible, you must be a genuine first home buyer and have not owned property in Australia prior and must show that you have saved at least 5% of the value of the property you are purchasing. This scheme is only open to Australian citizens that are 18 years or older.</p>
                               <br/> <p>It’s important to note that this scheme is only provided to first home buyers looking to purchase their first home. Therefore, to be eligible for the scheme you will need to move into the property within six months of the date of settlement and continue to live there whilst the home loan has a guarantee under the scheme. This scheme is only available to owner occupied properties and will not cover investment properties.</p>
                               <br/> <p>Announced in the 2022-23 Federal Budget2, the Government has increased the number of places available under this scheme to 50,000 per year for 3 years from 2022-23 financial year. After the initial 3 years, the number of places will be reduced to 35,000.</p>
                               <br/> <p>For the initial three years – up to 30 June 2025 - It is important to note that 10,000 of the 50,000 available spaces for this scheme will only be applicable eligible regional home buyers who are looking to build or purchase a newly built home in a regional location, under the Regional Home Guarantee section of the scheme, while 5,000 places are allocated to single parents as part of the Family Home Guarantee. </p>
                               <br/> <p>Not all properties will be eligible to be purchased under the government’s home deposit scheme. The scheme will only underwrite loans for ‘entry properties’, excluding high-value properties. An ‘entry property’ has been determined by the government through the price caps, to ensure the scheme is only available for the purchase of a modest home, or the purchase of land and construction of a modest home. There is no fixed maximum value for properties eligible under the scheme, as price caps will be determined relative to the property’s local market and dependent on if you are looking to purchase an existing home or a newly built home. You will need to check what the property price cap is in your area.</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
        {/* sidebar-page-container end */}



    </Layout>
}

export default NewsDetails;
