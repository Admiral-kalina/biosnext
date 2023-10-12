"use client"
import React, {useState} from "react";

import axios from "axios";
import {toast} from "react-toastify";


import {Field, Formik} from "formik";

//helpers


//styles
import * as styles from "./login.module.scss"
import Container from "../Container/Container";
import {useRouter} from "next/navigation";
import {storeUser} from "@/helpers/userData";


const initialUser = {password: "", identifier: ""};

const Login = () => {
    const [user, setUser] = useState(initialUser);
    const router = useRouter();

    const handleChange = ({target}) => {
        const {name, value} = target;
        setUser((currentUser) => ({
            ...currentUser,
            [name]: value,
        }));
    };


    const handleLogin = async (event, values) => {
        event.preventDefault()
        const url = `http://localhost:1337/api/auth/local`;

        try {
            console.log('login',values)
            if (values.identifier && values.password) {
                console.log('login1')
                const {data} = await axios.post(url, values);
                console.log('login2',data)
                if (data.jwt) {
                    storeUser(data);
                    toast.success("Logged is successfully!", {
                        hideProgressBar: true,
                    });
                    setUser(initialUser);
                   router.push('/home')
                }
            }
        } catch (error) {
            console.log('Err', error)
            toast.error('login or password don\'t correct', {
                hideProgressBar: true,
            });
        }
    };

    return (
        <Container>
            <div className={styles.root}>
                <h2 className={styles.title}>Вход в аккаунт</h2>
                <Formik
                    initialValues={{identifier: "", password: ""}}
                    validate={values => {
                        const errors = {};

                        return errors;
                    }}
                >
                    {({

                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting,
                          /* and other goodies */
                      }) => (
                        <form
                            className={styles.form}
                            onSubmit={(event) => handleLogin(event,values)}
                        >
                            <div className={styles.formContainer}>

                                <div className={styles.formBlock}>
                                    <label className="text40" htmlFor="identifier">Логин*</label>
                                    <input
                                        className="text24"
                                        type="text"
                                        name="identifier"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.identifier}
                                    />
                                    {errors.identifier && touched.identifier && errors.identifier}

                                </div>
                                <div className={styles.formBlock}>
                                    <label className="text40" htmlFor="password">Пароль*</label>
                                    <input
                                        className="text24"
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />
                                    <p className={styles.error}>{errors.passwod && touched.passwod && errors.passwod}</p>
                                </div>
                            </div>
                            <div className={styles.btnBlock}>
                                <button type="submit" disabled={isSubmitting}>
                                    Войти
                                </button>
                            </div>


                        </form>
                    )}
                </Formik>
            </div>
        </Container>
    );
};

export default Login;