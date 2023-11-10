import React from "react";

// components
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {strapiApi} from "@/api";
import Webinars from "@/components/Webinars/Webinars";



export const generateStaticParams = async () => {
    const programsList = await strapiApi.get(`/api/webbinarrs?populate=*`);
    const ids = programsList.data.data.map(webinar =>({id:webinar.id.toString()}))
    return ids
}

const ServicesProgramsList = () => {
    return (
        <div>
            <Header/>
            <Webinars type="webinarElement"/>
            <Footer/>
        </div>
    );
};

export default ServicesProgramsList;