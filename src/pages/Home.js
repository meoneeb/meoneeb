import React from "react";
import LandingPage from "../components/home/LandingPage";
import Footer from "@/commonComponents/Footer";
import AboutMe from "@/components/home/AboutMe";

export default function HomeScreen() {
    return (
        <>
            <LandingPage />
            <AboutMe/>
            <Footer/>          
        </>
    )
}