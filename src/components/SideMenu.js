import { Link } from "react-router-dom";
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
                  <Link to="/" className="text-white h2 mb-0">
                    <strong>
                      TranoGasy<span className="text-danger">.</span>
                    </strong>
                  </Link>
                </h1>
              </div>
              <div className="col-4 col-md-4 col-lg-8">
                <nav
                  className="site-navigation text-right text-md-right"
                  role="navigation"
                >
                  <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3">
                    <a
                      href="#"
                      className="site-menu-toggle js-menu-toggle text-white"
                    >
                      <span className="icon-menu h3" />
                    </a>
                  </div>
                  <ul className="site-menu js-clone-nav d-none d-lg-block">
                    <li className="active">
                      <Link to="/">Acceuil</Link>
                    </li>
                    <li>
                      <Link to="/PropertyDetailsPage">Acheter</Link>
                    </li>
                    <li>
                      <a href="rent.html">Louer</a>
                    </li>
                    <li className="has-children">
                      <a href="properties.html">Annonces</a>
                      <ul className="dropdown arrow-top">
                        <li>
                          <a href="#">Colocation</a>
                        </li>
                        <li>
                          <a href="#">Terrain </a>
                        </li>
                        <li>
                          <a href="#">Bâtiment commercial</a>
                        </li>
                        <li className="has-children">
                          <a href="#">Sous-menu</a>
                          <ul className="dropdown">
                            <li>
                              <a href="#">Menu One</a>
                            </li>
                            <li>
                              <a href="#">Menu Two</a>
                            </li>
                            <li>
                              <a href="#">Menu Three</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="about.html">À propos de nous</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                    <li>
                      <a href="ip.html">Fiteny </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
