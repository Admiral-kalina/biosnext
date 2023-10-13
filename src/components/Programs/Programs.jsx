"use client"
import React from 'react';

import Container from "../Container/Container";

import {ProgramOverview} from "./ProgramOverview/ProgramOverview";
import {ProgramsList} from "./ProgramsList/ProgramsList";
import {useSelector} from "react-redux";



const Programs = ({type}) => {
    const {globalCoursesByLanguage, isLoading, error} = useSelector(store => store.courses);
    const  a = useSelector(store => store.courses);
    if(isLoading) {
        return (
            <p>loading</p>
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