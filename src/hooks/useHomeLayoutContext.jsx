'use client'
import React, {useEffect, useState} from 'react';
import MyLoader from "@/components/UI/MyLoader/MyLoader";
import {usePreviousRoute} from "@/hooks/usePreviousRoute";
import {useSelector,shallowEqual } from "react-redux";
import {getNearestEventsByKey, sortProgramWebinars} from "@/helpers/getNearestEventsByKey";
import {checkLanguage} from "@/helpers/checkLanguage";
import {createProgramElement} from "@/helpers/createProgramElement";

const useHomeLayoutContext = () => {
    const [hash, setHash] = useState(null)
    const [search, setSearch] = useState(null)
    const previousRoute = usePreviousRoute();

    const user = useSelector(store => store.user,shallowEqual);
    const globalCourses = useSelector(store => store.courses,shallowEqual);


    useEffect(() => {
        const currenHash = location.hash.substring(1)
        const currentSearch =  Number(location.search.split('=')[1])
        setHash(currenHash)
        setSearch(currentSearch)
    }, [])


    const isLoading = user.isLoading || globalCourses.isLoading;

    //

    console.log('XX Loader', user.isLoading, globalCourses.isLoading)
    if (isLoading) {
        console.log('XX Loader Inside')
        return <MyLoader/>
    }

    const globalProgramsByLanguage = globalCourses.globalCoursesByLanguage?.programs;
    const globalWebinarsByLanguage = globalCourses.globalCoursesByLanguage?.webinars;
    console.log('XX',user, globalCourses)




    const userWebinarsByLanguage = user.user.userCoursesByLanguage.webinars;
    const userProgramsByLanguage = user.user.userCoursesByLanguage.programs;
    //
    console.log('XX', hash)
    let programElement
    console.log('XX Group',hash)
    console.log('XX Group',search)
    console.log('XX Group',globalProgramsByLanguage)
    console.log('XX Group',userProgramsByLanguage)

    if (hash === 'programs') {
        programElement = createProgramElement(
            globalProgramsByLanguage,
            userProgramsByLanguage,
            search
        )
    }

    if (hash === 'webinars') {
        programElement = createProgramElement(
            globalWebinarsByLanguage,
            userWebinarsByLanguage,
            search
        )
    }

    console.log('XX Group',programElement)


    const isLanguageEnglish = checkLanguage('en')

    const closestPrograms = getNearestEventsByKey(globalProgramsByLanguage, "start",2)
    const closestWebinars = getNearestEventsByKey(globalWebinarsByLanguage, "date", 3);
    const userAvailableWebinars = sortProgramWebinars(userProgramsByLanguage, userWebinarsByLanguage, 'date', isLanguageEnglish)

    console.log('QQ',closestWebinars,userAvailableWebinars)
    return {
        previousRoute,
        hash,
        isLanguageEnglish,
        programElement,
        closestWebinars,
        userAvailableWebinars,
        globalProgramsByLanguage,
        globalWebinarsByLanguage,
        userProgramsByLanguage,
        closestPrograms
    }
};

export default useHomeLayoutContext;