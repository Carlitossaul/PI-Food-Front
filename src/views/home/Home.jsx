import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { getRecipes } from "../../redux/actions";
import style from "./Home.module.css";
import SearchBar from "../../components/searchBar/SearchBar";
import Order from "../../components/order/Order";
import { Link } from "react-router-dom";
import Diets from "../../components/diets/Diets";
import CardsRecipes from "../../components/cardRecipes/CardsRecipes";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <div className={style.header}>
        <SearchBar />
        <div className={style.conteinerOrderCreate}>
          <Order />
          <Link to={"createrecipe"}>
            <button>Create Recipe</button>
          </Link>
        </div>
      </div>
      <div className={style.conteinerDiets}>
        <Diets />
      </div>
      <CardsRecipes />
    </div>
  );
};

export default Home;
