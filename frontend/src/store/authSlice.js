import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name : 'auth',
    initialState : {
        loading : false,
        users : null
    } ,

    reducers : {
        setLoading : (state , action)=>{
            state.loading = action.payload;
        },
        
        setUser :(state , action) => {
        state.users = action.payload;
        console.log("users",action.payload);
        },

        logout : (state ,action) => {
            state.users = null
        }
    } 

    

})


export const {setLoading , setUser , logout} = authSlice.actions;
export default authSlice.reducer;