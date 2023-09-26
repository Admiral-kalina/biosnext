"use client"

import React, {useEffect, useState} from "react";
import {userData} from "../../helpers/userData";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserCourses} from "../../features/userSlice/userSlice";
import Container from "../Container/Container";

// styles

import * as styles from "./home.module.scss";
// assets
import union from "../../app/media/images/home/union.svg";

import laptop from "src/app/media/images/home/laptop.svg";
import schedule from "src/app/media/images/home/schedule.svg"
import about from "src/app/media/images/home/about.svg";
import MyCalendar from "../MyCalendar/MyCalendar";
import {Link, Route, Routes, useLocation, useSearchParams, useNavigate} from "react-router-dom";

import Programs from "../Programs/Programs";
import {ProgramsList} from "../Programs/ProgramsList/ProgramsList";
import {WebinarsList} from "../Webinars/WebinarList/WebinarsList";
import ProgramsListHome from "../Programs/ProgramsListHome/ProgramsListHome";
import ProgramElementDescriptionHome from "../Programs/ProgramElementDescriptionHome/ProgramElementDescriptionHome";
import WebinarOverviewHome from "../Webinars/WebinarOverviewHome/WebinarOverviewHome";
import WebinarListHome from "../Webinars/WebinarListHome/WebinarListHome";
import {findObjectsByLanguage} from "@/helpers/findObjectByLanguage";
import {createProgramElement} from "@/helpers/createProgramElement";
import Image from "next/image";
import {usePreviousRoute} from "@/hooks/usePreviousRoute";
import AboutUsHome from "@/components/aboutUsHome/aboutUsHome";


const navs = [
    {description: 'Вебинары', path: 'webinars', img: union},
    {description: 'программы', path: 'programs', img: laptop},
    {description: 'расписание', path: 'schedule', img: schedule},
    {description: 'о нас', path: 'about-us', img: about},
]

const Home = ({context}) => {
    const [searchParams] = useSearchParams();
    const location = useLocation()
    const previousRoute = usePreviousRoute();

    console.log('Bazz1', previousRoute)

    const {language} = useSelector(store => store.user.user);
    const user = useSelector(store => store.user);
    const globalCourses = useSelector(store => store.courses);


    const programSearch = Number(searchParams.get('program'));
    const webinarSearch = Number(searchParams.get('webinar'));


    if (user.isLoading && globalCourses.isLoading) {
        return (
            <div>loading</div>
        )
    }


    const globalProgram = globalCourses.courses.programs;
    const globalWebinars = globalCourses.courses.webinars;

    const globalProgramsByLanguage = findObjectsByLanguage(globalProgram, language, false,globalWebinars);
    const globalWebinarsByLanguage = findObjectsByLanguage(globalWebinars, language, false, );

    const userProgram = user.user.courses.programs;
    const userWebinars = user.user.courses.webinars;
    const userWebinarsByLanguage = findObjectsByLanguage(userWebinars, language, true );
    const userProgramsByLanguage = findObjectsByLanguage(userProgram, language, true ,globalWebinars);

    // console.log('RIP', userWebinarsByLanguage)


    console.log('FF PROGRAMS', userProgramsByLanguage)
    // console.log('FF WEBINARS', globalWebinarsByLanguage)

    let programElement

    if (programSearch && userProgramsByLanguage.length && globalProgramsByLanguage.length) {
        programElement = createProgramElement(globalProgramsByLanguage, userProgramsByLanguage, programSearch)
    }

    if (webinarSearch && userWebinarsByLanguage.length && globalWebinarsByLanguage.length) {
        programElement = createProgramElement(globalWebinarsByLanguage, userWebinarsByLanguage, webinarSearch)
    }



    console.log('PROP', context, location)

    console.log('BAZA', location)
    const hashString = location.hash.substring(1)

    console.log('PROP', user)
    console.log('PROP', user)
    console.log('Rout', previousRoute)

    return (

        <div className={styles.root}>
            <div className={styles.gridSidebar}>
                {navs.map(nav =>
                    <div
                        key={nav.id}
                        className={`
                        ${styles.block} 
                        ${hashString === nav.path ? styles.active : ''}
              
                        `}>
                        <Link to={`/home/${nav.path}/#${nav.path}`}>
                            <div className={styles.blockElement}>
                                <Image src={nav.img} alt={laptop}/>
                                <p>{nav.description}</p>
                            </div>
                        </Link>
                    </div>
                )}

                <div className={styles.block}>
                    <div className={styles.blockElement}>
                        <p>ВЫЙТИ</p>
                    </div>
                </div>
            </div>

            <div className={styles.gridContent}>
                <div className={styles.contentWrapper}>

                    <Routes>
                        <Route path='/home/schedule/' element={<MyCalendar/>}/>

                        <Route path='/home/webinars/' element={
                            <div className={styles.webinarsRow}>
                                <div className={styles.column}>
                                    <p className={styles.title}>Доступные мне</p>
                                    <div className={styles.content}>
                                        <WebinarListHome isWebinarHome={true} webinars={userWebinarsByLanguage}/>
                                    </div>
                                </div>
                                <div className={styles.column}>
                                    <p className={styles.title}>Ближайшие</p>
                                    <div className={styles.content}>
                                        <WebinarListHome isWebinarHome={true} webinars={globalWebinarsByLanguage}/>
                                    </div>
                                </div>

                            </div>
                        }/>

                        <Route path='/home/webinars/webinar/' element={
                            <>
                                <WebinarOverviewHome webinar={programElement} hashString={hashString} previousRoute={previousRoute}/>
                            </>

                        }/>

                        <Route path='/home/programs/' element={
                            <div className={styles.programsRow}>
                                <ProgramsListHome
                                    globalPrograms={globalProgramsByLanguage}
                                    userPrograms={userProgramsByLanguage}
                                />
                            </div>
                        }/>
                        <Route path='/home/programs/:id' element={

                            <div className={styles.programDescriptioRow}>
                                <ProgramElementDescriptionHome program={programElement}/>
                            </div>
                        }/>

                        <Route path='/home/programs/program/webinar' element={

                            <div className={styles.programDescriptioRow}>
                                <WebinarOverviewHome previousRoute={previousRoute} hashString={hashString}  webinar={programElement}/>
                            </div>
                        }/>

                        <Route path='/home/about-us' element={

                            <div className={styles.programDescriptioRow}>
                                <AboutUsHome/>
                            </div>
                        }/>

                    </Routes>
                </div>
            </div>
        </div>

    );
};

export default Home;
