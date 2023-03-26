import { useDispatch } from "react-redux";
import { setLikedPropreties } from "../redux/redux";

export const useLoader = () => {
  //redux
  const dispatch = useDispatch();

  // Load liked properties
  const loadLikes = async (userId) => {
    const response = await fetch(
      `${process.env.REACT_APP_PROXY}/api/favorite/${userId}`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "aplication/json",
        },
      }
    );
    const json = await response.json();
    if (response.ok) {
      dispatch(setLikedPropreties(json));
    }
  };

  return { loadLikes };
};

