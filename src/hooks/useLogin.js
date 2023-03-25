import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../redux/redux";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [bootstrapClassname, setBootstrap] = useState(null);

  //redux
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  const login = async (phoneNumber, password) => {
    setIsLoading(true);
    setError(null);

    if (!phoneNumber.length || !password.length) {
      setBootstrap("alert alert-warning");
      setError("Veuillez remplir les champs obligatoires.");
      setIsLoading(false);
      return;
    }

    const phoneNumberRegex = /^(03[2,3,4,8])(\d{7})$|^(3[2,3,4,8])(\d{7})$/;
    if (phoneNumberRegex.test(phoneNumber)) {
      if (phoneNumber.length === 10 || phoneNumber.length === 9) {
        try {
          const response = await fetch(
            `${process.env.REACT_APP_PROXY}/api/clients/login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
              body: JSON.stringify({ phone: phoneNumber, password }),
            }
          );

          const json = await response.json();

          if (!response.ok) {
            setError(json.error);
            setIsLoading(false);
            setBootstrap("alert alert-danger");
          }

          if (response.ok) {
            setBootstrap("alert alert-success");
            setError(" Vous vous êtes connecté(e) maintenant!");
            localStorage.setItem("user", JSON.stringify(json));
            dispatch(setUser(json));
            setIsLoading(false);
          }
        } catch (error) {
          setBootstrap("alert alert-danger");
          setError("Une erreur s'est produite lors de l'envoi du message.");
          setIsLoading(false);
        }
      }
    } else {
      // Phone number has invalid format
      setBootstrap("alert alert-danger");
      setError("votre numéro de téléphone n'est pas correct.");
      setIsLoading(false);
    }
  };
  const loginWith = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_PROXY}/connexion/login/success`
    );

    const json = await response.json();

    if (!response.ok) {
      console.log("the loginWith is not ok");
    }

    if (response.ok) {
      console.log(json);
      localStorage.setItem("user", JSON.stringify(json));
      //dispatch(setUser(json));
    }
  };
  return { loginWith, login, isLoading, error, bootstrapClassname };
};
