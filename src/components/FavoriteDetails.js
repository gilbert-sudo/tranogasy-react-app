import { FaBed, FaBath } from "react-icons/fa";
import { MdBedroomChild } from "react-icons/md";

function FavoriteDetails({ favorite }) {
  return (
    <div className="card border-0">
      <div className="row set-p justify-content-center">
        <div className="col px-0">
          <img
            className="image"
            src="https://ik.imagekit.io/ryxb55mhk/Tranogasy/properties/img_1.jpg?updatedAt=1678881702711"
          />
        </div>
        <div className="col">
          <div className="row px-3 mt-2">
            <p className="rating mb-0 px-2" style={{ fontSize: "2.5vw" }}>
              <strong>10/10/23</strong>
            </p>
          </div>
          <div className="row px-3">
            <h3 className="font-weight-bold" style={{ fontSize: "3vw" }}>
              {favorite.property.title}
            </h3>
          </div>
          {/* <div class="row px-3 mb-2 mt-2">
                        <span class="fa fa-star text-warning mr-1"></span>
                        <span class="fa fa-star text-warning mr-1"></span>
                        <span class="fa fa-star text-warning mr-1"></span>
                        <span class="fa fa-star text-warning mr-1"></span>
                    </div> */}
          <div class="row px-3">
            <h5 class="mb-1" style={{ fontSize: "3vw" }}>
              1 <MdBedroomChild /> &middot; 1 <FaBed /> &middot; 2 <FaBath />
            </h5>
          </div>
          {/*   <div class="row px-3">
                        <p class="">Mitte, Berlin &middot; 2.6 km from center</p>
                    </div> */}
          <div className="line" />
          <div className="row px-3 mt-3">
            <h5 className="text-secondary mb-1" style={{ fontSize: "3vw" }}>
              Prix du loyer
            </h5>
          </div>
          <div className="row px-3">
            <h2
              className="text-success mb-1 font-weight-bold"
              style={{ fontSize: "4vw" }}
            >
              {favorite.property.rent.toLocaleString("en-US")} <small>AR/mois</small>
            </h2>
          </div>
          <div className="row px-3 mt-2 d-flex justify-content-end">
            <p
              className="rating mb-0 px-2"
              style={{ fontSize: "3vw", backgroundColor: "#ec1c24" }}
            >
              <strong>Effacer</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavoriteDetails;
