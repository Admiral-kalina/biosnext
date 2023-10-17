import {createSlice} from "@reduxjs/toolkit";
import {BASKET_TYPES, checkIsBuying, getBasketData, removeBaskedData, storeBasketData} from "@/helpers/basketData";
import {toast} from "react-toastify";

const {programs, webinars, count, totalPrice} = getBasketData()

const initialState = {
    basket: {
        programs: programs,
        webinars: webinars,
        count: count,
        totalPrice: totalPrice
    }
}


export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addBasketElement(state, action) {
            const {type, data,t} = action.payload;
            console.log('QQ',t)
            const isCourseExist = checkIsBuying(data, type)
            if (isCourseExist) {
                toast.error(t('toast.basket.failed'))
                return
            }
            if (type === BASKET_TYPES.WEBINAR) {
                state.basket.webinars.push(data);
                storeBasketData(state.basket.webinars, BASKET_TYPES.WEBINAR)
                toast.success(t('toast.basket.success'))
            } else if (type === BASKET_TYPES.PROGRAM) {
                state.basket.programs.push(data);
                storeBasketData(state.basket.programs, BASKET_TYPES.PROGRAM)
                toast.success(t('toast.basket.success'))
            }
            state.basket.count = state.basket.programs.length + state.basket.webinars.length;
        },
        removeBasketElements(state) {
            state.basket.webinars = [];
            state.basket.programs = [];
            state.basket.count = 0;

            removeBaskedData();

        }
    },
});

export const {addBasketElement, removeBasketElements} = basketSlice.actions;

export default basketSlice.reducer;
