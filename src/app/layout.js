"use client"
import "./css/style.scss"
import {BrowserRouter} from "react-router-dom";

// redux
import {Provider, useDispatch} from "react-redux";
import {store} from "@/store/store";
import {useEffect} from "react";
import {fetchUserCourses} from "@/features/userSlice/userSlice";
import {fetchCourses} from "@/features/coursesSlice/coursesSlice";
import Header from "@/components/Header/Header";

import "../i18n"

export default function RootLayout({children}) {

    // if (typeof window !== "object") {
    //     return null
    // }

    return (
        <html lang="en">
        <body suppressHydrationWarning={true}>
        <Provider store={store}>
        <BrowserRouter>
            <MiddleLayout>
                {children}
            </MiddleLayout>
        </BrowserRouter>
        </Provider>
        </body>
        {/*<script type="text/javascript" src="public/main.js"></script>*/}
        </html>
    )
}


const MiddleLayout = ({children}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUserCourses())
        dispatch(fetchCourses())
    }, [])

    return(
        <>
            {children}
        </>
    )
}