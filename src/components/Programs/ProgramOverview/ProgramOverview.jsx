import React from "react";
import Container from "../../Container/Container";
import * as styles from "./programOverview.module.scss";
import logo from "../../../app/media/images/webinar/logo.png";
import MyButton from "../../UI/MyButton/MyButton";
import {WebinarsList} from "../../Webinars/WebinarList/WebinarsList";
import MyCollapse from "../../UI/MyCollapse/MyCollapse";
import ContactForm from "../../UI/ContactForm/ContactForm";
import IndividualForm from "../../UI/IndividualForm/IndividualForm";


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
    }
]

export const ProgramOverview = () => {
    return (
        <div className={styles.rootOverview}>
            <Container>

                <div className={styles.hero}>
                    <div className={styles.overviewRow}>

                        {/*<img className={styles.image} src={logo} alt=""/>*/}
                        <div className={styles.description}>
                            <p className={styles.title}>Программа Фармаконадзор</p>
                            <p className={styles.subtitle}>С целью повышения эффективности образовательных программ в
                                сфере фармаконадзора Universal School of Pharmacovigilance & Medical affairs
                                предоставляет обучение по системе, разработанной в соответствии с фоновым уровнем знаний
                                каждого из обучаемых специалистов.</p>
                            <p className={styles.date}><span>Начало:</span> 10.11.2023</p>
                            <p className={styles.program}><span>Вебинаров:</span> 3</p>
                            <p className={styles.price}>500$</p>
                        </div>
                        <div className={styles.btnBlock}>
                               <MyButton golden>Добавить в корзину</MyButton>
                        </div>
                    </div>

                </div>
                <div className={styles.webinars}>
                    <p className={styles.webinarsTitle}>Вебинары в программе</p>
                    <div className={styles.row}>
                        <WebinarsList webinars={mockWebinars}/>
                    </div>
                </div>
                <div className={styles.collapse}>
                    <div className={styles.title}>Уровни профессиональной подготовки</div>
                    <div className={styles.collapseWrapper}>
                        <MyCollapse/>
                    </div>
                </div>

            </Container>
            <div className={styles.individualForm}>
                <IndividualForm isWhite={true} type='individual'/>
            </div>
        </div>
    )
}