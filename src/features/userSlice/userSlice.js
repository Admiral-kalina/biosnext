import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";
import {findObjectsByLanguage} from "../../helpers/findObjectByLanguage";
import {strapiApi} from "../../api";

const languageFromStorage = typeof window !== 'undefined' ? localStorage.getItem('language') || 'ru' : 'ru';
const coursesFromStorage = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('coursesList')) || [] : [];


export const fetchUserCourses = createAsyncThunk(
    'courses/fetchCoursesByLanguage',

    async () => {
        const userResponse = await strapiApi.get(`/api/users/2?populate=*`)

        const userProgramsIds = userResponse.data.courses.map(course => course.id)
        let userPrograms;
        await axios.all(userProgramsIds.map((id) => strapiApi.get(`/api/courses/${id}?populate=*`))).then(
            (data) => userPrograms = data,
        );

        const userWebinarsIds = userResponse.data.webbinarrs.map(webinar => webinar.id)
        let userWebinars;
        await axios.all(userWebinarsIds.map((id) => strapiApi.get(`/api/webbinarrs/${id}?populate=*`))).then(
            (data) => userWebinars = data,
        );


        return {userPrograms, userWebinars}
    }
)

const initialState = {

    user: {
        language: languageFromStorage,
        courses: {
            programs: [],
            webinars: [],
        },
        basket: {
            programs: [],
            webinars: [],
        },
    },
    isLoading: false,
    error: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeUserLanguage(state, action) {
            state.user.language = action.payload
            localStorage.setItem('language', action.payload)
        },
        addUserCurse(state, action) {
            state.user.coursesList = [...state.user.coursesList, action.payload]
            localStorage.setItem('coursesList', JSON.stringify([...state.user.coursesList]))
        },
        removeUserCurse(state) {
            state.user.coursesList = []
            localStorage.setItem('coursesList', JSON.stringify([]))
        },
        addBasketProgram(state){

        },

    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserCourses.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchUserCourses.fulfilled, (state, action) => {
            state.isLoading = false

            const programs = action.payload.userPrograms;
            const webinars = action.payload.userWebinars;

            state.user.courses.programs = programs;
            state.user.courses.webinars = webinars;

        })
        builder.addCase(fetchUserCourses.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    },
})

export const {changeUserLanguage, addUserCurse, removeUserCurse} = userSlice.actions
export default userSlice.reducer