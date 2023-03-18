import { NavLink, useLocation } from "react-router-dom";

import "../assets/css/styles.css";
import { BiHome, BiUser, BiBookAlt, BiBriefcaseAlt, BiMessageSquareDetail } from "react-icons/bi";

const Navbar = () => {

  const location = useLocation();

  return (
    <>
      {/*=============== HEADER ===============*/}
      <div className="header" id="header">
        <div className="navigation container">
          <a href="#" className="nav__logo">
            TranoGasy
          </a>
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item mt-3">
                <NavLink to="/home"  className={location.pathname === '/home' ? 'nav__link active-link' : 'nav__link'}>
                  <BiHome className="nav__icon" />
                  <span className="nav__name">Home</span>
                </NavLink>
              </li>
              <li className="nav__item mt-3">
                <NavLink to="/" className={location.pathname === '/' ? 'nav__link active-link' : 'nav__link'}>
                  <BiUser className="nav__icon" />
                  <span className="nav__name">About</span>
                </NavLink>
              </li>
              <li className="nav__item mt-3">
                <a href="#skills" className="nav__link">
                  <BiBookAlt className="nav__icon" />
                  <span className="nav__name">Skills</span>
                </a>
              </li>
              <li className="nav__item mt-3">
                <a href="#portfolio" className="nav__link">
                  <BiBriefcaseAlt className="nav__icon" />
                  <span className="nav__name">Portfolio</span>
                </a>
              </li>
              <li className="nav__item mt-3">
                <a href="#contactme" className="nav__link">
                  <BiMessageSquareDetail className="nav__icon" />
                  <span className="nav__name">Contactme</span>
                </a>
              </li>
            </ul>
          </div>
          <img src="images/logo.png" alt="" className="nav__img" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
