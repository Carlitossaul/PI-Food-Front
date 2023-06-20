import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../card/Card";
import style from "./CardsRecipes.module.css";

const CardsRecipes = () => {
  const recipes = useSelector((state) => state.recipes);
  const notRecipes = useSelector((state) => state.notRecipes);

  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 9;
  const totalPages = Math.ceil(recipes.length / recipesPerPage); //Se calcula el número total de páginas necesarias (totalPages) para mostrar todas las recetas, teniendo en cuenta la cantidad de recetas por página.

  useEffect(() => {
    // window.scrollTo(0, 0);
    setCurrentPage(1);
  }, [recipes]);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1); //se ejecuta cuando se hace clic en el botón "Anterior". Si la página actual es mayor que 1, se actualiza el estado currentPage restando 1.
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1); //se ejecuta cuando se hace clic en el botón "Siguiente". Si la página actual es menor que el número total de páginas (totalPages), se actualiza el estado currentPage sumando 1.
    }
  };

  const renderRecipes = () => {
    const startIndex = (currentPage - 1) * recipesPerPage;
    const endIndex = startIndex + recipesPerPage;
    const currentRecipes = recipes.slice(startIndex, endIndex);

    return currentRecipes.map((recipe) => (
      <Card
        id={recipe.id}
        key={recipe.name}
        name={recipe.name}
        image={recipe.image}
        alt={recipe.alt}
        diets={recipe.Diets}
        healthScore={recipe.healthScore}
      />
    ));
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={currentPage === i ? style.active : ""}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className={style.cards}>
      <div className={style.pagination}>
        <button disabled={currentPage === 1} onClick={handlePrevClick}>
          Previous
        </button>
        {renderPageNumbers()}
        <button disabled={currentPage === totalPages} onClick={handleNextClick}>
          Next
        </button>
      </div>
      <div>
        {" "}
        {!recipes.length && notRecipes && (
          <div className={style.containerNotFound}>
            {" "}
            <p>No results found! </p>🔍
          </div>
        )}{" "}
      </div>
      <div className={style.container}>{renderRecipes()}</div>
      <div className={style.pagination}>
        <button disabled={currentPage === 1} onClick={handlePrevClick}>
          Previous
        </button>
        {renderPageNumbers()}
        <button disabled={currentPage === totalPages} onClick={handleNextClick}>
          Next
        </button>
      </div>
      <div className={style.space}></div>
    </div>
  );
};

export default CardsRecipes;
