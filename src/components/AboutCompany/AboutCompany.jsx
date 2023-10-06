'use client'
import React from 'react';
import Image from "next/image";
import Link from "next/link";

//components
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

//styles
import  "./aboutCompany.scss"

//asset
import aboutBgMiddle from "../../app/media/images/about/about-bg-middle.png";
import aboutBgMiddleMobile from "../../app/media/images/about/about-bg-middle-mobile.png";
import aboutBgMiddleLines from "../../app/media/images/about/about-bg-middle-lines.png";
import aboutBgMiddleLinesMobile from "../../app/media/images/about/about-bg-middle-lines-mobile.png";
import checkIcon from "../../app/media/images/check.svg"
import icon10 from "../../app/media/images/icon/icon10.svg";
import icon11 from "../../app/media/images/icon/icon11.svg";


const AboutCompany = () => {
    return (
       <>
           <Header/>
           <main>
               <article className="our-goal">
                   <div className="container d-block-md">
                       <div className="our-goal-block">
                           <h1 className="main-title">
                               Наша главная цель
                           </h1>

                           <section className="our-goal-block__description">
                               <p>
                                   Мы обучаем культуре безопасного применения лекарственных средств путем универсального подхода для специалистов разного уровня квалификации
                               </p>

                               <p>
                                   Присоединяйтесь к нам и двигайтесь вперед к профессиональному росту и совершенствованию.
                               </p>
                           </section>
                       </div>
                   </div>
               </article>
               <article className="description-block">
                   <section className="description-block__marquee">
                       <div className="marquee-container">
                           <div className="marquee-about">
                               Universal School of Pharmacovigilance & Medical affairs
                           </div>
                       </div>
                   </section>
                   <div className="container d-block-md">
                       <section className="description-block__wrapper">
                           <div className="description-block__description">
                               <h2 className="description-block__title">Мы инновационная и независимая образовательная
                                   платформа </h2>
                               <p className="description-block__text">
                                   Здесь можно получить инновации, знания и ответы на сложные вопросы в области
                                   фармаконадзора, GMP-сертификации, регистрации и клинического развития в фармацевтической
                                   отрасли
                               </p>
                           </div>
                           <picture>
                               <source media="(max-width: 600px)" srcSet={aboutBgMiddleMobile}/>
                               <Image src={aboutBgMiddle} alt="human hands typing on a keyboard"/>
                           </picture>
                       </section>
                   </div>
               </article>
               <article className="main-areas">
                   <picture className="main-areas__bg">
                       <source media="(max-width: 600px)" srcSet={aboutBgMiddleLinesMobile}/>
                       <Image src={aboutBgMiddleLines} alt="background lines"/>
                   </picture>
                   <div className="container d-block-md">
                       <div className="main-areas__items">
                           <h2 className="main-areas__title">
                               Наши основные направления
                           </h2>

                           <ul className="main-areas__list">
                               <li className="main-areas__list--item">
                                   Регистрация
                               </li>
                               <li className="main-areas__list--item">
                                   Клинические исследования
                               </li>
                               <li className="main-areas__list--item">
                                   Фармаконадзор
                               </li>
                               <li className="main-areas__list--item">
                                   GMP-сертификация
                               </li>
                           </ul>
                       </div>
                       <section className="main-areas__mission">
                           {/*<i className="icon-temples"></i>*/}
                           <Image src={icon11} alt="icon"/>
                           <div className="main-areas__mission--items">
                               <h2 className="main-areas__title">Миссия</h2>
                               <p>
                                   Помочь специалистам в фармацевтической и смежной ей отраслях принимать более эффективные
                                   решения в критических бизнес-процессах, влияющих на успех их деятельности
                               </p>
                               <p>
                                   Мы делаем это, обучая специалистов инновационным концепциям, которые они могут получить
                                   только у практикующих экспертов
                               </p>
                           </div>
                       </section>
                   </div>
               </article>
               <article className="medical-affairs">
                   <div className="container d-block-md">
                       <div className="medical-affairs__items">
                           <h2 className="medical-affairs__title">Universal School of Pharmacovigilance <br/> & Medical affairs</h2>

                           <ul className="medical-affairs__list">
                               <li>
                                   <Image src={checkIcon} alt="checkIcon"/>
                                   Изучаем проблемы рынка и определяем их актуальность
                               </li>
                               <li>
                                   <Image src={checkIcon} alt="checkIcon"/>
                                   Собираем лучших экспертов в тематике выявленной проблемы
                               </li>
                               <li>
                                   <Image src={checkIcon} alt="checkIcon"/>
                                   Организовываем и реализуем курсы обучения по критически важным для бизнеса компетенциям,
                                   характерным для фармацевтической индустрии и смежных отраслей.
                               </li>
                           </ul>
                       </div>
                   </div>
               </article>
               <article className="services">
                   <div className="container d-block-md">
                       <div className="services__wrapper">
                           <h2 className="services__title">
                               Предоставление комплексных услуг своим партнерам
                           </h2>
                           <section className="services__items">
                               <div className="services__item">
                                   <h3 className="services__item--title">
                                       Консалтинг
                                   </h3>
                                   <p>
                                       Lorem ipsum dolor sit amet consectetur. At vitae nibh etiam mauris egestas convallis
                                       pharetra pulvinar pharetra.
                                   </p>
                               </div>
                               <div className="services__item">
                                   <h3 className="services__item--title">
                                       Аудиты
                                   </h3>
                                   <p>
                                       Lorem ipsum dolor sit amet consectetur. At vitae nibh etiam mauris egestas convallis
                                       pharetra pulvinar pharetra.
                                   </p>
                               </div>
                               <div className="services__item">
                                   <h3 className="services__item--title">
                                       Обучение
                                   </h3>
                                   <p>
                                       Lorem ipsum dolor sit amet consectetur. At vitae nibh etiam mauris egestas convallis
                                       pharetra pulvinar pharetra.
                                   </p>
                               </div>
                               <div className="services__item">
                                   <h3 className="services__item--title">
                                       Практические курсы
                                   </h3>
                                   <p>
                                       Lorem ipsum dolor sit amet consectetur. At vitae nibh etiam mauris egestas convallis
                                       pharetra pulvinar pharetra.
                                   </p>
                               </div>
                           </section>
                       </div>
                   </div>
               </article>
               <article className="description">
                   <div className="container d-block-md">
                       <div className="description__wrapper">
                           <h2 className="visually-hidden">Description of our advantages</h2>

                           <div className="description__container">
                               <div className="description__items">
                                   <div className="description__item">
                                       <Image src={icon10} alt="icon"/>
                                       <p>
                                           Все наши курсы обучения
                                           и образовательные программы разработаны и преподаются эксклюзивной сетью
                                           экспертов, признанных на международном уровне своими коллегами как лидеры
                                           общественного мнения в своей области знаний.
                                       </p>
                                   </div>
                                   <div className="description__item">
                                       <Image src={icon10} alt="icon"/>

                                       <p>
                                           Практикуемая нами система обучения позволяет как освоить профессию с чистого
                                           листа, так
                                           и усовершенствовать свои знания
                                           в узкой специализации
                                       </p>
                                   </div>
                                   <div className="description__item">
                                       <Image src={icon10} alt="icon"/>

                                       <p>
                                           Мы умеем делать сложную научную и клиническую информацию более доступной для
                                           тех, кто не так хорошо знаком с этой областью.
                                       </p>
                                   </div>
                               </div>
                           </div>


                           <Link className="btn btn-yellow" href={'/contacts'}>Записаться</Link>
                       </div>
                   </div>
               </article>
           </main>
           <Footer/>
       </>
    )
}

export default AboutCompany;