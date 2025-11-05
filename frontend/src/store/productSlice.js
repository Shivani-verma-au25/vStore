import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name:'product',
    initialState : {
        productLoading : false,
        products : null
    },
    reducers : {
        setProductLoading : (state ,action) => {
            state.productLoading = action.payload;
        },
        // for adding product
        setProduct : (state , action) => {
            state.products = action.payload;
            console.log("state products",state.products);
            
            
        },
        removeProduct: (state, action) => {
        state.products = state.products.filter(p => p._id !== action.payload);
        },   
        
    }
})

export const {setProductLoading ,setProduct} = productSlice.actions;
export default productSlice.reducer;