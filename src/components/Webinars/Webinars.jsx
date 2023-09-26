'use client'
import React from 'react';
import Container from "../Container/Container";

import * as styles from "./webinars.module.scss"
import {WebinarOverview} from "./WebinarOverview/WebinarOverview";
import {WebinarsList} from "./WebinarList/WebinarsList";

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

    return (
        <div>
            {type === 'webinarElement'
                ? <WebinarOverview />
                :
                <Container>
                    <div className={styles.root}>
                        <p className={styles.back}>Услуги</p>
                        <p className={styles.title}>Лекции и вебинары</p>
                        <div className={styles.row}>
                            <WebinarsList webinars={mockWebinars}/>
                        </div>
                    </div>
                </Container>
            }
        </div>
    );
};

export default Webinars;