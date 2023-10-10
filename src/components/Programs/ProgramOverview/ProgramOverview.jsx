import React, {useEffect, useState} from "react";
import Container from "../../Container/Container";
import * as styles from "./programOverview.module.scss";
import logo from "../../../app/media/images/webinar/logo.png";
import MyButton from "../../UI/MyButton/MyButton";
import {WebinarsList} from "../../Webinars/WebinarList/WebinarsList";
import MyCollapse from "../../UI/MyCollapse/MyCollapse";
import ContactForm from "../../UI/ContactForm/ContactForm";
import IndividualForm from "../../UI/IndividualForm/IndividualForm";
import Link from "next/link";
import {findObjectById} from "@/helpers/findObjectById";
import { useRouter } from 'next/navigation';


const mockWebinars = [
    {
        id: 1,
        keyName: 'webinar',
        section: 'Вебинар',
        name: 'Аспекты Фармаконадзора',
        date: '10.11.2023',
        teacher: 'Анрей Шимко, эксперт GMP/GDP',
        duration: 30
    },
    {
        id: 2,
        keyName: 'webinar',
        section: 'Вебинар',
        name: 'Аспекты Фармаконадзора',
        date: '10.11.2023',
        teacher: 'Анрей Шимко, эксперт GMP/GDP',
        duration: 30
    },
    {
        id: 3,
        keyName: 'webinar',
        section: 'Вебинар',
        name: 'Аспекты Фармаконадзора',
        date: '10.11.2023',
        teacher: 'Анрей Шимко, эксперт GMP/GDP',
        duration: 30
    },
    {
        id: 4,
        keyName: 'webinar',
        section: 'Вебинар',
        name: 'Аспекты Фармаконадзора',
        date: '10.11.2023',
        teacher: 'Анрей Шимко, эксперт GMP/GDP',
        duration: 30
    },
    {
        id: 5,
        keyName: 'webinar',
        section: 'Вебинар',
        name: 'Аспекты Фармаконадзора',
        date: '10.11.2023',
        teacher: 'Анрей Шимко, эксперт GMP/GDP',
        duration: 30
    },
    {
        id: 6,
        keyName: 'webinar',
        section: 'Вебинар',
        name: 'Аспекты Фармаконадзора',
        date: '10.11.2023',
        teacher: 'Анрей Шимко, эксперт GMP/GDP',
        duration: 30
    },
    {
        id: 7,
        keyName: 'webinar',
        section: 'Вебинар',
        name: 'Аспекты Фармаконадзора',
        date: '10.11.2023',
        teacher: 'Анрей Шимко, эксперт GMP/GDP',
        duration: 30
    },
    {
        id: 8,
        keyName: 'webinar',
        section: 'Вебинар',
        name: 'Аспекты Фармаконадзора',
        date: '10.11.2023',
        teacher: 'Анрей Шимко, эксперт GMP/GDP',
        duration: 30
    }
]

export const ProgramOverview = ({programs}) => {
    const [program, setProgram] = useState(null)

    useEffect(() =>{
        const search = +window.location.pathname.split('/')[3];
        console.log('PR1',programs,search)
        console.log('PR2', findObjectById(programs,search))
        setProgram(findObjectById(programs,search))
    },[programs])


    console.log('PR',programs)

    if(!program){

        return (
            <p>Loading</p>
        )
    }
    console.log('PR',programs)

    return (
        <div className={styles.rootOverview}>
            <Container>
              <div className={`${styles.back} back_group`}>
                  <Link href={'/services'} className="back back_white">Услуги</Link>
                  <Link href={'/services/programs'} className="back">Программы обучения</Link>
              </div>
                <div className={styles.hero}>
                    <div className={styles.overviewRow}>

                        {/*<img className={styles.image} src={logo} alt=""/>*/}
                        <div className={styles.description}>
                            <p className={styles.title}>{program.name}</p>
                            <p className={styles.subtitle}>{program.description}</p>
                            <p className={styles.date}><span>Начало:</span> {program.start}</p>
                            <p className={styles.program}><span>Вебинаров:</span> {program.webinarsCount}</p>
                            <p className={styles.price}>${program.price}</p>
                        </div>
                        <div className={styles.btnBlock}>
                               <MyButton golden>Добавить в корзину</MyButton>
                        </div>
                    </div>

                </div>
                <div className={styles.webinars}>
                    <p className={styles.webinarsTitle}>Вебинары в программе</p>
                    <div className={styles.row}>
                        <WebinarsList programId={23} webinars={program.webbinarrs.data}/>
                    </div>
                </div>
                <div className={styles.collapse}>
                    <div className={styles.title}>Уровни профессиональной подготовки</div>
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