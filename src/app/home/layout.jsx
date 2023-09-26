import Home from "@/components/Home/Home";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Container from "@/components/Container/Container";
import * as React from "react";
import "../index.scss"

export default function HomeLayout({children}) {
    return (
        <section>
            <Header/>
            <div style={{background: "#151515"}}>
                <Container>
                    <Home/>

                </Container>
                <div className="experienceHome">
                    <section className="experience__wrapper experience__wrapper_home">
                        <h2 className="experience__title">Доверьтесь опыту и качеству</h2>
                        <div className="experience__description">
                            <p className="experience__text">
                                Мы — фармацевтическая компания, которой доверяют миллионы. Доверьтесь нам и позвольте
                                нам заботиться о вашем благополучии. Вместе мы создаем будущее здоровья и комфорта.
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
            </div>
            <Footer location='home'/>
        </section>
    )
}

