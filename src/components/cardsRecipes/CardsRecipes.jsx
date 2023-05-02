import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../card/Card";
import style from "./CardsRecipes.module.css";

const CardsRecipes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const recipes = useSelector((state) => state.recipes);

  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 9;
  const totalPages = Math.ceil(recipes.length / recipesPerPage); //Se calcula el número total de páginas necesarias (totalPages) para mostrar todas las recetas, teniendo en cuenta la cantidad de recetas por página.

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
        {!recipes.length ? (
          <h1> No matches found for your search, try searching in english. </h1>
        ) : (
          renderPageNumbers()
        )}
        <button disabled={currentPage === totalPages} onClick={handleNextClick}>
          Next
        </button>
      </div>
      <div className={style.container}>{renderRecipes()}</div>
      <div className={style.space}></div>
    </div>
  );
};

export default CardsRecipes;
// const recipes = useSelector((state) => state.recipes);
// const [currentPage, setCurrentPage] = useState(
//   parseInt(localStorage.getItem("currentPage")) || 1
// );
// const itemsPerPage = 9;

// useEffect(() => {
//   localStorage.setItem("currentPage", currentPage);
// }, [currentPage]);

// const paginate = (data, page, itemsPerPage) => {
//   const start = (page - 1) * itemsPerPage;
//   const end = start + itemsPerPage;
//   return data.slice(start, end);
// };

// const currentRecipes = paginate(recipes, currentPage, itemsPerPage);

// const handlePageChange = (pageNumber) => {
//   setCurrentPage(pageNumber);
// };

// const pageNumbers = [];
// for (let i = 1; i <= Math.ceil(recipes.length / itemsPerPage); i++) {
//   pageNumbers.push(i);
// }

// return (
//   <div className={style.container}>
//     <div className={style.pagination}>
//       {pageNumbers.map((number) => (
//         <button
//           className={`${style.button} ${
//             currentPage === number ? style.active : ""
//           }`}
//           key={number}
//           onClick={() => handlePageChange(number)}
//         >
//           {number}
//         </button>
//       ))}
//     </div>

//     <div className={style.cards}>
//       {currentRecipes.map((recipe) => (
//         <Card
//           id={recipe.id}
//           key={recipe.name}
//           name={recipe.name}
//           image={recipe.image}
//           alt={recipe.alt}
//           diets={recipe.Diets}
//           healthScore={recipe.healthScore}
//         />
//       ))}
//     </div>
//     <div className={style.pagination}>
//       {pageNumbers.map((number) => (
//         <button
//           className={`${style.button} ${
//             currentPage === number ? style.active : ""
//           }`}
//           key={number}
//           onClick={() => handlePageChange(number)}
//         >
//           {number}
//         </button>
//       ))}
//     </div>
//   </div>
// );
