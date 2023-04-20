import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "../card/Card";
import style from "./CardsRecipes.module.css";

const CardsRecipes = () => {
  const recipes = useSelector((state) => state.recipes);
  const [currentPage, setCurrentPage] = useState(
    parseInt(localStorage.getItem("currentPage")) || 1
  );
  const itemsPerPage = 9;

  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  const paginate = (data, page, itemsPerPage) => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data.slice(start, end);
  };

  const currentRecipes = paginate(recipes, currentPage, itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(recipes.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={style.container}>
      <div className={style.pagination}>
        {pageNumbers.map((number) => (
          <button
            className={`${style.button} ${
              currentPage === number ? style.active : ""
            }`}
            key={number}
            onClick={() => handlePageChange(number)}
          >
            {number}
          </button>
        ))}
      </div>

      <div className={style.cards}>
        {currentRecipes.map((recipe) => (
          <Card
            id={recipe.id}
            key={recipe.name}
            name={recipe.name}
            image={recipe.image}
            alt={recipe.alt}
            diets={recipe.Diets}
            healthScore={recipe.healthScore}
          />
        ))}
      </div>
      <div className={style.pagination}>
        {pageNumbers.map((number) => (
          <button
            className={`${style.button} ${
              currentPage === number ? style.active : ""
            }`}
            key={number}
            onClick={() => handlePageChange(number)}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CardsRecipes;

// import React from "react";
// import { useSelector } from "react-redux";
// import Card from "../card/Card";
// import style from "./CardsRecipes.module.css";

// const CardsRecipes = () => {
//   const recipes = useSelector((state) => state.recipes);

//   return (
//     <div className={style.cards}>
//       {recipes.length &&
//         recipes
//           .slice(0, 9)
//           .map((recipe) => (
//             <Card
//               id={recipe.id}
//               key={recipe.name}
//               name={recipe.name}
//               image={recipe.image}
//               alt={recipe.alt}
//               diets={recipe.diets}
//             />
//           ))}
//     </div>
//   );
// };

// export default CardsRecipes;
