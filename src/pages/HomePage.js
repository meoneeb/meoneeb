import React from "react";
import LandingPage from "../components/home/LandingPage";
import Footer from "@/commonComponents/Footer";
import AboutMe from "@/components/home/AboutMe";
import Stats from "@/components/home/Stats";
import Experience from "@/components/home/Experience";
import '../styles/globals.scss'


export default function HomeScreen() {
    return (
        <>
            <LandingPage />
            <AboutMe/>
            <Stats/>
            <Experience/>
            <Footer/>         
        </>
    )
}