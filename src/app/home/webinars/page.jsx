'use client'
import React, {useEffect} from "react";
import WebinarListHome from "@/components/Webinars/WebinarListHome/WebinarListHome";
import * as styles from "../home.module.scss"
import {getNearestEventsByKey, sortProgramWebinars} from "@/helpers/getNearestEventsByKey";
import {useSelector} from "react-redux";
import useHomeLayoutContext from "@/hooks/useHomeLayoutContext";
import {useTranslation} from "react-i18next";
import MyLoader from "@/components/UI/MyLoader/MyLoader";
import {scrollToTop} from "@/helpers/scrollToTop";

const Webinars = () => {

    useEffect(() => {
        scrollToTop()

    }, []);
    const {t} = useTranslation()
    const  {userAvailableWebinars, closestWebinars} =  useHomeLayoutContext()
    if(!userAvailableWebinars?.length){
        return <MyLoader/>
    }
    console.log('MMM',userAvailableWebinars)

    return (
        <div className={styles.webinarsRow}>
            <div className={styles.column}>
                <p className={styles.title}>{t('cabinet.availableToMe')}</p>
                <div className={styles.content}>
                    <WebinarListHome isWebinarHome={true} webinars={userAvailableWebinars}/>
                </div>
            </div>
            <div className={styles.column}>
                <p className={styles.title}>{t('cabinet.nearest')}</p>
                <div className={styles.content}>
                    <WebinarListHome isWebinarHome={true} webinars={closestWebinars}/>
                </div>
            </div>
        </div>
    );
};

export default Webinars;