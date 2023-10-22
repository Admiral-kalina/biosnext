import {configureStore } from '@reduxjs/toolkit';

import userSlice from "@/features/userSlice/userSlice";
import coursesSlice from "@/features/coursesSlice/coursesSlice";
import basketSlice from "@/features/basket/basketSlice";


export const store = configureStore({
    reducer: {
        user: userSlice,
        courses: coursesSlice,
        basket: basketSlice,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),

})
