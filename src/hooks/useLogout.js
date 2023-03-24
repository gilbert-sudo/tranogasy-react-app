import { setUser } from "../redux/redux";
import { useDispatch } from "react-redux";

export const useLogout = () => {
  const dispatch  = useDispatch();

  const logout = () => {
    //remove user from localStorage
    localStorage.removeItem("user");

    //update the user redux state
    dispatch(setUser(null));
  };

  return {logout}

};
