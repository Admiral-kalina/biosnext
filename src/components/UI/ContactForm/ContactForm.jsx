import React from 'react';
import {Field, Formik} from "formik";
import PhoneInput from "react-phone-number-input";

import sendEmail from "@/helpers/sendEmail";

import MyButton from "../MyButton/MyButton";

import "./contactForm.scss"
import {useDispatch} from "react-redux";
import {removeBasketElements} from "@/features/basket/basketSlice";
import {useTranslation} from "react-i18next";


const Phone = ({field, form}) => {
    const {t} = useTranslation()
    return (
        <PhoneInput
            placeholder={t('form.phone')}
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
    const {t} = useTranslation()
    const dispatch = useDispatch();

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

    const handleRemove = () => {
    dispatch(removeBasketElements())
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
                                    placeholder={t('form.name')}
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
                                    placeholder={t('form.email')}
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
                                    placeholder={t('form.them')}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.them}
                                />
                                <p className="error">{errors.them && touched.them && errors.them}</p>
                            </div>
                        </div>
                        {location === 'basket'
                            &&
                            <p className='price'>{t('form.amount')}: {price} $</p>
                        }
                        {location === 'basket' ?
                            <div className='basket-btns'>
                                <MyButton
                                    onClick={handleRemove}
                                    goldenTransparent
                                >
                                    <p>{t('form.cancel')}</p>
                                </MyButton>
                                <MyButton
                                    type="submit"
                                    fullGolden
                                >
                                    {t('form.send')}
                                </MyButton>
                            </div>
                            :
                            <MyButton
                                type="submit"
                                black={type === 'individual'}
                                golden={type !== 'individual'}
                            >
                                {t('form.send')}
                            </MyButton>
                        }
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default ContactForm;