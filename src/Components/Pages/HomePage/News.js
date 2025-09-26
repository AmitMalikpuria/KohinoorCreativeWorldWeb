'use client'

import mrg11 from '../../../assets/images/Projects/MRG/mrg11.jpg'

import { Link } from 'react-router-dom'


export default function News() {
    return (
        <>
            <section className="news-section pt_30 pb_90">
                <div className="auto-container">
                    <div className="sec-title centred mb_60">
                        {/* <h6>Latest News</h6> */}
                        <h2 style={{color:"var(--theme-color)"}}>Residential Developments</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                            <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box" style={{ backgroundImage: `url(${mrg11})` }}>
                                    <div className="content-box" style={{ padding: "90px 0px 0px 0px!important" }}>
                                        {/* <h3 className='mt_30'><Link>MRG CROWN</Link></h3> */}
                                        <p className='newPaddingTop' >Sector 106, Gurugram, Dwarka Expressway</p>
                                        <p>3 BHK UNITS</p>
                                        <p>Area: 1,359 sq.ft to 1,593 sq.ft</p>
                                        {/* <div className='areaDetails'>
                                            <p>3 BHK Area: 1,359 sq.ft to 1,593 sq.ft</p>
                                            <p>3 BHK UNITS</p>
                                        </div> */}
                                        <p >Starting from ₹2.29 crore</p>
                                        <div className="btn-box text-center"><Link to="/residential-developments/mrg-crown" className="theme-btn btn-one">View Details</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
