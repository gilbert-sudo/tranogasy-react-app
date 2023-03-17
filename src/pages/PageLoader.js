import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setTopProperties } from "../redux/redux";

const PageLoader = () => {
  const navigate = useNavigate();

  //redux
  const dispatch = useDispatch();
  const topProperties = useSelector((state) => state.topProperties);

  
  if (topProperties !== null) {
    navigate("/home");
  }

  useEffect(() => {
    // Load my data here
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
    // Redirect the user when data is loaded
  }, [dispatch, topProperties, navigate]);
  // Render the main content

  return (
    <div>
      <div className="logo-loader"></div>
      <div className="page-loader"></div>
    </div>
  );
};

export default PageLoader;
