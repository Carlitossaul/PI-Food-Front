import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ image, alt, name, diets, id }) => {
  return (
    <Link className={style.link} to={`/detail/${id}`}>
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
    </Link>
  );
};

export default Card;
