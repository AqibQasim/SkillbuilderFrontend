
import { createSlice } from '@reduxjs/toolkit';
import { saveToLocalStorage } from '@/utils/persistLocalData';

const isBrowser = typeof window !== 'undefined';

const initialState = {
    items: isBrowser ? JSON.parse(localStorage.getItem('cartItems')) || [] : [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            console.log("action:", action)
            state.items.push(action.payload);
            if (isBrowser) saveToLocalStorage(state.items);
            console.log("items:", state.items);
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            saveToLocalStorage(state.items);
        },
        setCart: (state, action) => {
            state.items = action.payload;
            if (isBrowser) saveToLocalStorage(state.items);
        }
    },
});

export const { addItem, removeItem, setCart } = cartSlice.actions;
export default cartSlice.reducer;