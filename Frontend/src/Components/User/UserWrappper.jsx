import React, { useCallback, useContext, useEffect, useReducer } from "react";
import { UserDataContext } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UserWrappper({ children }) {
  const navigate = useNavigate();
  const { setUserData } = useContext(UserDataContext);
  const token = localStorage.getItem("token");

  const handleUser = useCallback(async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/user/profile`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status == 200 && response.data.user) {
        setUserData(response.data.user);
      }
    } catch (error) {
      console.log(error);
      if (error.status == 401) {
        navigate("/login");
      }
    }
  }, []);

  useEffect(() => {
    handleUser();
  }, [token]);
  return <>{children}</>;
}

export default UserWrappper;
