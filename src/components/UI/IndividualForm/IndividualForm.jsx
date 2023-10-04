import React from 'react';
import ContactForm from "../ContactForm/ContactForm";

// styles
import * as styles from "./individualForm.module.scss"
import Container from "../../Container/Container";

const IndividualForm = ({type, isWhite}) => {
    return (
        <div className={styles.root}>
               <div className={styles.content}>
                   <p className={styles.title}>Заказать индвидуальное обучение</p>
                   <div className={styles.row}>
                       <div className={styles.column}>
                           <p className={styles.text}>Вы можете заказать консультацию, диагностический аудит, проведение вебинара для своей команды или организацию конференции. Оффлайн или Онлайн</p>
                           <p className={styles.subtext}>Заполните, пожалуйста, форму обратной связи и укажите желаемую тему вебинара или название программы, а мы подберем для Вас оптимальный состав специалиста и удобный формат.</p>
                       </div>
                       <div className={styles.column}>
                           <ContactForm isWhite={isWhite} type={type}/>
                       </div>
                   </div>
               </div>

        </div>
    );
};

export default IndividualForm;