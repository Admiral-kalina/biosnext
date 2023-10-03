import React, {useEffect, useState} from 'react';

import * as styles from "./webinarOverview.module.scss";
import WebinarDescription from "../WebinarDescription/WebinarDescription";

import mockImg from "../../../app/media/images/home/webinarMock.png"
import MyButton from "../../UI/MyButton/MyButton";

import Image from "next/image";
import {Link} from "react-router-dom";


const WebinarOverviewHome = ({webinar, hashString, previousRoute}) => {
    console.log('BAZZ2', hashString, previousRoute)
    if (!webinar) {
        return <div>Loading</div>
    }

    const handleBack = () => {
    }

    let route = '';

    if (previousRoute) {
        route = `${previousRoute.pathname}${previousRoute.search}#${hashString}`
    } else {
        route = `/home/${hashString}?#${hashString}`
    }

    console.log('HOME1',webinar)

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <Link to={route}>
                    {hashString === 'webinars' ?
                        <p className={styles.back}> Назад </p>
                        :
                        <p className={styles.back}>Назад к программе</p>
                    }
                </Link>
                <div className={styles.row}>
                    <div className={`${styles.column} ${styles.scrollable}`}>
                        <p className={styles.section}>Вебинар</p>
                        <p className={styles.name}>Клинические испытания</p>
                        <div className={`${styles.contentTop} ${styles.showOnPhone}`}>
                            <p className={styles.date}>15.11.2023</p>
                            <p className={styles.teacher}>Андрей Шимко, эксперт GMP/GDP</p>
                            <p className={styles.program}>Фармакология</p>
                            <p className={styles.time}>30 минут</p>
                            <p className={styles.time}>11:30</p>
                        </div>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <p className={styles.text}>Вебинар "Аспекты Фармаконадзора" представляет собой обзор ключевых
                            аспектов и основных понятий в области фармаконадзора. Она может быть полезной для студентов
                            медицинских, фармацевтических, исследовательских и связанных с здравоохранением
                            направлений. </p>
                        <Image src={mockImg} alt="preview"/>
                        <div className={styles.description}>
                            <WebinarDescription/>
                        </div>
                    </div>
                    <div className={`${styles.column} ${styles.fixed}`}>
                        <div className={`${styles.contentTop} ${styles.hideOnPhone}`}>
                            <p className={styles.date}>15.11.2023</p>
                            <p className={styles.teacher}>Андрей Шимко, эксперт GMP/GDP</p>
                            <p className={styles.program}>Фармакология</p>
                            <p className={styles.time}>30 минут</p>
                            <p className={styles.time}>11:30</p>
                        </div>
                        {webinar.isAcquired ?
                            <div className={styles.content}>
                                <div className={styles.contentLectures}>
                                    <MyButton transparent>
                                        <p
                                            className={styles.youtube}>
                                            Смотреть на YouTube
                                        </p>
                                    </MyButton>
                                    <MyButton transparent>
                                        <p
                                            className={styles.synopsis}>
                                            Скачать конспект лекции
                                        </p>
                                    </MyButton>
                                    <MyButton transparent>
                                        <p
                                            className={styles.presentation}>
                                            Скачать презентацию
                                        </p>
                                    </MyButton>
                                </div>
                            </div>
                            :
                            <div className={styles.content}>

                                <div className={styles.contentBuy}>
                                    <p className={styles.price}>180$</p>
                                    <MyButton transparent>Купить</MyButton>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebinarOverviewHome;