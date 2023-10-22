'use client'
import React, {useEffect} from "react";
import useHomeLayoutContext from "@/hooks/useHomeLayoutContext";
import ProgramsListHome from "@/components/Programs/ProgramsListHome/ProgramsListHome";
import MyLoader from "@/components/UI/MyLoader/MyLoader";
import {scrollToTop} from "@/helpers/scrollToTop";

const Programs = () => {

    useEffect(() => {
        scrollToTop()
    }, []);
    const {userProgramsByLanguage, closestPrograms} = useHomeLayoutContext()
    console.log('JJJ', userProgramsByLanguage,closestPrograms)

    if(!userProgramsByLanguage){
        return <MyLoader/>
    }
    return (
        <div>
            <ProgramsListHome
                closestPrograms={closestPrograms}
                userPrograms={userProgramsByLanguage}
            />

        </div>
    );
};

export default Programs;