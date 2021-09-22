import React, { useState, useEffect } from "react";
import Navigation from "../../components/navigation";
import SmoothScroll from "smooth-scroll";
import companyData from '../../data/companyData.json';
import Header from "../../components/Header";
import Features from "../../components/Features";
import About from "../../components/About";
import './styles.css';
import Services from "../../components/services";
import Gallery from "../../components/Gallery";
import Testimonials from "../../components/Testimonials";
import Team from "../../components/Team";
import Contact from "../../components/Contact";

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
});

const Index: React.FC = () => {

    const [landingPageData, setLandingPageData] = useState({} as any);

    useEffect(() => {
        setLandingPageData(companyData);
    }, [])

    console.log()

    return (
        <>
            <Navigation />
            <Header />
            <Features />
            <About />
            <Services />
            <Gallery />
            <Testimonials />
            <Team />
            <Contact />
        </>
    );
}

export default Index;