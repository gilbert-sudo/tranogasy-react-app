const PropertyGallery = () => {
  return (
    <div className="bg-white property-body border-bottom border-left border-right p-0">
      <div className="row no-gutters mt-5">
        <div className="col-12">
          <h2 className="h4 text-black mb-3">Galerie</h2>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <a href="images/img_7.jpg" className="image-popup gal-item">
            <img src="images/img_7.jpg" alt="Image" className="img-fluid" />
          </a>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <a href="images/img_8.jpg" className="image-popup gal-item">
            <img src="images/img_8.jpg" alt="Image" className="img-fluid" />
          </a>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <a href="images/img_1.jpg" className="image-popup gal-item">
            <img src="images/img_1.jpg" alt="Image" className="img-fluid" />
          </a>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <a href="images/img_2.jpg" className="image-popup gal-item">
            <img src="images/img_2.jpg" alt="Image" className="img-fluid" />
          </a>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <a href="images/img_3.jpg" className="image-popup gal-item">
            <img src="images/img_3.jpg" alt="Image" className="img-fluid" />
          </a>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <a href="images/img_4.jpg" className="image-popup gal-item">
            <img src="images/img_4.jpg" alt="Image" className="img-fluid" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PropertyGallery;
