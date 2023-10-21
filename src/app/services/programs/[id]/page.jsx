import React from "react";

// components
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Programs from "@/components/Programs/Programs"
import {strapiApi} from "@/api";



export const generateStaticParams = async () => {
    const programsList = await strapiApi.get(`/api/courses?populate=*`);
    return programsList.data.data.map(course =>({id:course.id.toString()}))

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