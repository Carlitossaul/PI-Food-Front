import React from "react";
import img from "../../helper/logo.png";
import style from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import Search from "../search/Search";

const Navbar = () => {
  const location = useLocation();
  const isAboutOrCreatedOrDetail =
    location.pathname === "/about" ||
    location.pathname === "/create" ||
    location.pathname.startsWith("/detail");
  return (
    location.pathname !== "/" && (
      <nav className={style.nav}>
        <div className={style.container}>
          <div className={style.links}>
            <Link to={"/home"} className={style.conteinerImg}>
              <img className={style.img} src={img} alt="logo" />
            </Link>
            <Link
              to="/home"
              className={`${style.link} ${
                window.location.pathname === "/home" && style["link-active"]
              }`}
            >
              Home
            </Link>

            <Link
              to="/create"
              className={`${style.link} ${
                window.location.pathname === "/create" && style["link-active"]
              }`}
            >
              Create
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
          {!isAboutOrCreatedOrDetail && (
            <div className={style.Search}>
              <Search />
            </div>
          )}
        </div>
      </nav>
    )
  );
};

export default Navbar;
