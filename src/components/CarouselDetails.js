import { BsFillHouseAddFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";

const CarouselDetails = ({ property, images, city }) => {
  return (
    <div>
      <div
        className="site-blocks-cover inner-page-cover overlay"
        style={{ backgroundImage: `url(${images[0].url})`}}
        data-aos="fade"
        data-stellar-background-ratio="0.5"
      >
        <div className="container"  style={{ backgroundColor: `rgb(0, 0, 0, 0.5)`}}>
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-md-10">
              <span className="d-inline-block text-white px-3 mb-3 property-offer-type rounded h6">
                Détails de la propriété <num className="h5 text-danger">n°:{property.propertyNumber}</num>
              </span>
              <h1 className="mb-2 h6">
                {" "}
                <ImLocation className="mr-2" />
                625 S. {property.city.quarter} St {city.cityname}
              </h1>
              <p className="mb-5 h4">
                <strong className="h2 text-success font-weight-bold">
                  {property.rent.toLocaleString("en-US")} <small>AR/mois</small>
                </strong>
              </p>
              <div className="col-md-12">
                <p>
                  <a
                    href="#contactAgent"
                    className="btn btn-white btn-outline-white py-2 px-3 rounded-0 btn-2"
                  >
                    <BsFillHouseAddFill className="mr-2 h3" /> Louer cette Maison
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselDetails;
