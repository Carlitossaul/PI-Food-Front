import React from "react";
import style from "./Order.module.css";
import { useDispatch } from "react-redux";
// import { orderCards } from "../../redux/actions";

const Order = () => {
  const dispatch = useDispatch();

  // const handleOrder = (event) => {
  //   dispatch(orderCards(event.target.value));
  // };
  // onChange={handleOrder}
  return (
    <div className={style.order}>
      <label htmlFor="order-abc">Order By:</label>
      <select className={style.select} id="order-abc">
        <option value="Ascendente">A-Z</option>
        <option value="Descendente">Z-A</option>
      </select>
      <label htmlFor="order-origin"> By Origin:</label>
      <select className={style.select} id="order-origin">
        <option value="Api">From Api</option>
        <option value="Local">From Local</option>
      </select>
    </div>
  );
};

export default Order;
