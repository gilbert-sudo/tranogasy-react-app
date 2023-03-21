import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateActiveLink } from "../redux/redux";

import {
  BiHome,
  BiUser,
  BiBookAlt,
  BiBriefcaseAlt,
  BiMessageSquareDetail,
} from "react-icons/bi";

const Navbar = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.pagination);
  const activePage = state[2].activeLink;

  return (
    <>
      {/*=============== HEADER ===============*/}
      <div className="header" id="header">
        <div className="navigation container">
          <Link to="/" className="nav__logo">
            TranoGasy
          </Link>
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item mt-3">
                <NavLink
                  to="/"
                  style={
                    activePage === "/"
                      ? { color: "#26A699" }
                      : { color: "#222B2A" }
                  }
                  className="nav__link"
                  onClick={() => {
                    dispatch(updateActiveLink("/"));
                  }}
                >
                  <BiHome className="nav__icon" />
                  <span className="nav__name">Home</span>
                </NavLink>
              </li>
              <li className="nav__item mt-3">
                {" "}
                <NavLink
                  to="/user"
                  style={
                    activePage === "/user"
                      ? { color: "#26A699" }
                      : { color: "#222B2A" }
                  }
                  className="nav__link"
                  onClick={() => {
                    dispatch(updateActiveLink("/user"));
                  }}
                >
                  <BiUser className="nav__icon" />
                  <span className="nav__name">Connexion</span>
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
