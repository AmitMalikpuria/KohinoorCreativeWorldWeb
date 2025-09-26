import React from "react"
import { Link } from "react-router-dom";
import pagetitle from '../../src/assets/images/background/page-title.jpg'
import shape18 from '../../src/assets/images/shape/shape-18.png'
import shape17 from '../../src/assets/images/shape/shape-17.png'

function Breadcrumb({ breadcrumbTitle,breadcrumbBanner }) {
    return (   <>
            <section className="page-title centred">
                <div className="bg-layer" style={{ backgroundImage: `url(${breadcrumbBanner})` }}></div>
                {/* <div className="pattern-layer">
                    <div className="pattern-1" style={{ backgroundImage: `url(${shape18})` }}></div>
                    <div className="pattern-2" style={{ backgroundImage: `url(${shape17})` }}></div>
                </div> */}
                <div className="auto-container">
                <div className="content-box">
                        <h1 style={{color:"var(--theme-color)"}}>{breadcrumbTitle}</h1>
                        {/* <ul className="bread-crumb clearfix">
                            <li><Link to="/home">Home</Link></li>
                            <li>{breadcrumbTitle}</li>
                        </ul> */}
                    </div>
                </div>
            </section>

        </>
    )
}

export default Breadcrumb;