const BookingPage = () => {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n\n        body {\n\n    background-color: #eeeff3;\n            height: 100%;\n        }\n\n        .card {\n            width: 100%;\n            border-radius: 10px;\n            box-shadow: 0px 4px 8px 0px #7cbd1e;\n            margin-top: 10px;\n            margin-bottom: 10px;\n        }\n\n        .set-p {\n            padding-left: 15px;\n            padding-right: 15px;\n        }\n\n        .image {\n            object-fit: cover;\n            width: 100%;\n            height: 100%;\n            border-top-left-radius: 10px;\n            border-bottom-left-radius: 10px;\n        }\n\n        .rating {\n            background-color: #3D5AFE;\n            color: #fff;\n            border-top-left-radius: 5px;\n            border-top-right-radius: 5px;\n            border-bottom-right-radius: 5px;\n        }\n\n        .grade {\n            font-size: 18px;\n        }\n\n        .line {\n            height: 1px;\n            background-color: #E0E0E0;\n        }\n        \n        @media screen and (max-width: 575px) {\n            .image {\n                height: 100%;\n                border-top-left-radius: 10px;\n                border-bottom-left-radius: 0px;\n                border-top-right-radius: 10px;\n            }\n        }\n    "
        }}
      />
      <div className="container px-5 mx-auto" style={{paddingTop: "60px"}}>
        <div className="row d-flex justify-content-center">
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
                  <p
                    className="rating mb-0 px-2 mr-3"
                    style={{ fontSize: "2.5vw" }}
                  >
                    <strong>10/10/23</strong>
                  </p>
                  <p
                    className="text-success mb-0 mr-2 grade"
                    style={{ fontSize: "3vw" }}
                  >
                    <strong>...en atente</strong>
                  </p>
                </div>
                <div className="row px-3">
                  <h3 className="font-weight-bold" style={{ fontSize: "3vw" }}>
                    Maison de ville moderne
                  </h3>
                </div>
                {/* <div class="row px-3 mb-2 mt-2">
                      <span class="fa fa-star text-warning mr-1"></span>
                      <span class="fa fa-star text-warning mr-1"></span>
                      <span class="fa fa-star text-warning mr-1"></span>
                      <span class="fa fa-star text-warning mr-1"></span>
                  </div> */}
                {/* <div class="row px-3">
                      <h5 class="mb-1">1 bedroom &middot; 1 living &middot; 2 beds</h5>
                  </div>
                  <div class="row px-3">
                      <p class="">Mitte, Berlin &middot; 2.6 km from center</p>
                  </div> */}
                <div className="line" />
                <div className="row px-3 mt-3">
                  <h5
                    className="text-secondary mb-1"
                    style={{ fontSize: "3vw" }}
                  >
                    Prix du loyer
                  </h5>
                </div>
                <div className="row px-3">
                  <h2
                    className="text-success mb-1 font-weight-bold"
                    style={{ fontSize: "4vw" }}
                  >
                    150,000 Ar/mois
                  </h2>
                </div>
                {/* <div class="row px-3 mb-3">
                      <p class="text-muted mb-0">+ $14 taxes and charges</p>
                  </div> */}
              </div>
            </div>
          </div>
        </div>

        
        <div className="row d-flex justify-content-center">
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
                  <p
                    className="rating mb-0 px-2 mr-3"
                    style={{ fontSize: "2.5vw" }}
                  >
                    <strong>10/10/23</strong>
                  </p>
                  <p
                    className="text-success mb-0 mr-2 grade"
                    style={{ fontSize: "3vw" }}
                  >
                    <strong>...en atente</strong>
                  </p>
                </div>
                <div className="row px-3">
                  <h3 className="font-weight-bold" style={{ fontSize: "3vw" }}>
                    Maison de ville moderne
                  </h3>
                </div>
                {/* <div class="row px-3 mb-2 mt-2">
                      <span class="fa fa-star text-warning mr-1"></span>
                      <span class="fa fa-star text-warning mr-1"></span>
                      <span class="fa fa-star text-warning mr-1"></span>
                      <span class="fa fa-star text-warning mr-1"></span>
                  </div> */}
                {/* <div class="row px-3">
                      <h5 class="mb-1">1 bedroom &middot; 1 living &middot; 2 beds</h5>
                  </div>
                  <div class="row px-3">
                      <p class="">Mitte, Berlin &middot; 2.6 km from center</p>
                  </div> */}
                <div className="line" />
                <div className="row px-3 mt-3">
                  <h5
                    className="text-secondary mb-1"
                    style={{ fontSize: "3vw" }}
                  >
                    Prix du loyer
                  </h5>
                </div>
                <div className="row px-3">
                  <h2
                    className="text-success mb-1 font-weight-bold"
                    style={{ fontSize: "4vw" }}
                  >
                    150,000 Ar/mois
                  </h2>
                </div>
                {/* <div class="row px-3 mb-3">
                      <p class="text-muted mb-0">+ $14 taxes and charges</p>
                  </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingPage;
