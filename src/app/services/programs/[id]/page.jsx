import React from "react";

// components
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Programs from "@/components/Programs/Programs"
import {strapiApi} from "@/api";



export const generateStaticParams = async () => {
    const programsList = await strapiApi.get(`/api/courses?populate=*`);
    console.log('programsList KK',programsList)
    const ids = programsList.data.data.map(course =>({id:course.id.toString()}))
    console.log('IDS',ids)
    return ids
}

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