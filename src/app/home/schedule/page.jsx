'use client'
import React, {useEffect} from "react";
import MyCalendar from "@/components/MyCalendar/MyCalendar";
import {checkLanguage} from "@/helpers/checkLanguage";
import {getNearestEventsByKey, sortProgramWebinars} from "@/helpers/getNearestEventsByKey";
import {useSelector} from "react-redux";
import {scrollToTop} from "@/helpers/scrollToTop";

const Shedule = () => {
    useEffect(() => {
        scrollToTop()
    }, []);

    const user = useSelector(store => store.user);
    const globalCourses = useSelector(store => store.courses);

    const globalProgramsByLanguage = globalCourses.globalCoursesByLanguage.programs;
    const globalWebinarsByLanguage = globalCourses.globalCoursesByLanguage.webinars;

    const userWebinarsByLanguage = user.user.userCoursesByLanguage.webinars;
    const userProgramsByLanguage = user.user.userCoursesByLanguage.programs;
    const isLanguageEnglish = checkLanguage('en')

    const closestWebinars = getNearestEventsByKey(globalWebinarsByLanguage, "date", 3);
    const userAvailableWebinars = sortProgramWebinars(userProgramsByLanguage, userWebinarsByLanguage, 'date', isLanguageEnglish)
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