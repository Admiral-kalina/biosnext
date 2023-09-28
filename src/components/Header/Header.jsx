"use client"
import React, {useEffect, useRef, useState} from 'react';

// libraries
import {Select} from 'antd';
import i18n from "i18next";
import Image from "next/image"
import {useDispatch, useSelector} from "react-redux";
import {changeUserLanguage} from "@/features/userSlice/userSlice";


// assets
import logo from "../../app/media/images/logo.png";
import icon5 from "../../app/media/images/icon/icon5.svg";
import icon6 from "../../app/media/images/icon/icon6.svg";
import icon7 from "../../app/media/images/icon/icon7.svg";
import icon8 from "../../app/media/images/icon/icon8.svg";
import icon12 from "../../app/media/images/icon/icon12.svg";
import icon13 from "../../app/media/images/icon/icon13.svg";
import icon14 from "../../app/media/images/icon/icon14.svg";
import user from "../../app/media/images/userGolden.svg";
import basket from "../../app/media/images/basket.svg";

// styles
import "./header.scss";
import Link from "next/link";


const Header = ({type}) => {
    const {language} = useSelector(store => store.user.user)
    const [burgerState, setBurgerState] = useState(false)
    const [endpoint, setEndpoint] = useState('')
    const [isScrolled, setIsScrolled] = useState(false)
    const [selectedLanguage, setSelectedLanguage] = useState({value: language, label: language});

    useEffect(() => {

        if (burgerState) {
            console.log('TY', burgerState)

        }

    }, [burgerState]);

    const dispatch = useDispatch()

    const ref = useRef();

    useEffect(() => {

        const queryString = window.location.pathname;
        // const paymentID = queryString.replace(/[^0-9]/g, "");;
        const endpoint = queryString.replace(/[^a-zA-Z0-9 ]/g, "");
        setEndpoint(endpoint)


        window.addEventListener('scroll', () => {
            if (window.scrollY > 5) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        });
        return () => {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 5) {
                    setIsScrolled(true)
                } else {
                    setIsScrolled(false)
                }
            });
        }
    }, [])

    const handleLanguageChange = ({label, value}) => {
        setSelectedLanguage({label, value})
        dispatch(changeUserLanguage(label))
        i18n.changeLanguage(label)
    }

    const handleBurgerClick = () => {
        let body = document.getElementsByTagName("body")[0];

        if (burgerState) {
            body.style.height = "auto";
            body.style.overflow = "unset";
            body.style.width = "auto";
            body.style.position = "unset";
            setBurgerState(state => !state)
        } else {
            body.style.height = "100%";
            body.style.overflow = "hidden";
            body.style.width = "100%";
            body.style.position = "fixed";
            setBurgerState(state => !state)
        }
    }

    const handleMobileClick = () => {
        let body = document.getElementsByTagName("body")[0];
        body.style.height = "auto";
        body.style.overflow = "unset";
        body.style.width = "auto";
        body.style.position = "unset";
        ;
        setBurgerState(false)
    }

    return (
        <header ref={ref}
                className={`
            header 
             ${burgerState ? 'header__onMobile' : ''}
            ${isScrolled ? 'scrolled' : 'unscrolled'}
            ${type === 'full' ? 'about-page' : ''}
            `}>
            <div className="container d-block-md">
                <div className="header__logo">
                    <Link href='/'>
                        <Image
                            className="inline-svg"
                            src={logo}
                            alt="Logo Bioscience Innova"
                        />
                    </Link>
                </div>

                <nav  className={`header__nav ${type === 'cabinet' ? 'hidden':''}`}>
                    <ul>
                        <li><Link className={`text-uppercase ${endpoint === 'aboutCompany' ? 'active' : ''}`}
                                  href={'/aboutCompany'}>о компании</Link></li>
                        <li><Link className={`text-uppercase ${endpoint === 'services' ? 'active' : ''}`}
                                  href={'/services'}>услуги</Link></li>
                        <li><Link className={`text-uppercase ${endpoint === 'activities' ? 'active' : ''}`}
                                  href={'/activities'}>мероприятия</Link></li>
                        <li><Link className={`text-uppercase ${endpoint === 'contacts' ? 'active' : ''}`}
                                  href={'/contacts'}>контакты</Link></li>
                    </ul>
                </nav>

                <div className="header__aside">
                    <nav className="header__aside--person">
                        <ul>
                            <li>
                                <Link
                                    className=""
                                    href={'/home'}
                                >
                                    <Image src={user} alt={'home'}/>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className=""
                                    href={'/basket'}
                                >
                                    <Image src={basket} alt={'basket'}/>
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="tabheader-mobile has-form">

                        <Select
                            labelInValue
                            defaultValue={selectedLanguage}
                            style={{
                                width: 120,
                            }}
                            onChange={handleLanguageChange}
                            options={[
                                {
                                    value: 'ru',
                                    label: 'ru',
                                },
                                {
                                    value: 'ua',
                                    label: 'ua',
                                },
                                {
                                    value: 'en',
                                    label: 'en',
                                },
                            ]}
                        />
                    </div>
                </div>


                <div className={`header__mobile ${burgerState ? 'active' : ''}`}>
                    <ul className="nav-menu__mobile">
                        <li className={type === 'cabinet' ? 'hidden':''} onClick={handleMobileClick}>
                            <Link
                                className={`text-uppercase ${endpoint === '' ? 'active' : ''}`}
                                href={'/'}
                            >
                                главная
                            </Link>
                        </li>
                        <li className={type === 'cabinet' ? 'hidden':''} onClick={handleMobileClick}>
                            <Link
                                className={`text-uppercase ${endpoint === 'aboutCompany' ? 'active' : ''}`}
                                href={'/aboutCompany'}
                            >
                                о компании
                            </Link>
                        </li>
                        <li className={type === 'cabinet' ? 'hidden':''} onClick={handleMobileClick}>
                            <Link
                                className={`text-uppercase ${endpoint === 'services' ? 'active' : ''}`}
                                href={'/services'}
                            >
                                услуги
                            </Link>
                        </li>
                        <li className={type === 'cabinet' ? 'hidden':''} onClick={handleMobileClick}>
                            <Link
                                className={`text-uppercase ${endpoint === 'activities' ? 'active' : ''}`}
                                href={'/activities'}
                            >
                                мероприятия
                            </Link>
                        </li>
                        <li className={type === 'cabinet' ? 'hidden':''} onClick={handleMobileClick}>
                            <Link
                                className={`text-uppercase ${endpoint === 'contacts' ? 'active' : ''}`}
                                href={'/contacts'}
                            >
                                контакты
                            </Link>
                        </li>
                        <li className={`${type === 'cabinet' ? 'hidden':''} liWithImg basket`}  onClick={handleMobileClick}>

                            <Link
                                className={`text-uppercase ${endpoint === 'basket' ? 'active' : ''}`}
                                href={'/basket'}
                            >
                                Корзина
                            </Link>
                        </li>
                        <li className={`${type === 'cabinet' ? 'hidden':''} liWithImg account`}  onClick={handleMobileClick}>
                            <Link
                                className={`text-uppercase ${endpoint === 'home' ? 'active' : ''}`}
                                href={'/home'}
                            >
                                Аккаунт
                            </Link>
                        </li>


                       <>
                           <li className={`nav-menu__mobile--block ${type === 'cabinet'?'nav-menu__mobile--block-cabinet':''}`}>
                               <ul className="nav-menu__mobile--lang">
                                   <li>
                                       <a href="#">RU</a>
                                   </li>
                                   <li>
                                       <a href="#">ENG</a>
                                   </li>
                                   <li>
                                       <a href="#"
                                          className="active">
                                           УКР
                                       </a>
                                   </li>
                               </ul>
                               <ul>
                                   <li>
                                       выйти
                                   </li>
                               </ul>
                               <ul className="nav-menu__mobile--info">
                                   <li>
                                       <a href="tel:+38 (095) 382-92-64">+380 95 382 9264</a>
                                   </li>
                                   <li className="nav-menu__mobile--info--social">
                                       <Link href={'/'}><Image src={icon12} alt="phone"/></Link>
                                       <Link href={'/'}><Image src={icon13} alt="viber"/></Link>
                                       <Link href={'/'}><Image src={icon14} alt="telegram"/></Link>
                                   </li>
                                   <li className="nav-menu__mobile--info--place">
                                       <p>01033, місто Київ, ВУЛИЦЯ ТАРАСІВСЬКА, будинок 4-А, офіс 7</p>
                                   </li>
                                   <li className="nav-menu__mobile--info--social-bottom">
                                       <Link href={'/'}><Image src={icon5} alt="mail"/></Link>
                                       <Link href={'/'}><Image src={icon6} alt="youtube"/></Link>
                                       <Link href={'/'}><Image src={icon7} alt="linkedin"/></Link>
                                       <Link href={'/'}><Image src={icon8} alt="facebook"/></Link>
                                   </li>
                               </ul>
                           </li>
                       </>
                    </ul>
                </div>


                <div onClick={handleBurgerClick} className={`burger-menu ${burgerState ? 'open' : ''}`}>
                    <span className="bar first"></span>
                    <span className="bar second"></span>
                    <span className="bar third"></span>
                </div>
            </div>
        </header>
    );
};

export default Header;