import React from "react";

import "./navbar.scss";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav--cantainer">
      <Link to={"/"}>
        <div className="brand-logo">
          <img
            className="brand-img"
            src="assets/brand-logo/tourbay.png"
            alt=""
          />
        </div>
      </Link>

      <div className="nav-links">
        <NavLink
          to={"/all-tours"}
          className={({ isActive }) =>
            isActive ? "main-link--active" : "main-link"
          }
        >
          Tours
        </NavLink>

        <Link
          to="#"
          //   className={({ isActive }) =>
          //     isActive ? "main-link--active" : "main-link"
          //   }
          className={"main-link"}
        >
          Add tour
        </Link>

        <NavLink
          to={"/my-tours"}
          className={({ isActive }) =>
            isActive ? "main-link--active" : "main-link"
          }
        >
          My Tours
        </NavLink>
      </div>

      <div></div>
    </nav>
  );
};

export default Navbar;
