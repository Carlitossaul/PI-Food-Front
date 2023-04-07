import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Landing.module.css";
import bgVideo from "../../helper/VideoGastronomico.mp4";

const Landing = () => {
  return (
    <div className={style.landing}>
      <video className={style.video} src={bgVideo} autoPlay loop muted />
      <div className={style.container}>
        <div className={style.card}>
          <h1 className={style.areYou}>Are you</h1>
          <h1 className={style.hungry}>hungry?</h1>
          <p className={style.parrafo}>
            Discover the best diets and recipes for a good alimentation...
          </p>
          <NavLink to={"/home"}>
            <button className={style.button}>Start</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Landing;
