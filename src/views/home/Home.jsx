import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import {
  getRecipes,
  getDiets,
  setLoading,
  thereWasChange,
} from "../../redux/actions";
import style from "./Home.module.css";
import SearchBar from "../../components/searchBar/SearchBar";
import Order from "../../components/order/Order";
import Diets from "../../components/diets/Diets";
import CardsRecipes from "../../components/cardsRecipes/CardsRecipes";

const Home = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const diets = useSelector((state) => state.diets);
  const isLoading = useSelector((state) => state.isLoading);
  const Change = useSelector((state) => state.thereWasChange);

  useEffect(() => {
    if (!recipes.length || Change) {
      dispatch(setLoading(true));
      dispatch(getRecipes());
      setTimeout(() => {
        dispatch(setLoading(false));
      }, 2000);
    }
    if (!diets.length) {
      dispatch(getDiets());
    }
  }, []);

  setTimeout(() => {
    dispatch(thereWasChange(false));
  }, 3500);

  return (
    <>
      <div className={style.container}>
        {isLoading ? (
          <div className={style.loadingContainer}>
            <h1 className={style.loading}>Loading</h1>
          </div>
        ) : (
          <>
            <div className={style.header}>
              <SearchBar />
              <Order />
            </div>
            <div className={style.conteinerDiets}>
              <Diets />
            </div>
            <CardsRecipes />
          </>
        )}
      </div>
    </>
  );
};

export default Home;
