import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
function Navbar() {
  return (
    <nav>
      <div className="container">
        <img src="/imgs/logonavbar.svg" alt="" />

        <ul className="links">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
          <li>
            <NavLink to={"/portfolio"}>Portfolio</NavLink>
          </li>
          <li>
            <NavLink to={"/service"}>Service</NavLink>
          </li>
        </ul>
        <div className="nonebutons">
           <FaBars />
        </div>
        <button>contact</button>
      </div>
    </nav>
  );
}

export default Navbar;
