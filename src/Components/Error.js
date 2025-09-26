
import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import imgError from '../assets/images/icons/error-1.png'

function Error() {
    return <Layout  breadcrumbTitle="404 Error">
        <section className="error-section centred pt_120 pb_120">
            <div className="auto-container">
                <div className="inner-box">
                    <figure className="error-image"><img src={imgError} alt="" /></figure>
                    <h2>Sorry, Something Went Wrong.</h2>
                    <Link to="/home" className="theme-btn btn-one">Back to Homepage</Link>
                </div>
            </div>
        </section>

    </Layout>;
}

export default Error;
