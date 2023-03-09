
function PropertyDetails({ property }) {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="property-entry h-100">
        <a href="property-details.html" className="property-thumbnail">
          <div className="offer-type-wrap">
            <span className="offer-type bg-success">Location</span>
          </div>
          <img src="https://scontent.ftnr4-1.fna.fbcdn.net/v/t39.30808-6/289813430_5303706209665901_1608546722638759392_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGBKNcQw_f4OAAGEaL6Iutt3-qjPhsK-qPf6qM-Gwr6o_GGACAzzibGiEsXaPb15wmg7-IiUe4LjZrVTeqDh76o&_nc_ohc=HFCUNBwcgEYAX_Ha7jy&_nc_zt=23&_nc_ht=scontent.ftnr4-1.fna&oh=00_AfCfeWBF15Pp3mX5j-tdrhX37GELDtJpfuWADff1Prl1OA&oe=640F48CC" alt="Image" className="img-fluid" />
        </a>
        <div className="p-4 property-body">
          <a
            className="property-favorite"
            onmouseleave="unreact(1);"
            onmouseover="react(1);"
            onclick="like(1);"
            id="like-btn1"
          >
            <span className="icon-heart-o" />
          </a>
          <h2 className="property-title">
            <a href="property-details.html">{property.title}</a>
          </h2>
          <span className="property-location d-block mb-3">
            <span className="property-icon icon-room" /> 625 S. {property.city.quarter} St Unit
            607 {property.city.cityname}, CA 90005
          </span>
          <strong className="property-price text-primary mb-3 d-block text-success">
            $2,265,500
          </strong>
          <ul className="property-specs-wrap mb-3 mb-lg-0">
            <li>
              <span className="property-specs">Chambre</span>
              <span className="property-specs-number">
                2 <sup>+</sup>
              </span>
            </li>
            <li>
              <span className="property-specs">Salle de bains</span>
              <span className="property-specs-number">2</span>
            </li>
            <li>
              <span className="property-specs">Surface en m²</span>
              <span className="property-specs-number">7,000</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;