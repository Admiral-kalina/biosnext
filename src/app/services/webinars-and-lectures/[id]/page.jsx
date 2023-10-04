'use client'
import React from "react";

// components
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Webinars from "@/components/Webinars/Webinars";


const ServicesWebinarsList = (props) => {
    return (
        <div>
            <Header/>
            <Webinars type="webinarElement"/>
            <Footer/>
        </div>
    );
};

export default ServicesWebinarsList;