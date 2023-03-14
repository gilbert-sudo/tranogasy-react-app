import Navbar from "./Navbar";

const SideMenu = () => {
  return (
    <div className="site-wrap">
      <div className="test">
        <div className="site-mobile-menu">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle" />
            </div>
          </div>
          <div className="site-mobile-menu-body" />
        </div>{" "}
        {/* .site-mobile-menu */}
        <div className="site-navbar mt-4">
          <div className="container py-1">
            <div className="row align-items-center">
              <div className="col-8 col-md-8 col-lg-4">
                <h1 className="mb-0">
                  <a href="/" className="text-white h2 mb-0">
                    <strong>
                      TranoGasy<span className="text-danger">.</span>
                    </strong>
                  </a>
                </h1>
              </div>
              <Navbar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
