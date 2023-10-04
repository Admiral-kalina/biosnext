import React, {useEffect, useState} from "react";

// components
import Container from "../../Container/Container";

// styles
import * as styles from "./webinarOverview.module.scss"


import MyButton from "../../UI/MyButton/MyButton";

import logo from "../../../app/media/images/webinar/logo.png"
import IndividualForm from "../../UI/IndividualForm/IndividualForm";
import WebinarDescription from "../WebinarDescription/WebinarDescription";
import Image from "next/image";


export const WebinarOverview = ({context}) => {

    return (
        <div>
            <Container>
                <div className={styles.rootOverview}>
                    <div className={styles.overviewRow}>
                        <Image className={styles.image} src={logo} alt=""/>
                        <div className={styles.description}>
                            <p className={styles.title}>Вебинар №1</p>
                            <p className={`${styles.name} text60`}>Аспекты фармаконадзора</p>
                            <p className={styles.date}><span>Дата:</span> 10.11.2023</p>
                            <p className={styles.teacher}><span>Тренер:</span> Андрей Шимко, эксперт GMP/GDP</p>
                            <p className={styles.program}><span>Программа:</span> Фармаконадзор</p>
                            <p className={styles.format}><span>Формат:</span> 1 день; 1,5 часа</p>
                            <p className={styles.exactTime}><span>Время проведения:</span> 11:00-11:30</p>

                        </div>
                        <div className={styles.btnBlock}>
                            <MyButton golden>Добавить в корзину</MyButton>
                        </div>
                        <div className={styles.participants}>
                            <p className={styles.l1}>1 участник</p>
                            <p className={styles.r1}>500 ₴</p>
                            <p className={styles.l2}>2-5 участников</p>
                            <p className={styles.r2}>3000 ₴</p>
                            <p className={styles.l3}>6-10 участников</p>
                            <p className={styles.r3}>8000 ₴</p>
                        </div>
                    </div>
                </div>
                <div className={styles.descriptionBlock}>
                    <div className={styles.row}>
                        <p className={`${styles.title} text60`}>Описание</p>
                        <div className={styles.content}>
                            <p className={styles.contentTitle}>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                Вебинар "Аспекты Фармаконадзора" представляет собой обзор ключевых аспектов и основных понятий в области фармаконадзора. Она может быть полезной для студентов медицинских, фармацевтических, исследовательских и связанных с здравоохранением направлений.
                            </p>
                            <WebinarDescription/>
                        </div>

                    </div>
                    <div className={`${styles.row} ${styles.rowProgram}`}>
                        <p className={`${styles.title} text60`}>Программа</p>
                        <div className={styles.content}>
                            <WebinarDescription type="program"/>
                        </div>
                    </div>
                </div>
            </Container>

            <div >
                <IndividualForm type='individual'/>
            </div>
        </div>
    )
}