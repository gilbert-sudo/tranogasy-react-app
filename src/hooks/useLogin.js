import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../redux/redux";


export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [bootstrapClassname, setBootstrap] = useState(null);

  //redux
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user)

  const login = async (phoneNumber, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`${process.env.REACT_APP_PROXY}/api/clients/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ phone: phoneNumber, password }),
      });
  
      const json = await response.json();
  
      if (!response.ok) {
        setError(json.error);
        setIsLoading(false);
        setBootstrap("alert alert-danger")
      }

    if (response.ok) {
        setError(null);
        localStorage.setItem("user", JSON.stringify(json));
        dispatch(setUser(json));
        setIsLoading(false);
      }

  };

  return { login, isLoading, error, bootstrapClassname };
};
