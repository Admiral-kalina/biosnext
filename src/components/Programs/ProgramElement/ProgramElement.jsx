import React from 'react';
import * as styles from "../programElement.module.scss";

import arrowUpRight from "../../../app/media/images/arrowUpRightSm.svg";

import Image from "next/image";
import Link from "next/link";
import {useTranslation} from "react-i18next";


const ProgramElement = ({programs}) => {
    const {t} = useTranslation();
    return (
        <>
            {programs.map(program =>
                <div key={program.id} className={styles.column}>
                    <Link href={`programs/${program.id}`}>
                        <p className={styles.section}>{program.section}</p>
                        <p className={styles.name}>{program.name}</p>
                        <p className={styles.date}><span>{t('additional.beginning')}:</span> {program.date}</p>
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