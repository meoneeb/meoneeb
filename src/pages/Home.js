import React from "react";
import LandingPage from "../components/home/LandingPage";
import Footer from "@/commonComponents/Footer";
import AboutMe from "@/components/home/AboutMe";
import Stats from "@/components/home/Stats";

export default function HomeScreen() {
    return (
        <>
            <LandingPage />
            <AboutMe/>
            <Stats/>
            <Footer/>          
        </>
    )
}