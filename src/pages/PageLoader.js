import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setTopProperties, setLikedPropreties } from "../redux/redux";

const PageLoader = () => {

  const navigate = useNavigate();

  //redux
  const dispatch = useDispatch();
  const topProperties = useSelector((state) => state.topProperties);
  const likedProperties = useSelector((state) => state.likedProperties);
  const user = useSelector((state) => state.user.client);
  const userId = user._id;

  if (topProperties !== null && likedProperties !== null) {
    navigate("/");
  }

  useEffect(() => {
    // Load my topproperties
    const fetchTopProperties = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_PROXY}/api/top-properties`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "aplication/json",
          },
        }
      );
      const json = await response.json();
      if (response.ok) {
        dispatch(setTopProperties(json));
      }
    };
    fetchTopProperties();

    // Load liked properties
    const fetchLikedProperties = async () => {
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
    fetchLikedProperties();
    // Redirect the user when data is loaded
  }, [dispatch, topProperties, likedProperties, userId]);
  // Render the main content

  return (
    <div>
      <div className="logo-loader"></div>
      <div className="page-loader"></div>
    </div>
  );
};

export default PageLoader;
