const Carousel = () => {

  return (
    <div className="slide-one-item home-slider owl-carousel">
      <div
        className="site-blocks-cover overlay"
        style={{ backgroundImage: "url(images/hero_bg_1.jpg)" }}
        data-aos="fade"
        data-stellar-background-ratio="0.5"
      > 
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-md-6" style={{ marginTop: 50 }}>
              <p>
                <a
                  href="#"
                  className="btn btn-white btn-outline-white py-3 px-3 rounded-0 btn-2"
                >
                  Voir détails
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="site-blocks-cover overlay"
        style={{ backgroundImage: "url(images/hero_bg_2.jpg)" }}
        data-aos="fade"
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-md-10" style={{ marginTop: 50 }}>
              <p>
                <a
                  href="#"
                  className="btn btn-white btn-outline-white py-3 px-3 rounded-0 btn-2"
                >
                  Voir détails
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;