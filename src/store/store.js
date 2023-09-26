import {configureStore } from '@reduxjs/toolkit';
import userSlice from "../features/userSlice/userSlice";
import coursesSlice from "../features/coursesSlice/coursesSlice";


export const store = configureStore({
    reducer: {
        user: userSlice,
        courses: coursesSlice,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
