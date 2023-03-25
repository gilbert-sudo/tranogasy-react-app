import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { useLike } from "../hooks/useLike";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function TopPropertyDetails({ topProperty }) {
  const { like } = useLike();
  const [isliked, setIsliked] = useState(false);
  //redux
  const user = useSelector((state) => state.user.client);
  const likedPropertiesState = useSelector((state) => state.likedProperties);
  const userId = user._id;

  const propertyId = topProperty.property._id;
  const cityId = topProperty.city._id;
  const imageId = topProperty.images._id;
  //click the like button
  const handleLike = () => {
    like(userId, propertyId, cityId, imageId);
  };
  //check the like button state

  useEffect(() => {
    const verifyLikeButton = () => {
      const likedProperties = likedPropertiesState.filter(
        (liked) => liked.property._id === propertyId
      );
      if (likedProperties.length !== 0) {
        setIsliked(true);
      }
    };
    verifyLikeButton();
  }, [likedPropertiesState, propertyId]);
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="property-entry h-100">
        <Link
          to={`/property/${topProperty.property._id}`}
          className="property-thumbnail"
        >
          <div className="offer-type-wrap">
            <span className="offer-type bg-success">Location</span>
          </div>
          <img
            src={topProperty.images.length > 0 ? topProperty.images[0].url : ""}
            alt=""
            className="img-fluid"
          />
        </Link>
        <div className="p-4 property-body">
          {isliked && isliked ? (
            <div
              className="property-favorite"
              style={{ background: "#f23a2e", color: "#fff" }}
            >
              <FiHeart />
            </div>
          ) : (
            <div className="property-favorite">
              <FaHeart onClick={handleLike} />
            </div>
          )}
          <h2 className="property-title">
            <a href="property-details.html">{topProperty.property.title}</a>
          </h2>
          <span className="property-location d-block mb-3">
            <span className="property-icon icon-room" /> 625 S.{" "}
            {topProperty.city.quarter} St Unit 607 {topProperty.city.cityname},
            CA 90005
          </span>
          <strong className="property-price text-primary mb-3 d-block text-success">
            {topProperty.property.rent} AR / mois
          </strong>
          <ul className="property-specs-wrap mb-lg-0">
            <li>
              <span className="property-specs">Chambre</span>
              <span className="property-specs-number">
                {topProperty.property.bedrooms} <sup>+</sup>
              </span>
            </li>
            <li>
              <span className="property-specs">Salle de bains</span>
              <span className="property-specs-number">
                {topProperty.property.bathrooms}
              </span>
            </li>
            <li>
              <span className="property-specs">Surface en m²</span>
              <span className="property-specs-number">
                {topProperty.property.area}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopPropertyDetails;
