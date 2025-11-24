import { setUsersData } from '@/redux/authSlice'
import { AxiosInstance } from '@/utils/axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

function useCurrentUser() {
    const dispatch = useDispatch()
    useEffect(() => {
        const getCurrentUser = async() => {
            try {
                const response = await AxiosInstance.get('/v1/user/currentUser');
                console.log("res fron hook",response.data);
                dispatch(setUsersData(response.data?.user))
            } catch (error) {
                console.log("error in get current user hook",error);
            }
        }

        getCurrentUser();
    },[])
}

export default useCurrentUser