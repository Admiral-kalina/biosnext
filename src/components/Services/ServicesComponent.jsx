"use client"
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {useTranslation} from "react-i18next";

// components
import Container from "../Container/Container";


// assets
import program from "../../app/media/images/services/program.svg";
import webinar from "../../app/media/images/services/webinar.svg"
import pharma from "../../app/media/images/services/pharma.svg"
import registration from "../../app/media/images/services/registration.svg"
import gmp from "../../app/media/images/services/gmp.svg"
import clinical from "../../app/media/images/services/clinical.svg"
import arrowUpRight from "../../app/media/images/arrowUpRight.svg"



// styles
import * as styles from "./services.module.scss";


const ServicesComponent = () => {
    const {t} = useTranslation()
    const firstContent = [
        {id: 0, text: 'a. Обеспечение соответствия нормативам и требованиям, уменьшая риск нарушений и штрафов.'},
        {id: 1, text: 'b. Уменьшение риска медицинских ошибок'},
        {id: 2, text: 'c. Оптимизация финансовых процессов'},
        {id: 3, text: 'd. Повышение вашей конкурентноспособности'},
        {id: 4, text: 'e. Возможность своевременно реагировать на изменения'},
        {id: 5, text: 'f. Возможность внедрения инноваций'},
    ];

    const secondContent = [
        {id: 0, text: 'a. Наши экспертные знания и опыт'},
        {id: 1, text: 'b. Объективность'},
        {id: 2, text: 'c. Новые идеи и подходы к решению проблем'},
        {id: 3, text: 'd. Уменьшение рисков'},
        {id: 4, text: 'e. Специализированная экспертиза'},
        {id: 5, text: 'f. Возможность вашего фокусирования на основной деятельности'},
    ];
    const thirdContent = [
        {id: 0, text: 'a. Знание актуальной информации'},
        {id: 1, text: 'b. Повышение квалификации'},
        {id: 2, text: 'c. Улучшение карьерных возможностей'},
        {id: 3, text: 'd. Повышение эффективности работы'},
        {id: 4, text: 'e. Сотрудничество и обмен опытом'},
        {id: 5, text: 'f. Сотрудничество с регуляторами'},
    ];
    const fourthContent = [
        {id: 0, text: 'a. Приобретение практических навыков'},
        {id: 1, text: 'b. Взаимодействие с опытными экспертами в своей сфере'},
        {id: 2, text: 'c. Получение всегда актуальной информации'},
        {id: 3, text: 'd. Закрепление теоретических знаний на практике'},
        {id: 4, text: 'e. Возможность сотрудничества между участниками'},
        {id: 5, text: 'f. Сертификация, подтверждающая знания и навыки в сфере фармаконадзора, GMP-сертификации, регистрации и клинического развития в фармацевтической отрасли'},
    ];
    return (
        <div className={styles.root}>
            <Container>
                <div className={styles.row}>
                    <p className={styles.title}>{t('services.services')}</p>
                    <div className={styles.courseRow}>
                        <Link href='/services/programs#Pharmacovigilance'>
                            <div className={styles.courseColumn}>
                                <Image className={styles.logo} src={pharma} alt="pharma"/>
                                <p className={styles.description}>Фармаконадзор</p>
                                <Image className={styles.arrow} src={arrowUpRight} alt="arrowUpRight"/>
                            </div>
                        </Link>
                        <Link href='/services/programs#Registration'>
                            <div className={styles.courseColumn}>
                                <Image className={styles.logo} src={registration} alt="registration"/>
                                <p className={styles.description}>Регистрация</p>
                                <Image className={styles.arrow} src={arrowUpRight} alt="arrowUpRight"/>
                            </div>
                        </Link>
                        <Link href='/services/programs#GMP-certification'>
                            <div className={styles.courseColumn}>
                                <Image className={styles.logo} src={gmp} alt="gmp"/>
                                <p className={styles.description}>GMP - сертификация</p>
                                <Image className={styles.arrow} src={arrowUpRight} alt="arrowUpRight"/>
                            </div>
                        </Link>
                        <Link href='/services/programs#ClinicalTrials'>
                            <div className={styles.courseColumn}>
                                <Image className={styles.logo} src={clinical} alt="clinical"/>
                                <p className={styles.description}>Клинические исследования</p>
                                <Image className={styles.arrow} src={arrowUpRight} alt="arrowUpRight"/>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className={styles.addition}>
                    <p className={styles.additionTitle}>Universal School of Pharmacovigilance & Medical affairs
                        предоставляет своим партнерам комплексные услуги, имеющие много преимуществ:</p>

                    <div className={styles.contentBlock}>
                        <p className={styles.contentTitle}>Аудиты (системы фармаконадзора, регистрационного досье)</p>
                        <ul className={styles.contentElements}>
                            {firstContent.map(el =>
                                <li key={el.id} className={styles.contentElement}>
                                  <p className={styles.contentText}>
                                      {el.text}
                                  </p>
                                </li>
                            )}
                        </ul>
                    </div>

                    <div className={`${styles.contentBlock} ${styles.contentBlockDark}`}>
                        <p className={styles.contentTitle}>Консалтинг</p>
                        <ul className={styles.contentElements}>
                            {secondContent.map(el =>
                                <li key={el.id} className={styles.contentElement}>
                                    <p className={styles.contentText}>
                                        {el.text}
                                    </p>
                                </li>
                            )}
                        </ul>
                    </div>

                    <div className={`${styles.contentBlock}`}>
                        <p className={styles.contentTitle}>Обучение</p>
                        <ul className={styles.contentElements}>
                            {thirdContent.map(el =>
                                <li key={el.id} className={styles.contentElement}>
                                    <p className={styles.contentText}>
                                        {el.text}
                                    </p>
                                </li>
                            )}
                        </ul>
                    </div>

                    <div className={`${styles.contentBlock} ${styles.contentBlockDark}`}>
                        <p className={styles.contentTitle}>Практические курсы</p>
                        <ul className={styles.contentElements}>
                            {fourthContent.map(el =>
                                <li key={el.id} className={styles.contentElement}>
                                    <p className={styles.contentText}>
                                        {el.text}
                                    </p>
                                </li>
                            )}
                        </ul>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default ServicesComponent;