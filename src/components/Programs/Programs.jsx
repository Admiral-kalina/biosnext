"use client"
import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";

import {ProgramOverview} from "./ProgramOverview/ProgramOverview";
import {ProgramsList} from "./ProgramsList/ProgramsList";
import MyLoader from "@/components/UI/MyLoader/MyLoader";


const Programs = ({type}) => {
    const {globalCoursesByLanguage, isLoading} = useSelector(store => store.courses);
    const [hash, setHash] = useState(null);

    useEffect(() => {
        setHash(location.hash.substring(1))
    }, [])
    if(isLoading) {
        return (
           <MyLoader/>
        )
    }

    return (
        <div>
            {type === 'programElement'
                    ? <ProgramOverview hash={hash} programs={globalCoursesByLanguage.programs}/>
                    : <ProgramsList hash={hash} programs={globalCoursesByLanguage.programs}/>
            }

        </div>
    );
};

export default Programs;