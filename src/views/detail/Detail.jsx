import React, { useEffect } from "react";
import { getDetail } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";

const Detail = () => {
  let { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetail(id));
  }, []);
  const recipe = useSelector((state) => state.detail);
  console.log(recipe);
  console.log(id);
  return (
    <div className={style.container}>
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} />
      <h3>summary: {recipe.summary}</h3>
      <h5>healthScore: {recipe.healthScore}</h5>
      <h5>steps: {recipe.steps}</h5>
      <span className={style.span}>
        {" "}
        Diets:{" "}
        {Array.isArray(recipe.diets) &&
          recipe.diets.map((dieta) => (
            <ul className={style.ul}>
              <li className={style.li}>{dieta}</li>
            </ul>
          ))}
      </span>
    </div>
  );
};

export default Detail;
