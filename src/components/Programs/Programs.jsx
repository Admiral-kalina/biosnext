"use client"
import React from 'react';
import {useSelector} from "react-redux";

import {ProgramOverview} from "./ProgramOverview/ProgramOverview";
import {ProgramsList} from "./ProgramsList/ProgramsList";
import MyLoader from "@/components/UI/MyLoader/MyLoader";


const Programs = ({type}) => {
    const {globalCoursesByLanguage, isLoading} = useSelector(store => store.courses);

    if(isLoading) {
        return (
           <MyLoader/>
        )
    }

    return (
        <div>
            {type === 'programElement'
                    ? <ProgramOverview programs={globalCoursesByLanguage.programs}/>
                    : <ProgramsList programs={globalCoursesByLanguage.programs}/>
            }

        </div>
    );
};

export default Programs;