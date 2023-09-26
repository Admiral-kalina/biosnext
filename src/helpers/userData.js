import React, {useEffect} from "react";


export const storeUser = (data) => {
    localStorage.setItem(
        "user",
        JSON.stringify({
            username: data.user.username,
            userId:data.user.id,
            jwt: data.jwt,
        })
    );
};

export const userData = () => {
    const stringifiedUser = localStorage.getItem("user") || '""';
    return JSON.parse(stringifiedUser || {});
};

export const Protector = ({children}) => {
    const {jwt} = userData();

    // useEffect(() => {
    //     if (!jwt) {
    //         navigate("/login");
    //     }
    // }, [navigate, jwt]);

    return <>{children}</>;
};