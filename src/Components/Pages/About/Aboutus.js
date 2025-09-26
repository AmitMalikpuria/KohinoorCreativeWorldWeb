
import React from "react";
import About from "../HomePage/About";
import Layout from "../../Layout";
import AboutUsDetails from "../../AboutUsDetails";
import WhyChoose from "./WhyChoose";
import WhoWeAre from "./WhoWeAre";


function Aboutus() {
    return <Layout>
        <About />
        <WhyChoose />
        <WhoWeAre/>
        {/* <AboutUsDetails /> */}

    </Layout>;
}

export default Aboutus;
