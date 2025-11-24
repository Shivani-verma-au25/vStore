import { createSlice } from "@reduxjs/toolkit";


const categorySlice = createSlice({
    name: 'category',
    initialState: {
        categoyLoading : false,
        categories : null,
        allCategories : []
    },
    reducers : {
         setCategoryLoading :(state , action) =>{
            state.categoyLoading = action.payload;
        },

        // actions to categories 
        setCategory : (state ,action) => {
            state.categories = action.payload;
            // console.log("categories",action.payload);
            
        },
        setAllCategories : (state , action) => {
            state.allCategories = action.payload;
            // console.log('All categories' , action.payload);
            
        }
    }
})


export const {setCategoryLoading ,setCategory, setAllCategories } = categorySlice.actions;
export default categorySlice.reducer;
