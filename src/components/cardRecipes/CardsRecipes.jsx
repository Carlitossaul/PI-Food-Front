import React from "react";
import { useSelector } from "react-redux";
import Card from "../card/Card";
import style from "./CardsRecipes.module.css";

const CardsRecipes = () => {
  const recipes = useSelector((state) => state.recipes);

  return (
    <div className={style.cards}>
      {recipes.length &&
        recipes
          .slice(0, 9)
          .map((recipe) => (
            <Card
              id={recipe.id}
              key={recipe.name}
              name={recipe.name}
              image={recipe.image}
              alt={recipe.alt}
              diets={recipe.diets}
            />
          ))}
    </div>
  );
};

export default CardsRecipes;
