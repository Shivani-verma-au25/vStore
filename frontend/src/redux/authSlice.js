import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name : 'auth',
    initialState : {
        loading : false,
        usersData : null
    } ,

    reducers : {
        setLoading : (state , action)=>{
            state.loading = action.payload;
        },
        
        setUsersData :(state , action) => {
        state.usersData = action.payload;
        // console.log("users",action.payload);
        },

        logout : (state ,action) => {
            state.usersData = null
        }
    } 

    

})


export const {setLoading , setUsersData , logout} = authSlice.actions;
export default authSlice.reducer;