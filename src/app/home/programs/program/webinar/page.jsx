'use client'
import React, {useEffect} from "react";
import WebinarOverviewHome from "@/components/Webinars/WebinarOverviewHome/WebinarOverviewHome";
import useHomeLayoutContext from "@/hooks/useHomeLayoutContext";
import MyLoader from "@/components/UI/MyLoader/MyLoader";
import {scrollToTop} from "@/helpers/scrollToTop";

const Webinar = () => {

    useEffect(() => {
        scrollToTop()
    }, []);

    const {programElement, userAvailableWebinars, hash, previousRoute} = useHomeLayoutContext()

    console.log('WB', programElement, userAvailableWebinars)

    if(!programElement){
        return <MyLoader/>
    }
    return (
        <>
            <WebinarOverviewHome
                webinar={programElement}
                userAvailableWebinars={userAvailableWebinars}
                hashString={hash}
                previousRoute={previousRoute}/>
        </>
    );
};

export default Webinar;