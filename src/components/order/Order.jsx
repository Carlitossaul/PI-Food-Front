import React from "react";
import style from "./Order.module.css";
import { useDispatch } from "react-redux";
import { orderAlphabetic, orderOrigin } from "../../redux/actions";

const Order = () => {
  const dispatch = useDispatch();

  const handleOrderAbc = (event) => {
    dispatch(orderAlphabetic(event.target.value));
  };
  const handleOrderOrigin = (event) => {
    dispatch(orderOrigin(event.target.value));
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
    </div>
  );
};

export default Order;
