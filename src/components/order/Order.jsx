import React from "react";
import style from "./Order.module.css";
import { useDispatch } from "react-redux";
import {
  orderAlphabetic,
  orderOrigin,
  getHealthScore,
} from "../../redux/actions";

const Order = () => {
  const dispatch = useDispatch();

  const handleOrderAbc = (event) => {
    dispatch(orderAlphabetic(event.target.value));
  };
  const handleOrderOrigin = (event) => {
    dispatch(orderOrigin(event.target.value));
  };
  const handleHealthScore = (event) => {
    dispatch(getHealthScore(event.target.value));
  };

  return (
    <div className={style.order}>
      <label htmlFor="order-abc">Order By:</label>
      <select onChange={handleOrderAbc} className={style.select} id="order-abc">
        <option>Select</option>
        <option value="Ascendente">A-Z</option>
        <option value="Descendente">Z-A</option>
      </select>
      <label htmlFor="order-origin"> Select Origin:</label>
      <select
        onChange={handleOrderOrigin}
        className={style.select}
        id="order-origin"
      >
        <option>Select</option>
        <option value="Api">From Api</option>
        <option value="Local">From Local</option>
      </select>
      <label htmlFor="health-score"> For Health Score:</label>
      <select
        onChange={handleHealthScore}
        className={style.select}
        id="health-score"
      >
        <option>Select</option>
        <option value="mas">Health Score + </option>
        <option value="menos">Health Score - </option>
      </select>
    </div>
  );
};

export default Order;
