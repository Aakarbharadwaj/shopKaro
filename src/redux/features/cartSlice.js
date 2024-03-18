import { createSlice } from '@reduxjs/toolkit'

// const initialState = JSON.parse(localStorage.getItem("cart"))||[]
const initialState = [];
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action) => {
            const productToAdd = action.payload;

            const exsitingProduct = state.find(item => item.id === productToAdd.id);

            if (exsitingProduct) {

                if (exsitingProduct.quantity < 5) {
                    exsitingProduct.quantity += 1;
                }
            }
            else {
                state.push({ ...productToAdd, quantity: 1 });
            }
        },
        remove: (state, action) => {
            const productToRemove = action.payload;
            const exsitingProduct = state.find(item => item.id === productToRemove.id);

            if (exsitingProduct) {
                if (exsitingProduct.quantity > 0) {
                    exsitingProduct.quantity -= 1;
                }
            }

            // else{
            //     state.push({...productToAdd})
            // }

        },
    },
})


export const { add, remove } = cartSlice.actions
export default cartSlice