'use client'
import React from 'react';
import Container from "../Container/Container";

import * as styles from "./webinars.module.scss"
import {WebinarOverview} from "./WebinarOverview/WebinarOverview";
import {WebinarsList} from "./WebinarList/WebinarsList";
import Link from "next/link";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import MyLoader from "@/components/UI/MyLoader/MyLoader";
import {getAllEventsWithSort, getNearestEventsByKey} from "@/helpers/getNearestEventsByKey";

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


const Webinars = ({type}) => {
    const {t} = useTranslation();
    const {globalCoursesByLanguage, isLoading} = useSelector(store => store.courses);

    if(isLoading) {
        return (
            <MyLoader/>
        )
    }

    const sortedWebinarsByDate = getAllEventsWithSort(globalCoursesByLanguage.webinars, 'date')



    return (
        <div>
            {type === 'webinarElement'
                ? <WebinarOverview webinars={globalCoursesByLanguage.webinars}/>
                :
                <Container>
                    <div className={styles.root}>
                        <div className="back_group">
                            <Link href={'/services'} className="back">{t('services.services')}</Link>
                        </div>
                        <p className={styles.title}>{t('services.webinars')}</p>
                        <div className={styles.row}>
                            <WebinarsList webinars={sortedWebinarsByDate}/>
                        </div>
                    </div>
                </Container>
            }
        </div>
    );
};

export default Webinars;