import React, { useContext, useEffect, useReducer } from "react";
import { UserDataContext } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";

function UserWrappper({ children }) {
  const navigate = useNavigate();
  const { userData } = useContext(UserDataContext);
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);
  return <>{children}</>;
}

export default UserWrappper;
