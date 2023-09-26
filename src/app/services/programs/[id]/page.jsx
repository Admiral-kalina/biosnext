import React from "react";

// components
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Programs from "@/components/Programs/Programs"


const ServicesProgramsList = () => {
    return (
        <div>
            <Header/>
            <Programs type="programElement"/>
            <Footer/>
        </div>
    );
};

export default ServicesProgramsList;