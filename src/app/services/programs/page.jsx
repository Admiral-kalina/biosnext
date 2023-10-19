import React from "react";

// components
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Programs from "@/components/Programs/Programs"
import {strapiApi} from "@/api";
import {findObjectsByLanguage} from "@/helpers/findObjectByLanguage";


const ServicesProgramsList = () => {
    return (
        <div>
            <Header/>
            <Programs/>
            <Footer/>
        </div>
    );
};






export default ServicesProgramsList;