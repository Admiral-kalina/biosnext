"use client"
import React from 'react';

import Container from "../Container/Container";

import {ProgramOverview} from "./ProgramOverview/ProgramOverview";
import {ProgramsList} from "./ProgramsList/ProgramsList";

const mockPrograms = [
    {id: 1, keyName: 'program', section: 'Программа', name: 'фармаконадзор', date: '10.11.2023', webinarsCount: 3},
    {id: 2, keyName: 'program', section: 'Программа', name: 'фармаконадзор', date: '10.11.2023', webinarsCount: 3},
    {id: 3, keyName: 'program', section: 'Программа', name: 'фармаконадзор', date: '10.11.2023', webinarsCount: 3},
    {id: 4, keyName: 'program', section: 'Программа', name: 'фармаконадзор', date: '10.11.2023', webinarsCount: 3},
    {id: 5, keyName: 'program', section: 'Программа', name: 'фармаконадзор', date: '10.11.2023', webinarsCount: 3},
    {id: 6, keyName: 'program', section: 'Программа', name: 'фармаконадзор', date: '10.11.2023', webinarsCount: 3},
    {id: 7, keyName: 'program', section: 'Программа', name: 'фармаконадзор', date: '10.11.2023', webinarsCount: 3}, {id: 8, keyName: 'program', section: 'Программа', name: 'фармаконадзор', date: '10.11.2023', webinarsCount: 3},
];


const Programs = ({type}) => {
    return (
        <div>
            {type === 'programElement'
                    ? <ProgramOverview/>
                    : <ProgramsList programs={mockPrograms}/>
            }

        </div>
    );
};

export default Programs;