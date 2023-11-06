import React, {useEffect, useState} from "react";
import Container from "../../Container/Container";
import * as styles from "./programOverview.module.scss";
import MyButton from "../../UI/MyButton/MyButton";
import {WebinarsList} from "../../Webinars/WebinarList/WebinarsList";
import MyCollapse from "../../UI/MyCollapse/MyCollapse";
import IndividualForm from "../../UI/IndividualForm/IndividualForm";
import Link from "next/link";
import {findObjectById} from "@/helpers/findObjectById";
import {useTranslation} from "react-i18next";
import {addBasketElement} from "@/features/basket/basketSlice";
import {BASKET_TYPES} from "@/helpers/basketData";
import {useDispatch} from "react-redux";
import MyLoader from "@/components/UI/MyLoader/MyLoader";
import {convertDateFormat} from "@/helpers/convertTime";


export const ProgramOverview = ({programs, hash}) => {
    const {t} = useTranslation()
    const [program, setProgram] = useState(null)
    const dispatch = useDispatch();

    useEffect(() => {
        const search = +window.location.pathname.split('/')[3];
        setProgram(findObjectById(programs, search))
        console.log('Search', search)
    }, [programs])


    if (!program) {
        return (
            <MyLoader/>
        )
    }

    const isTopicPharma = program.topic === 'Pharmacovigilance'
    const handleClick = () => {
        dispatch(addBasketElement({
            data: program,
            type: BASKET_TYPES.PROGRAM,
            t
        }))
    }

    console.log('PPR1', program)
    return (
        <div className={styles.rootOverview}>
            <Container sizeZero>
                <div className={`${styles.back} back_group`}>
                    <Link href={'/services'} className="back back_white">{t('services.services')}</Link>
                    <Link href={`/services/programs#${hash}`} className="back">{t('services.training')}</Link>
                </div>
                <div className={styles.hero}>
                    <div className={styles.overviewRow}>

                        {/*<img className={styles.image} src={logo} alt=""/>*/}
                        <div className={styles.description}>
                            <p className={styles.title}>{program.name}</p>
                            <p className={styles.subtitle}>{program.description}</p>

                            <a className={styles.anchor} href="#my-anchor">{t('additional.checkLevel')}</a>

                            <p className={styles.date}>
                                <span>{t('additional.beginning')}:</span> {convertDateFormat(program.start)}</p>
                            <p className={styles.program}>
                                <span>{t('additional.webinars')}:</span> {program.webinarsCount}</p>
                            {/*TODO*/}
                            <p className={styles.level}>
                                <span>Уровень подготовки: </span>{program.levelOfDifficulty}
                            </p>
                            <p className={styles.price}>${program.price}</p>
                        </div>
                        <div className={styles.btnBlock}>
                            <MyButton onClick={handleClick} golden>{t('additional.addToBasket')}</MyButton>
                        </div>
                    </div>
                </div>

                <div className={styles.webinars}>
                    <p className={styles.webinarsTitle}>{t('services.webinarsInProgram')}</p>
                    <div className={styles.row}>
                        <WebinarsList hash={hash} programId={program.id} webinars={program.webbinarrs.data}/>
                    </div>
                </div>
                {isTopicPharma &&
                    <div id="my-anchor" className={styles.collapse}>
                        <div className={styles.title}>{t('services.levels')}</div>
                        <div className={styles.collapseWrapper}>
                            <MyCollapse type={'levels'} program={program}/>
                        </div>
                    </div>
                }
            </Container>
            <div className={styles.individualForm}>
                <IndividualForm isWhite={true} type='individual'/>
            </div>
        </div>
    )
}