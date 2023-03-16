import { FaHome } from "react-icons/fa";

const CarouselDetails = () => {
  return (
    <div>
      <div
        className="site-blocks-cover inner-page-cover overlay"
        style={{ backgroundImage: "url(https://ik.imagekit.io/ryxb55mhk/Tranogasy/background/hero_bg_4.jpg)" }}
        data-aos="fade"
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-md-10">
              <span className="d-inline-block text-white px-3 mb-3 property-offer-type rounded">
                Property Details of
              </span>
              <h1 className="mb-2">625 S. Berendo St</h1>
              <p className="mb-5">
                <strong className="h2 text-success font-weight-bold">
                  1,000,500 AR/mois
                </strong>
              </p>
              <div className="col-md-12">
                <p>
                  <a
                    href="#contactAgent"
                    className="btn btn-white btn-outline-white py-3 px-3 rounded-0 btn-2"
                  >
                    <FaHome className="mr-2" /> Louer cette Maison
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
