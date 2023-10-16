import React from 'react';
import {useTranslation} from "react-i18next";

import ProgramElementHome from "../ProgramElementHome/ProgramElementHome";
import {getNearestEventsByKey} from "@/helpers/getNearestEventsByKey";

import * as styles from "./programsListHome.module.scss"


const ProgramsListHome = ({userPrograms, globalPrograms}) => {
    const {t} = useTranslation()
    const dataToSort = [...globalPrograms];

    const closest = getNearestEventsByKey(dataToSort, "start");

    return (
        <div className={styles.root}>
            <p className={`${styles.title} ${styles.titleAvailable}`}>{t('cabinet.availableToMe')}</p>
            <div className={styles.row}>
                <ProgramElementHome programs={userPrograms}/>
            </div>
            <p className={`${styles.title} ${styles.titleSoon}`}>{t('cabinet.nearest')}</p>
            <div className={styles.row}>
                <ProgramElementHome programs={closest}/>
            </div>
        </div>
    );
};

export default ProgramsListHome;

