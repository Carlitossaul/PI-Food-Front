import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { getRecipes, getDiets } from "../../redux/actions";
import style from "./Home.module.css";
import SearchBar from "../../components/searchBar/SearchBar";
import Order from "../../components/order/Order";
import Diets from "../../components/diets/Diets";
import CardsRecipes from "../../components/cardsRecipes/CardsRecipes";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
    dispatch(getDiets());
  }, []);

  return (
    <div className={style.container}>
      <div className={style.header}>
        <SearchBar />
        <Order />
      </div>
      <div className={style.conteinerDiets}>
        <Diets />
      </div>
      <CardsRecipes />
    </div>
  );
};

export default Home;
