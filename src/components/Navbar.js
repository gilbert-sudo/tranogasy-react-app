import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="col-4 col-md-4 col-lg-8">
      <nav
        className="site-navigation text-right text-md-right"
        role="navigation"
      >
        <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3">
          <a href="#" className="site-menu-toggle js-menu-toggle text-white">
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
  );
};

export default Navbar;
