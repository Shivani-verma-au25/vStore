import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AxiosInstance } from "@/utils/axios";
import { setUsersData } from "@/redux/authSlice";

function useCurrentUser() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const response = await AxiosInstance.get("/v1/user/currentUser", {
          withCredentials: true, // VERY IMPORTANT for cookies
        });

        console.log("res from hook", response.data);

        if (response.data?.success) {
          dispatch(setUsersData(response.data.user));
        } else {
          dispatch(setUsersData(null));
        }
      } catch (error) {
        console.log("error in useCurrentUser hook:", error);
        dispatch(setUsersData(null)); // clear user on error
      }
    };

    getCurrentUser();
  }, []);
}

export default useCurrentUser;
