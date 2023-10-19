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