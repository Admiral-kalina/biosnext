import {createSlice} from "@reduxjs/toolkit";
import {BASKET_TYPES, getBasketData, storeBasketData} from "@/helpers/basketData";

const basketData = getBasketData()

console.log('BASKET',basketData)



const initialState = {
    basket: {
        programs: basketData.programs || [],
        webinars: basketData.webinars || [],
    }
}


export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addBasketElement(state, action) {
            const { type, data } = action.payload;
            if (type === BASKET_TYPES.WEBINAR) {
                state.basket.webinars.push(data);
                storeBasketData(state.basket.webinars, BASKET_TYPES.WEBINAR)
            } else if (type === BASKET_TYPES.PROGRAM) {
                state.basket.programs.push(data);
                storeBasketData(state.basket.programs, BASKET_TYPES.PROGRAM)
            }
        },
        removeBasketElement(state, action) {
            const { type, id } = action.payload;
            if (type === BASKET_TYPES.WEBINAR) {
                state.basket.webinars = state.basket.webinars.filter(webinar => webinar.id !== id);
            } else if (type === BASKET_TYPES.PROGRAM) {
                state.basket.programs = state.basket.programs.filter(program => program.id !== id);
            }
        }
    },
});

export const { addBasketElement, removeBasketElement } = basketSlice.actions;

export default basketSlice.reducer;