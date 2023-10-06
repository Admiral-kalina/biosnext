"use client"
import React from "react";
import {useSelector} from "react-redux";
import {Link, Route, Routes, useLocation, useSearchParams} from "react-router-dom";
import Image from "next/image";

// helpers
import {createProgramElement} from "@/helpers/createProgramElement";
import {usePreviousRoute} from "@/hooks/usePreviousRoute";

// components
import AboutUsHome from "@/components/aboutUsHome/aboutUsHome";
import WebinarOverviewHome from "../Webinars/WebinarOverviewHome/WebinarOverviewHome";
import ProgramElementDescriptionHome from "@/components/Programs/ProgramElementDescriptionHome/ProgramElementDescriptionHome";
import WebinarListHome from "../Webinars/WebinarListHome/WebinarListHome";
import ProgramsListHome from "../Programs/ProgramsListHome/ProgramsListHome";
import MyCalendar from "../MyCalendar/MyCalendar";

// styles
import * as styles from "./home.module.scss";

// assets
import union from "../../app/media/images/home/union.svg";
import laptop from "src/app/media/images/home/laptop.svg";
import schedule from "src/app/media/images/home/schedule.svg"
import about from "src/app/media/images/home/about.svg";


const navs = [
    {id: 0, description: 'Вебинары', path: 'webinars', img: union},
    {id: 1, description: 'программы', path: 'programs', img: laptop},
    {id: 2, description: 'расписание', path: 'schedule', img: schedule},
    {id: 3, description: 'о нас', path: 'about-us', img: about},
]


const Home = () => {
    const [searchParams] = useSearchParams();
    const location = useLocation()
    const previousRoute = usePreviousRoute();

    const user = useSelector(store => store.user);
    const globalCourses = useSelector(store => store.courses);

    const programSearch = Number(searchParams.get('program'));
    const webinarSearch = Number(searchParams.get('webinar'));

    const hashString = location.hash.substring(1)

    const isLoading = user.isLoading && globalCourses.isLoading;

    if (isLoading) {
        return <div>loading</div>
    }

    const globalProgramsByLanguage = globalCourses.globalCoursesByLanguage.programs;
    const globalWebinarsByLanguage = globalCourses.globalCoursesByLanguage.webinars;

    const userWebinarsByLanguage = user.user.userCoursesByLanguage.webinars;
    const userProgramsByLanguage = user.user.userCoursesByLanguage.programs;

    let programElement

    if (programSearch && userProgramsByLanguage.length && globalProgramsByLanguage.length) {
        programElement = createProgramElement(
            globalProgramsByLanguage,
            userProgramsByLanguage,
            programSearch
        )
    }

    if (webinarSearch && userWebinarsByLanguage.length && globalWebinarsByLanguage.length) {
        programElement = createProgramElement(
            globalWebinarsByLanguage,
            userWebinarsByLanguage,
            webinarSearch
        )
    }


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
                        <Route path='/home/schedule/' element={<MyCalendar programs={userProgramsByLanguage}/>}/>
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
                                <WebinarOverviewHome webinar={programElement} hashString={hashString}
                                                     previousRoute={previousRoute}/>
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
                                <WebinarOverviewHome previousRoute={previousRoute} hashString={hashString}
                                                     webinar={programElement}/>
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
