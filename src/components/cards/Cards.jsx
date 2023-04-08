import { useDispatch, useSelector } from "react-redux";
import Card from "../card/Card";
import React, { useEffect } from "react";
import { getRecipes } from "../../redux/actions";
import style from "./Cards.module.css";
import SearchBar from "../searchBar/SearchBar";

const Cards = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);
  console.log(recipes);
  return (
    <div className={style.container}>
      <div className={style.header}>
        <SearchBar />
      </div>
      <div className={style.cards}>
        {recipes.length &&
          recipes
            .slice(0, 9)
            .map((recipe) => (
              <Card
                key={recipe.name}
                name={recipe.name}
                image={recipe.image}
                alt={recipe.alt}
                diets={recipe.diets}
              />
            ))}
      </div>
    </div>
  );
};

export default Cards;
