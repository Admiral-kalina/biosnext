"use client"
import * as React from "react"


import bgTop from "../../public/media/img/bg-top.png"
import bgTopMobile from "../../public/media/img/bg-top-mobile.png"
import acrew from "../../public/media/svg/acrew.svg"
import miro from "../../public/media/svg/miro.svg"
import loom from "../../public/media/svg/loom.svg"
import icon from "../../public/media/svg/icon.svg"
import airbnb from "../../public/media/svg/airbnb.svg"

import icon1 from "./media/images/icon/icon1.svg";
import icon2 from "./media/images/icon/icon2.svg";
import icon3 from "./media/images/icon/icon3.svg";
import icon4 from "./media/images/icon/icon4.svg";
import icon5 from "./media/images/icon/icon5.svg";

import logo1 from "./media/images/icon/logo1.svg"
import logo2 from "./media/images/icon/logo2.svg"
import logo3 from "./media/images/icon/logo3.svg"
import logo4 from "./media/images/icon/logo4.svg"
import logo5 from "./media/images/icon/logo5.svg"

import "./index.scss"
import {useEffect, useRef, useState} from "react";
import {useTranslation} from "react-i18next";
import Image from "next/image";


export default function Home() {
    const {t} = useTranslation()
  return (
    <main >
        <div  className={` page main-page`}>
            <article className="presentation">
                <picture className="presentation__bg">
                    <source media="(max-width: 600px)" srcSet={bgTopMobile}/>
                    <img src={bgTop} alt="background lines"/>

                </picture>
                <div className="container d-block-md">
                    <div className="presentation-block">
                        <h1 className="main-title">
                            {t('main.title1')} <br/>
                            {t('main.title2')}
                        </h1>

                        <section className="presentation-block__description">
                            <p>
                            </p>
                            <nav>
                                {/*<a href="#" className="btn btn-yellow">Записаться</a>*/}

                                {/*<div className="btn btn-transparent">*/}
                                {/*    <a href="#">Наш Календарь</a>*/}
                                {/*    <a href="#"><i className="icon-arrow-right"></i></a>*/}
                                {/*</div>*/}
                            </nav>
                        </section>
                    </div>

                    <section className="advantages">
                        <div className="advantages__items">
                            <div className="advantages__item">
                                <Image src={icon1} alt="icon1"/>
                                <h3>{t('main.box1.text1')}</h3>
                                <p>
                                    {t('main.box1.subtext1')}
                                </p>
                            </div>
                            <div className="advantages__item">
                                <Image src={icon2} alt="icon1"/>
                                <h3> {t('main.box1.text2')}</h3>
                                <p>
                                    {t('main.box1.subtext2')}
                                </p>
                            </div>
                            <div className="advantages__item">
                                <Image src={icon3} alt="icon1"/>
                                <h3>{t('main.box1.text3')}</h3>
                                <p>
                                    {t('main.box1.subtext3')}
                                </p>
                            </div>
                        </div>
                        <div className="advantages__btn">
                            {/*<a href="#" className="btn btn-yellow">Записаться</a>*/}
                        </div>
                    </section>
                </div>
            </article>

            <article className="experience">
                <div className="marquee-block">
                    <div className="marquee-container">
                        <div className="marquee">
                            ГРУПОВЫЕ ТРЕНИНГИ ГРУПОВЫЕ ТРЕНИНГИ ГРУПОВЫЕ ТРЕНИНГИ
                        </div>
                    </div>
                </div>

                <div className="container d-block-md">
                    <section className="experience__wrapper">
                        <h2 className="experience__title">О нас</h2>
                        <div className="experience__description">
                            <p className="experience__text">
                                Наша миссия заключается в том, чтобы помочь специалистам в фармацевтической и смежной ей отраслях принимать более эффективные решения в критических бизнес-процессах
                            </p>
                            <div className="line__wrapper">
                                <div className="line"></div>
                            </div>

                            <div className="achievements-wrapper">
                                <div className="achievements__items">
                                    <div className="achievements__items--value">105</div>
                                    <p className="achievements__description">
                                        партнеров по всему миру
                                    </p>
                                </div>
                                <div className="achievements__items">
                                    <div className="achievements__items--value">116</div>
                                    <p className="achievements__description">
                                        выпущенных препаратов
                                    </p>
                                </div>
                                <div className="achievements__items">
                                    <div className="achievements__items--value">300</div>
                                    <p>регистрационных процедур в год</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="experience__btn">
                    {/*<a href="#" className="btn btn-yellow">Записаться</a>*/}
                </div>

                {/*<div className="container d-block-md">*/}
                {/*  <section className="feedback__wrapper">*/}
                {/*    <div className="feedback__wrapper--header">*/}
                {/*      <h2 className="experience__title">*/}
                {/*        Что говорят о нас наши ученики*/}
                {/*      </h2>*/}
                {/*      <p className="experience__text">*/}
                {/*        Наши участники разделяют свой опыт и впечатления от*/}
                {/*        прохождения курсов фармацевтики и медицины. Отзывы участников*/}
                {/*        наших курсов:*/}
                {/*      </p>*/}
                {/*    </div>*/}
                {/*    <div className="feedback__wrapper--footer">*/}
                {/*      <div className="feedback__items">*/}
                {/*        <div className="feedback__card">*/}
                {/*          <div className="feedback__card--img">*/}
                {/*            <img src={icon4} alt="icon"/>*/}
                {/*          </div>*/}
                {/*          <div className="feedback__card--descr">*/}
                {/*            <p>*/}
                {/*              Невероятное погружение в мир фармацевтики! Курс позволил*/}
                {/*              мне разгадать тайны создания лекарств и научил*/}
                {/*              анализировать составы. Очень информативно!*/}
                {/*            </p>*/}
                {/*            <div className="feedback__card--line"></div>*/}
                {/*            <div className="feedback__card--name">*/}
                {/*              <p>- Анна С.</p>*/}
                {/*            </div>*/}
                {/*          </div>*/}
                {/*        </div>*/}

                {/*        <div className="feedback__card">*/}
                {/*          <div className="feedback__card--img">*/}
                {/*            <img src={icon4} alt="icon"/>*/}
                {/*          </div>*/}
                {/*          <div className="feedback__card--descr">*/}
                {/*            <p>*/}
                {/*              Теперь могу с уверенностью определять заболевания и*/}
                {/*              выбирать наилучшие методы лечения. Благодарю компанию за*/}
                {/*              этот опыт!*/}
                {/*            </p>*/}
                {/*            <div className="feedback__card--line"></div>*/}
                {/*            <div className="feedback__card--name">*/}
                {/*              <p>- Дмитрий П.</p>*/}
                {/*            </div>*/}
                {/*          </div>*/}
                {/*        </div>*/}

                {/*        <div className="feedback__card">*/}
                {/*          <div className="feedback__card--img">*/}
                {/*            <img src={icon4} alt="icon"/>*/}
                {/*          </div>*/}
                {/*          <div className="feedback__card--descr">*/}
                {/*            <p>*/}
                {/*              Курс открыл глаза на последние технологии и тенденции. Я*/}
                {/*              готов к применению передовых методов в своей практике.*/}
                {/*            </p>*/}
                {/*            <div className="feedback__card--line"></div>*/}
                {/*            <div className="feedback__card--name">*/}
                {/*              <p>- Екатерина М.</p>*/}
                {/*            </div>*/}
                {/*          </div>*/}
                {/*        </div>*/}

                {/*        <div className="feedback__card">*/}
                {/*          <div className="feedback__card--img">*/}
                {/*            <img src={icon4} alt="icon"/>*/}
                {/*          </div>*/}
                {/*          <div className="feedback__card--descr">*/}
                {/*            <p>*/}
                {/*              Очень впечатлён содержанием курса. Узнал о процессах*/}
                {/*              разработки лекарств, которые раньше казались мне*/}
                {/*              непонятными.*/}
                {/*            </p>*/}
                {/*            <div className="feedback__card--line"></div>*/}
                {/*            <div className="feedback__card--name">*/}
                {/*              <p>- Алексей К.</p>*/}
                {/*            </div>*/}
                {/*          </div>*/}
                {/*        </div>*/}
                {/*      </div>*/}
                {/*    </div>*/}
                {/*  </section>*/}
                {/*</div>*/}
            </article>

            <article className="training">
                <div className="training__bg">
                    <div className="training__bg--top">
                        <div className="container d-block-md">
                            <div className="partners">
                                <h2 className="visually-hidden">Наши партнеры</h2>
                                <div className="partners__wrapper">
                                    <Image
                                        className="inline-svg"
                                        src={logo1}
                                        alt="acrew logo"
                                    />
                                    <Image
                                        className="inline-svg"
                                        src={logo2}
                                        alt="miro logo"
                                    />
                                    <Image
                                        className="inline-svg"
                                        src={logo3}
                                        alt="loom logo"
                                    />
                                    <Image
                                        className="inline-svg"
                                        src={logo4}
                                        alt="icon logo"
                                    />
                                    <Image
                                        className="inline-svg"
                                        src={logo5}
                                        alt="airbnb logo"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="training__bg--bottom">
                        <div className="container d-block-md">
                            <div className="training__items">
                                <div className="training__items--wrapper">
                                    <h2 className="training__title">
                                        Обучение от Ведущих Экспертов
                                    </h2>

                                    <div className="training__subtitle">
                                        <p>
                                            Наша главная цель это обеспечение потребностей рынка лучшими специалистами в своей области. Мы делаем это, обучая специалистов инновационным концепциям, которые они могут получить только у практикующих экспертов.
                                        </p>
                                    </div>
                                    {/*<a href="#" className="btn btn-yellow">Записаться</a>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    </main>
  )
}
