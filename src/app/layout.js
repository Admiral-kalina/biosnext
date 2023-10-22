"use client"
import "./css/style.scss"

// redux
import {Provider, useDispatch} from "react-redux";
import {store} from "@/store/store";
import {useEffect} from "react";
import {fetchUserCourses} from "@/features/userSlice/userSlice";
import {fetchCourses} from "@/features/coursesSlice/coursesSlice";

import "../i18n"
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import {Protector} from "@/helpers/userData";

export default function RootLayout({children}) {

    return (
        <html lang="en">
        <body suppressHydrationWarning={true}>
        <Provider store={store}>
                <ToastContainer position="top-right" autoClose={2000}/>
                    <MiddleLayout>
                        {children}
                    </MiddleLayout>
        </Provider>
        </body>
        {/*<script type="text/javascript" src="public/main.js"></script>*/}
        </html>
    )
}


const MiddleLayout = ({children}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('BEREZA TRIGGER')
        dispatch(fetchUserCourses())
        dispatch(fetchCourses())
    }, [dispatch])

    return (
        <>
            {children}
        </>
    )
}