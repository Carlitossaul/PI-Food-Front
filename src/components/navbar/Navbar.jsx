import React from "react";
import img from "../../helper/profile-pic.png";
import style from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import Search from "../search/Search";

const Navbar = () => {
  const location = useLocation();

  return location.pathname !== "/" &&
    location.pathname !== "/create" &&
    !location.pathname.includes("/detail/") ? (
    <nav className={style.nav}>
      <div className={style.container}>
        <Link to={"/home"} className={style.conteinerImg}>
          <img className={style.img} src={img} alt="logo" />
        </Link>
        <div className={style.Search}>
          <Search />
        </div>
      </div>
    </nav>
  ) : null;
};

export default Navbar;
