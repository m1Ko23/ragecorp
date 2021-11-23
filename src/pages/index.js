import React from 'react';
import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import Layout from "../components/App/Layout"
import MainBanner from '../components/BigDataAnalysisStartup/MainBanner'
import WhyChooseUs from '../components/BigDataAnalysisStartup/WhyChooseUs'
import Funfacts from '../components/BigDataAnalysisStartup/Funfacts'
import Services from '../components/BigDataAnalysisStartup/Services'
import CaseStudy from '../components/BigDataAnalysisStartup/CaseStudy'

const Home = () => {
    return (
        <Layout>
            <Navbar />
            <MainBanner />
            <WhyChooseUs />
            <Funfacts />
            <Services />
            <CaseStudy />
            <Footer />
        </Layout>
    );
}

export default Home;