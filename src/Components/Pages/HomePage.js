import React from "react";
import Banner from './HomePage/Banner';
import Features from './HomePage/Features';
import About from './HomePage/About';
import Services from './HomePage/Services';
import Calculator from './HomePage/Calculator';
import Video from './HomePage/Video';
import Funfacts from './HomePage/Funfacts';
import Testimonial from './HomePage/Testimonial';
import News from './HomePage/News';
import Subscribe from './HomePage/Subscribe';
import Layout from '../Layout';
import WanttoBuyHome from "./HomePage/WanttoBuyHome";
import HomeBanner from "./HomePage/HomeBanner";
import CompareHomeLoan from "./HomeLoan/CompareHomeLoan";


// import '../../assets/css/color/crimson.css';
// import '../../assets/css/color/orange.css';
// import '../../assets/css/color/pink.css';  
// import '../../assets/css/color/theme-color.css';
// import '../../assets/css/color/violet.css';


function HomePage() {
    return <div>
        <Layout headerStyle={1} >
            <Banner />

            <Services />
            <HomeBanner />
            {/* <Features /> */}
            {/* <About /> */}

            {/* <Video /> */}
            {/* <Funfacts /> */}
            <Testimonial />
            
            {/* <Subscribe /> */}
            <CompareHomeLoan />
        </Layout>

    </div>;
}

export default HomePage;
