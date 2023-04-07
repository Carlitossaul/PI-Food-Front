import React from "react";
// import img from "../../helper/profile-pic (3).png";
import style from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import Search from "../search/Search";

const Navbar = () => {
  const location = useLocation();

  return location.pathname !== "/" ? (
    <nav className={style.nav}>
      <div className={style.container}>
        <Link to={"/home"} className={style.conteinerImg}>
          {/* <img className={style.img} src={img} alt="logo" /> */}
        </Link>
        <div className={style.Search}>
          <Search />
        </div>
        <div className={style.links}>
          <Link
            to="/home"
            className={`${style.link} ${
              window.location.pathname === "/home" && style["link-active"]
            }`}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`${style.link} ${
              window.location.pathname === "/about" && style["link-active"]
            }`}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  ) : null;
};

export default Navbar;
