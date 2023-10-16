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


export const ProgramOverview = ({programs}) => {
    const {t} = useTranslation()
    const [program, setProgram] = useState(null)
    const dispatch = useDispatch();

    useEffect(() => {
        const search = +window.location.pathname.split('/')[3];
        setProgram(findObjectById(programs, search))
    }, [programs])


    if (!program) {
        return (
            <MyLoader/>
        )
    }

    const handleClick = () => {
        dispatch(addBasketElement({
            data: program,
            type: BASKET_TYPES.PROGRAM
        }))
    }
    return (
        <div className={styles.rootOverview}>
            <Container>
                <div className={`${styles.back} back_group`}>
                    <Link href={'/services'} className="back back_white">{t('services.services')}</Link>
                    <Link href={'/services/programs'} className="back">{t('services.training')}</Link>
                </div>
                <div className={styles.hero}>
                    <div className={styles.overviewRow}>

                        {/*<img className={styles.image} src={logo} alt=""/>*/}
                        <div className={styles.description}>
                            <p className={styles.title}>{program.name}</p>
                            <p className={styles.subtitle}>{program.description}</p>
                            <p className={styles.date}><span>{t('additional.beginning')}:</span> {program.start}</p>
                            <p className={styles.program}>
                                <span>{t('additional.webinars')}:</span> {program.webinarsCount}</p>
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

                        <WebinarsList programId={program.id} webinars={program.webbinarrs.data}/>
                    </div>
                </div>
                <div className={styles.collapse}>
                    <div className={styles.title}>{t('services.levels')}</div>
                    <div className={styles.collapseWrapper}>
                        <MyCollapse/>
                    </div>
                </div>

            </Container>
            <div className={styles.individualForm}>
                <IndividualForm isWhite={true} type='individual'/>
            </div>
        </div>
    )
}