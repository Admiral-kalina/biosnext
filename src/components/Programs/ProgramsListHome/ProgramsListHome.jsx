import React from 'react';
import ProgramElement from "../ProgramElement/ProgramElement";

import * as styles from "./programsListHome.module.scss"
import ProgramElementHome from "../ProgramElementHome/ProgramElementHome";

const ProgramsListHome = ({userPrograms, globalPrograms}) => {
    return (
        <div className={styles.root}>
            <p className={`${styles.title} ${styles.titleAvailable}`}>Доступные мне</p>
            <div className={styles.row}>
                <ProgramElementHome programs={userPrograms}/>
            </div>
            <p className={`${styles.title} ${styles.titleSoon}`}>Ближайшие</p>
            <div className={styles.row}>
                <ProgramElementHome programs={globalPrograms}/>
            </div>
        </div>
    );
};

export default ProgramsListHome;

