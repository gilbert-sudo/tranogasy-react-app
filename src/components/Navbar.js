import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector, useLocation } from "react-redux";
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
            <trano style={{ color: "#7cbd1e" }}>Trano</trano>
            <gasy style={{ color: "#ec1c24" }}>Gasy</gasy>.
          </Link>
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item mt-3">
                <NavLink
                  to="/"
                  style={
                    activePage === "/"
                      ? { color: "#7cbd1e" }
                      : // ? { color: "#26A699" }
                        { color: "#222B2A" }
                  }
                  className="nav__link"
                  onClick={() => {
                    dispatch(updateActiveLink("/"));
                  }}
                >
                  <BiHome className="nav__icon" />
                  <span className="nav__name">Acceuil</span>
                </NavLink>
              </li>

              <li className="nav__item mt-3">
                {" "}
                <NavLink
                  to="/login"
                  style={
                    activePage === "/login"
                      ? { color: "#7cbd1e" }
                      : { color: "#222B2A" }
                  }
                  className="nav__link"
                  onClick={() => {
                    dispatch(updateActiveLink("/login"));
                  }}
                >
                  <BiBookAlt className="nav__icon" />
                  <span className="nav__name">Connexion</span>
                </NavLink>
              </li>
              <li className="nav__item mt-3">
                {" "}
                <NavLink
                  to="/signup"
                  style={
                    activePage === "/signup"
                      ? { color: "#7cbd1e" }
                      : { color: "#222B2A" }
                  }
                  className="nav__link"
                  onClick={() => {
                    dispatch(updateActiveLink("/signup"));
                  }}
                >
                  <BiBriefcaseAlt className="nav__icon" />
                  <span className="nav__name">Connexion</span>
                </NavLink>
              </li>
              <li className="nav__item mt-3">
                <a href="#contactme" className="nav__link">
                  <BiMessageSquareDetail className="nav__icon" />
                  <span className="nav__name">Contactme</span>
                </a>
              </li>
              <li className="nav__item mt-3">
                {" "}
                <NavLink
                  to="/user"
                  style={
                    activePage === "/user"
                      ? { color: "#7cbd1e" }
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
            </ul>
          </div>
          <img src="images/logo.png" alt="" className="nav__img" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
