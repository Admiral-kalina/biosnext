import React from 'react';
import * as styles from "../../Contacts/contacts.module.scss";
import {Field, Formik} from "formik";
import MyButton from "../MyButton/MyButton";
import PhoneInput from "react-phone-number-input";
import emailjs from '@emailjs/browser'
import {toast} from "react-toastify";

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

const ContactForm = ({type}) => {
    const errorObj = {}

    const handleSend = (e, values) => {
        e.preventDefault()
        console.log('tRRIIIGEGR', e.target)
        // emailjs.sendForm('service_unn8rcc', 'template_3s6yn4c', e.target,'aX38vukXce76LEtYE')
        toast.success("successfully!", {
            hideProgressBar: true,
        });
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
                        className={`form ${type === 'individual' ? 'form_individual' : ''}`}
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
                            <div>
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
                        <MyButton
                            type="submit"
                            black={type === 'individual'}
                            golden={type !== 'individual'}
                        >
                            Отправить
                        </MyButton>

                    </form>
                )}
            </Formik>
        </div>
    );
};

export default ContactForm;