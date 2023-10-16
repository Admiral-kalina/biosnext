'use client'
import React from 'react';

// components
import Container from "../Container/Container";
import MyCalendar from "../MyCalendar/MyCalendar";
import {WebinarsList} from "../Webinars/WebinarList/WebinarsList";
import IndividualForm from "../UI/IndividualForm/IndividualForm";

// styles
import * as styles from "./activities.module.scss"
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";


const mockWebinars = [
    {
        id: 1,
        keyName: 'webinar',
        section: 'Вебинар',
        name: 'Аспекты Фармаконадзора',
        date: '10.11.2023',
        teacher: 'Анрей Шимко, эксперт GMP/GDP',
        duration: 30
    },
    {
        id: 2,
        keyName: 'webinar',
        section: 'Вебинар',
        name: 'Аспекты Фармаконадзора',
        date: '10.11.2023',
        teacher: 'Анрей Шимко, эксперт GMP/GDP',
        duration: 30
    },
    {
        id: 3,
        keyName: 'webinar',
        section: 'Вебинар',
        name: 'Аспекты Фармаконадзора',
        date: '10.11.2023',
        teacher: 'Анрей Шимко, эксперт GMP/GDP',
        duration: 30
    },
    {
        id: 4,
        keyName: 'webinar',
        section: 'Вебинар',
        name: 'Аспекты Фармаконадзора',
        date: '10.11.2023',
        teacher: 'Анрей Шимко, эксперт GMP/GDP',
        duration: 30
    },
    {
        id: 5,
        keyName: 'webinar',
        section: 'Вебинар',
        name: 'Аспекты Фармаконадзора',
        date: '10.11.2023',
        teacher: 'Анрей Шимко, эксперт GMP/GDP',
        duration: 30
    },
    {
        id: 6,
        keyName: 'webinar',
        section: 'Вебинар',
        name: 'Аспекты Фармаконадзора',
        date: '10.11.2023',
        teacher: 'Анрей Шимко, эксперт GMP/GDP',
        duration: 30
    },
    {
        id: 7,
        keyName: 'webinar',
        section: 'Вебинар',
        name: 'Аспекты Фармаконадзора',
        date: '10.11.2023',
        teacher: 'Анрей Шимко, эксперт GMP/GDP',
        duration: 30
    },
    {
        id: 8,
        keyName: 'webinar',
        section: 'Вебинар',
        name: 'Аспекты Фармаконадзора',
        date: '10.11.2023',
        teacher: 'Анрей Шимко, эксперт GMP/GDP',
        duration: 30
    },
]

const Activities = () => {
    const {t} = useTranslation();
    const { globalCoursesByLanguage, isLoading, error } = useSelector(
        (state) => state.courses
    );

    if(isLoading){
        return (
            <p>loading</p>
        )
    }

    if(error){
        return (
            <p>{error}</p>
        )
    }

    return (
        <div className={styles.root}>
            <Container sizeZero>
                <p className={`${styles.title} text60`}>{t('additional.activities')}</p>
                <div className={styles.calendar}>
                    <MyCalendar
                        general={true}
                        globalPrograms={globalCoursesByLanguage.programs}
                    />
                </div>
            </Container>
            <div className={styles.webinars}>
               <div className={styles.content}>
                   <p className={`${styles.title} text60`}>{t('cabinet.webinar')}</p>
                   <div className={styles.row}>
                       <WebinarsList webinars={mockWebinars}/>
                   </div>
               </div>
            </div>
            <div className={styles.individualForm}>
                <IndividualForm isWhite={true} type='individual'/>
            </div>
        </div>
    );
};

export default Activities;