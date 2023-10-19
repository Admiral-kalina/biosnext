import React from 'react';
import * as styles from "../programElement.module.scss";

import arrowUpRight from "../../../app/media/images/arrowUpRightSm.svg";

import Image from "next/image";
import Link from "next/link";
import {useTranslation} from "react-i18next";
import {convertDateFormat} from "@/helpers/convertTime";
import {getAllNearestEvents} from "@/helpers/getNearestEventsByKey";


const ProgramElement = ({programs}) => {
    const {t} = useTranslation();

    const closest = getAllNearestEvents(programs,'start')

    return (
        <>
            {closest.map(program =>
                <div key={program.id} className={styles.column}>
                    <Link href={`/services/programs/${program.id}`}>
                        <p className={styles.section}>{t('additional.program')}</p>
                        <p className={styles.name}>{program.name}</p>
                        <p className={styles.date}><span>{t('additional.beginning')}:</span> {convertDateFormat(program.start)}</p>
                        <div className={styles.bottom}>
                            <p><span>{t('additional.webinars')}:</span> {program.webinarsCount}</p>
                            <Image src={arrowUpRight} alt="arrowUpRight"/>
                        </div>
                    </Link>
                </div>
            )}
        </>
    );
};

export default ProgramElement;