'use client'
import Home from "@/components/Home/Home";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Container from "@/components/Container/Container";
import * as React from "react";
import "../index.scss"
import {Route, Routes} from "react-router-dom";
import * as styles from "@/components/Home/home.module.scss";
import AboutUsHome from "@/components/aboutUsHome/aboutUsHome";
import {useEffect} from "react";
import {Protector} from "@/helpers/userData";
import {useTranslation} from "react-i18next";

export default function HomeLayout({children}) {
    const {t} = useTranslation();

    useEffect(() => {
        document.body.style = 'background: rgb(21, 21, 21);';
    })
    return (
        <section>
            <Header type={'cabinet'}/>
            <Protector>
            <div style={{background: "#151515"}}>
                <Container sizeZero={true}>
                    <Home/>
                </Container>
                <Routes>
                    <Route path='/home/about-us' element={
                        <div className="experienceHome">
                            <section className="experience__wrapper experience__wrapper_home">
                                <h2 className="experience__title">{t('cabinet.trust')}</h2>
                                <div className="experience__description">
                                    <p className="experience__text">
                                        {t('cabinet.about')}
                                    </p>
                                    <div className="line__wrapper">
                                        <div className="line"></div>
                                    </div>

                                    <div className="achievements-wrapper">
                                        <div className="achievements__items">
                                            <div className="achievements__items--value">105</div>
                                            <p className="achievements__description">
                                                {t('cabinet.partners')}
                                            </p>
                                        </div>
                                        <div className="achievements__items">
                                            <div className="achievements__items--value">116</div>
                                            <p className="achievements__description">
                                                {t('cabinet.products')}
                                            </p>
                                        </div>
                                        <div className="achievements__items">
                                            <div className="achievements__items--value">12</div>
                                            {t('cabinet.yearsOnMarket')}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    }/>
                </Routes>
            </div>
            </Protector>
            <Footer location='home'/>
        </section>
    )
}

