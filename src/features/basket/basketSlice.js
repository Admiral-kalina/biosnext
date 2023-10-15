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
            const {type, data} = action.payload;
            const isCourseExist = checkIsBuying(data, type)
            if (isCourseExist) {
                toast.error('You have already added this item to your cart.')
                return
            }
            if (type === BASKET_TYPES.WEBINAR) {
                state.basket.webinars.push(data);
                storeBasketData(state.basket.webinars, BASKET_TYPES.WEBINAR)
                toast.success('You have successfully added this item to your cart.')
            } else if (type === BASKET_TYPES.PROGRAM) {
                state.basket.programs.push(data);
                storeBasketData(state.basket.programs, BASKET_TYPES.PROGRAM)
                toast.success('You have successfully added this item to your cart.')
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