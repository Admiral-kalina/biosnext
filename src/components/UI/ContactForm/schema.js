import React from 'react';
import * as Yup from 'yup';

const phoneRegExp =/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/

export const ContactUsForm = Yup.object().shape({
    name: Yup.string()
        .min(1, 'Too Short!')
        .max(30, 'Too Long!')
        .required('Name is required'),
    phone:Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Phone is required"),
    email: Yup.string().email('Invalid email').required('Email is required'),
    them:  Yup.string().min(2, 'Too Short!')
        .max(200, 'Too Long!')
        .required('Topic is required'),
});