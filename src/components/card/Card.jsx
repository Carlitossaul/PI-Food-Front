import React from "react";
import style from "./Card.module.css";

const Card = ({ image, alt, name, diets }) => {
  return (
    <div className={style.card}>
      <img className={style.img} src={image} alt={alt} />
      <h1>{name}</h1>
      {Array.isArray(diets) && diets.map((dieta) => <p>{dieta}</p>)}
    </div>
  );
};

export default Card;
