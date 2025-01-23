import React, { useCallback, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CaptainContex } from "../../Context/CaptainContext";

function CaptainWrapper({ children }) {
  const navigate = useNavigate();
  const { setCaptain } = useContext(CaptainContex);
  const token = localStorage.getItem("token");
  const isCaptain = useCallback(async () => {
    try {
      if (token) {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/captain/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status == 200 && response.data.captainUser) {
          setCaptain(response.data.captainUser);
        }
      }
    } catch (error) {
      if (error.status == 401) {
        navigate("/captainlogin");
      }
    }
  }, [token, setCaptain]);

  useEffect(() => {
    isCaptain();
  }, [token]);
  return <>{children}</>;
}

export default CaptainWrapper;
