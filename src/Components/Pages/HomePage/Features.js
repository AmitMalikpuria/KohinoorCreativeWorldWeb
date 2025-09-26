import { Link } from "react-router-dom";



export default function Features() {
    return (
        <>
            <section className="feature-section mt_60">
                <div className="auto-container">
                    <div className="inner-container clearfix wow fadeInLeft animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="feature-block-one">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-5"></i></div>
                                <h4><Link>Your Trusted Financial Partner</Link></h4>
                                <p>Expert advice will provide you with greater clarity on all your financial needs and goals.</p>
                            </div>
                        </div>
                        <div className="feature-block-one">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-6"></i></div>
                                <h4><Link>24/7 Support from the Expert Team</Link></h4>
                                <p>Provides 24/7 support with a focus on exceptional and stress-free service.</p>
                            </div>
                        </div>
                        <div className="feature-block-one">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-7"></i></div>
                                <h4><Link>Lowest Processing Fee than Other Banks</Link></h4>
                                <p>Emphasizes lower fees compared to other banks, highlighting the financial benefit for customers.</p>
                            </div>
                        </div>
                        <div className="feature-block-one">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-8"></i></div>
                                <h4><Link>Less Time in any Loans Approval</Link></h4>
                                <p>Fast Loan Approvals in Record Time, Get Your Funds Quickly</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
