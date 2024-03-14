import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add: (state, action) => {
           const productToAdd = action.payload;
           const exsitingProduct = state.find(item => item.id === productToAdd.id)

           if(exsitingProduct){
            exsitingProduct.quantity +=1;
           }
           else{
            state.push({...productToAdd, quantity:1});
           }
        },
        remove: (state, action) => {
            const todo = state.find((todo) => todo.id === action.payload)
            todo.completed = !todo.completed
        },
    },
})

export const { todoAdded, todoToggled } = cartSlice.actions
export default cartSlice.reducer