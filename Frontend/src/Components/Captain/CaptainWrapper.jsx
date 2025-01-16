import React, { useCallback, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CaptainContex } from "../../Context/CaptainContext";

function CaptainWrapper({ children }) {
  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(CaptainContex);
  const token = localStorage.getItem("token");
  const isCaptain = async () => {
    if (token) {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/captain/profile`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status == 200) {
        console.log(response);
        setCaptain(response.data.captainUser);
        return true;
      }
      return false;
    }
    return false;
  };
  useEffect(() => {
    if (!token || !isCaptain()) {
      navigate("/captainlogin");
    }
  }, [token]);
  return <>{children}</>;
}

export default CaptainWrapper;
