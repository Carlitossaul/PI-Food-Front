import React, { useEffect } from "react";
import { getDetail } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import style from "./Detail.module.css";

const Detail = () => {
  const navigate = useNavigate();
  let { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetail(id));
    window.scrollTo(0, 0);
  }, []);
  const recipe = useSelector((state) => state.detail);

  return (
    <div className={style.container}>
      <div className={style.recipe}>
        <button
          className={style.button}
          onClick={() => {
            navigate("/home");
          }}
        >
          Go Back!
        </button>
        <h1 className={style.title}>{recipe.name}</h1>
        <div className={style.info}>
          <p>⏱ Total Time: {recipe.readyInMinutes} Minutes</p>
          <p>👨‍👩‍👧‍👦 Servings: {recipe.servings}</p>
          <p>❤ Health Score: {recipe.healthScore}</p>
        </div>
        <div className={style.divImage}>
          <img className={style.image} src={recipe.image} alt={recipe.name} />
        </div>
        <h3 className={style.subTitle}>Diets:</h3>
        <ul className={style.ul}>
          {Array.isArray(recipe.Diets) &&
            recipe.Diets.map((dieta) => <li className={style.li}>{dieta},</li>)}
        </ul>
        <h3 className={style.subTitle}>Summary: </h3>
        <p className={style.text}>{recipe.summary}</p>
        <h3 className={style.subTitle}>Steps: </h3>
        <p className={style.text}>{recipe.steps}</p>
      </div>
    </div>
  );
};

export default Detail;

{
  /* {Array.isArray(recipe.ingredients) && (
  <table className={style.table}>
    <thead>
      <tr>
        <th>Ingrediente</th>
        <th>Cantidad</th>
      </tr>
    </thead>
    <tbody>
      {recipe.ingredients.map((ingredient) => (
        <tr key={ingredient.id}>
          <td>{ingredient.name}</td>
          <td>
            {ingredient.amount} {ingredient.unit}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
)} */
}
