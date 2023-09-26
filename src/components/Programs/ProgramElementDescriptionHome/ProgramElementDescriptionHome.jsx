import React from 'react';

// styles
import * as styles from "./programElement.module.scss"
import MyButton from "../../UI/MyButton/MyButton";
import WebinarListHome from "../../Webinars/WebinarListHome/WebinarListHome";
import {Link} from "react-router-dom";

const ProgramElementDescriptionHome = ({program}) => {
    console.log('PP', program)
    if (!program){
        return <div>Loading</div>
    }
    console.log('PROGRAM', program)
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <Link  to={'/home/programs/#programs'}>
                    <p className={styles.back}>Назад к программе</p>
                </Link>
                <div className={styles.row}>
                    <div className={styles.webinarsList}>
                        <WebinarListHome webinars={program.webbinarrs.data} isWebinarHome={false}/>
                    </div>
                    <div className={styles.program}>
                        <div className={styles.programTop}>
                            <p className={styles.section}>Программа</p>
                            <p className={styles.name}>{program.name}</p>
                            <p className={styles.date}> <span>Начало:</span> {program.start}</p>
                            <p className={styles.webinarCount}> <span>Вебинаров:</span> {program.webinarsCount}</p>
                        </div>
                        {/*{program.isAcquired?*/}
                        {false?
                            <></>
                            :
                            <div className={`${styles.programBottom} ${styles.hideOnMobile}`}>
                                <p className={styles.price}>{program.price} $</p>
                                <MyButton transparent>Купить Программу</MyButton>
                            </div>
                        }

                    </div>
                    <div className={`${styles.programBottom} ${styles.showOnMobile}`}>
                        <p className={styles.price}>{program.price} $</p>
                        <MyButton transparent>Купить Программу</MyButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgramElementDescriptionHome;