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
import Link from "next/link";
import { useParams } from 'next/navigation'
import { useRouter } from 'next/router';
import {useTranslation} from "react-i18next";
import {findObjectById} from "@/helpers/findObjectById";
import MyLoader from "@/components/UI/MyLoader/MyLoader";


export const WebinarOverview = ({webinars}) => {
    const {t} = useTranslation();

    const [webinar,setWebinar] = useState()
    const [hash, setHash] = useState('');

    useEffect(() => {
        const search = +window.location.pathname.split('/')[3];
        setWebinar( findObjectById(webinars, search))
        // Assuming you're running in a browser context
        const currentHash = window.location.hash;
        setHash(currentHash ? currentHash.substring(1).split('=')[1] : '');  // Remove '#' from the beginning
    }, [webinars]);

    if(!webinar) {
        return (
            <MyLoader/>
        )
    }
    return (
        <div>
            <Container sizeZero>
                <div className={styles.rootOverview}>
                    <div className={`${styles.back} back_group`}>
                        <Link href={'/services'} className="back back_white">{t('services.services')}</Link>
                        {hash ?
                            <>
                                <Link href={'/services/programs'} className="back back_white">{t('services.training')}</Link>
                                <Link href={`/services/programs/${hash}`} className="back ">{t('services.program')}</Link>
                            </>
                            :
                            <Link href={'/services/webinars-and-lectures'} className="back">{t('services.webinars')}</Link>
                        }
                    </div>
                    <div className={styles.overviewRow}>
                        <Image className={styles.image} src={logo} alt=""/>
                        <div className={styles.description}>
                            <p className={styles.title}>{t('additional.webinar')} №1</p>
                            <p className={`${styles.name} text60`}>{webinar.name}</p>
                            <p className={styles.date}><span>{t('additional.data')}:</span> {webinar.date}</p>
                            <p className={styles.teacher}><span>{t('additional.coach')}:</span> {webinar.teacher}</p>
                            <p className={styles.program}><span>{t('additional.program')}:</span> {webinar.topic}</p>
                            <p className={styles.format}><span>{t('additional.format')}:</span> {webinar.format}</p>
                            <p className={styles.exactTime}><span>{t('additional.exactTime')}:</span> {webinar.exactTime}</p>

                        </div>
                        <div className={styles.btnBlock}>
                            <MyButton golden>{t('additional.addToBasket')}</MyButton>
                        </div>
                        <div className={styles.participants}>
                            <p className={styles.l1}>{t('additional.oneParticipant')}</p>
                            <p className={styles.r1}>500 ₴</p>
                            <p className={styles.l2}>{t('additional.fewParticipant')}</p>
                            <p className={styles.r2}>3000 ₴</p>
                            <p className={styles.l3}>{t('additional.manyParticipant')}</p>
                            <p className={styles.r3}>8000 ₴</p>
                        </div>
                    </div>
                </div>
            </Container>
                <div className={styles.descriptionBlock}>
                 <div className={styles.descriptionContainer}>
                     <div className={styles.row}>
                         <p className={`${styles.title} text60`}>{t('services.description')}</p>
                         <div className={styles.content}>
                             <p className={styles.contentTitle}>
                                 {/* eslint-disable-next-line react/no-unescaped-entities */}
                                 {webinar.descriptionTitle}
                                 {/*{webinar.descriptionSubtitle}*/}
                             </p>
                             <WebinarDescription
                                 programTitle={webinar.descriptionSubtitle} webinarDescription={webinar.descriptionWebinar}/>
                         </div>

                     </div>
                     <div className={`${styles.row} ${styles.rowProgram}`}>
                         <p className={`${styles.title} text60`}>{t('services.program')}</p>
                         <div className={styles.content}>
                             <WebinarDescription type="program" programDescription={webinar.descriptionProgram}/>
                         </div>
                     </div>
                 </div>
                </div>

            <div >
                <IndividualForm isWhite type='individual'/>
            </div>
        </div>
    )
}

// 1. Понятие и принципы проведения аудита поставщика:
//     - регуляторные требования и ожидания;
// - риски, ограничения;
// - виды аудитов поставщика.
// 2. Подготовка и проведение:
//     - источники информации для аудита;
// - условия и проведение (сфера применения; материально-техническое обеспечение; обмен коммуникациями и документами).
// 3. Составление отчета аудита:
//     - регуляторные требования и ожидания;
// - структура, содержание и объем отчета;
// - наиболее распространенные ошибки и рекомендации по их предотвращению.
// 4. Накопленный опыт и выводы.
//
//


//
// dectriptionTitle
//
//     dectriptionSubtitle
//
// dectriptionProgram
// 1. Понятие и принципы проведения аудита поставщика:
//     - регуляторные требования и ожидания;
// - риски, ограничения;
// - виды аудитов поставщика.
// 2. Подготовка и проведение:
//     - источники информации для аудита;
// - условия и проведение (сфера применения; материально-техническое обеспечение; обмен коммуникациями и документами).
// 3. Составление отчета аудита:
//     - регуляторные требования и ожидания;
// - структура, содержание и объем отчета;
// - наиболее распространенные ошибки и рекомендации по их предотвращению.
// 4. Накопленный опыт и выводы.