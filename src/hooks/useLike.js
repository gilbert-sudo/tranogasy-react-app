import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateLikedPropreties } from "../redux/redux"

export const useLike = () => {

  const [error, setError] = useState(null);
  const dispatch = useDispatch();


  const like = async ( userId, propertyId, cityId, imageId ) => {

    const response = await fetch(
      `${process.env.REACT_APP_PROXY}/api/favorite`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          user: userId,
          property: propertyId,
          city: cityId,
          images: imageId,
        }),
      }
    );

    const json = await response.json()

    if (response.ok) {
      setError({ error: false });
      dispatch(updateLikedPropreties(json))
    }
    if (!response.ok) {
      setError({ error: true });
    }
  };

  return { like, error };
};
