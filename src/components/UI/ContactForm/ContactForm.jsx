import React from 'react';
import {Field, Formik} from "formik";
import PhoneInput from "react-phone-number-input";

import sendEmail from "@/helpers/sendEmail";

import MyButton from "../MyButton/MyButton";

import "./contactForm.scss"


const Phone = ({field, form, ...props}) => {
    return (
        <PhoneInput
            placeholder={'Телефон'}
            value=""
            name="phone"
            id="phone"

            onChange={value => {
                if (!form.touched[field.name]) form.setFieldTouched(field.name);
                form.setFieldValue(field.name, value);
            }}
        />
    );
};


const ContactForm = ({type, isWhite, location, price, sendData}) => {
    const errorObj = {}

    const handleSend = (e, values) => {
        e.preventDefault()

        const sentBody = `
            <div>
                <p>Name: ${values.name}</p>
                <p>Phone: ${values.phone}</p>
                <p>Email: ${values.email}</p>
                ${sendData ? `<div>${sendData}</div>` : `<p>Theme: ${values.theme}</p>`}
            </div>
        `;

        sendEmail(sentBody);
    }

    return (
        <div className="contactForm">
            <Formik
                initialValues={{name: "", phone: "", them: "", email: ""}}
                // validate={values => {
                //     const errors = {};
                //     if (!values.email) {
                //         errors.email = 'Required';
                //     } else if (
                //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                //     ) {
                //         errors.email = 'Invalid email address';
                //         errorObj.email = 'Invalid email address';
                //     }
                //
                //     if (!values.phone) {
                //         errors.phone = 'Required';
                //         errorObj.phone = 'Required';
                //     }
                //
                //     if (!values.name) {
                //         errors.name = 'Required';
                //         errorObj.name = 'Required';
                //     }
                //
                //     return errors;
                // }}
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
                        className={`
                        form 
                        ${type === 'individual' ? 'form_individual' : ''}
                        ${location === 'basket' ? 'form_basket' : ''}
                        ${isWhite ? 'form_white' : ''}
                        `}
                        onSubmit={(event) => handleSend(event, values)}
                    >
                        <div className="formContainer">
                            <div>
                                <input
                                    className="text24"
                                    type="name"
                                    name="name"
                                    id="name"
                                    placeholder={'Имя'}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                                <p className="error">{errors.name && touched.name && errors.name}</p>

                            </div>
                            <div>
                                <Field name="phone" component={Phone}/>
                                <p className="error">{errors.phone && touched.phone && errors.phone}</p>
                            </div>

                            <div>
                                <input
                                    className="text24"
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="E-mail"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                <p className="error">{errors.email && touched.email && errors.email}</p>
                            </div>
                            <div className='basket-remove'>
                                <input
                                    className="text24"
                                    type="text"
                                    name="them"
                                    id="them"
                                    placeholder="Тема вебинара или программа"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.them}
                                />
                                <p className="error">{errors.them && touched.them && errors.them}</p>
                            </div>
                        </div>
                        {location === 'basket'
                            &&
                            <p className='price'>Сумма: {price} $</p>
                        }
                        {location === 'basket' ?
                            <div className='basket-btns'>
                                <MyButton
                                    goldenTransparent
                                >
                                    <p>Отменить</p>
                                </MyButton>
                                <MyButton
                                    type="submit"
                                    fullGolden
                                >
                                    Отправить
                                </MyButton>
                            </div>
                            :
                            <MyButton
                                type="submit"
                                black={type === 'individual'}
                                golden={type !== 'individual'}
                            >
                                Отправить
                            </MyButton>
                        }
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default ContactForm;