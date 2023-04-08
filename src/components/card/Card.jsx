import React from "react";
import style from "./Card.module.css";

const Card = ({ image, alt, name, diets }) => {
  return (
    <div className={style.card}>
      <img className={style.img} src={image} alt={alt} />
      <h1 className={style.title}>{name}</h1>
      <span className={style.span}>
        {" "}
        Diets:{" "}
        {Array.isArray(diets) &&
          diets.map((dieta) => (
            <ul className={style.ul}>
              <li className={style.li}>{dieta}</li>
            </ul>
          ))}
      </span>
      <button className={style.button}>Directions</button>
    </div>
  );
};

export default Card;
