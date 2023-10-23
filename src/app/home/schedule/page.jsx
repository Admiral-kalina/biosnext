'use client'
import React, {useEffect} from "react";
import MyCalendar from "@/components/MyCalendar/MyCalendar";
import {checkLanguage} from "@/helpers/checkLanguage";
import {getNearestEventsByKey, sortProgramWebinars} from "@/helpers/getNearestEventsByKey";
import {useSelector} from "react-redux";
import {scrollToTop} from "@/helpers/scrollToTop";
import useHomeLayoutContext from "@/hooks/useHomeLayoutContext";

const Shedule = () => {
    useEffect(() => {
        scrollToTop()
    }, []);


    const {userProgramsByLanguage, globalProgramsByLanguage,userAvailableWebinars,globalWebinarsByLanguage,} = useHomeLayoutContext()

    return (
        <div>
            <MyCalendar
                userPrograms={userProgramsByLanguage}
                globalPrograms={globalProgramsByLanguage}
                userAvailableWebinars={userAvailableWebinars}
                globalWebinarsByLanguage={globalWebinarsByLanguage}
            />
        </div>
    );
};

export default Shedule;