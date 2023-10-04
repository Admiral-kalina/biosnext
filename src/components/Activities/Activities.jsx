'use client'
import React from 'react';

// styles
import * as styles from "./activities.module.scss"
import Container from "../Container/Container";
import MyCalendar from "../MyCalendar/MyCalendar";
import {WebinarsList} from "../Webinars/WebinarList/WebinarsList";
import IndividualForm from "../UI/IndividualForm/IndividualForm";

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
    return (
        <div className={styles.root}>
            <Container>
                <p className={`${styles.title} text60`}>Мероприятия</p>
                <div className={styles.calendar}>
                    <MyCalendar general={true}/>
                </div>
            </Container>
            <div className={styles.webinars}>
               <div className={styles.content}>
                   <p className={`${styles.title} text60`}>Вебинары</p>
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