import React from 'react';
import ProgramElement from "../ProgramElement/ProgramElement";

import * as styles from "./programsListHome.module.scss"
import ProgramElementHome from "../ProgramElementHome/ProgramElementHome";
import {useTranslation} from "react-i18next";

const ProgramsListHome = ({userPrograms, globalPrograms}) => {
    const {t} = useTranslation()

    return (
        <div className={styles.root}>
            <p className={`${styles.title} ${styles.titleAvailable}`}>{t('cabinet.availableToMe')}</p>
            <div className={styles.row}>
                <ProgramElementHome programs={userPrograms}/>
            </div>
            <p className={`${styles.title} ${styles.titleSoon}`}>{t('cabinet.nearest')}</p>
            <div className={styles.row}>
                <ProgramElementHome programs={globalPrograms}/>
            </div>
        </div>
    );
};

export default ProgramsListHome;

