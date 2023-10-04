import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

import axios from "axios";
import {userData} from "../../helpers/userData";
import {findObjectsByLanguage} from "../../helpers/findObjectByLanguage";
import {strapiApi} from "../../api";




const initialState = {
    courses: {
        programs: [],
        webinars: [],
    },
    isLoading: true,
    error: null,
}

export const fetchCourses = createAsyncThunk(
    'courses/fetchCourses',
    async (language = 'ru') => {
        const programsList = await strapiApi.get(`/api/courses?populate=*&locale*`)



        const webinarList = await strapiApi.get(`/api/webbinarrs?populate=*&locale*`)

        // const globalPrograms = findObjectsByLanguage(programsList, language, false);
        // const globalWebinars = findObjectsByLanguage(webinarList, language, false);

        return {programsList, webinarList};
    }
)


export const coursesSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCourses.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchCourses.fulfilled, (state, action) => {
            state.isLoading = false

            const programs = action.payload.programsList.data.data;
            const webinars = action.payload.webinarList.data.data;

            state.courses.programs = programs
            state.courses.webinars = webinars


        })
        builder.addCase(fetchCourses.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    },
})

export default coursesSlice.reducer


