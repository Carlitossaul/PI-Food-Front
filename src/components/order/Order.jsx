import React from "react";
import style from "./Order.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  orderAlphabetic,
  orderOrigin,
  getHealthScore,
  reset,
} from "../../redux/actions";

const Order = () => {
  const dispatch = useDispatch();
  const recipesAll = useSelector((state) => state.recipesAll);

  const handleOrderAbc = (event) => {
    dispatch(orderAlphabetic(event.target.value));
  };
  const handleOrderOrigin = (event) => {
    const result = recipesAll.filter((recipes) => {
      if (event.target.value === "Api") {
        return recipes.created === false;
      } else {
        return recipes.created === true;
      }
    });
    dispatch(orderOrigin(result));
  };
  const handleHealthScore = (event) => {
    dispatch(getHealthScore(event.target.value));
  };

  return (
    <div className={style.order}>
      <div className={style.selectColumn}>
        <label htmlFor="order-abc" className={style.label}>
          Order By:
        </label>
        <select
          onChange={handleOrderAbc}
          className={style.select}
          id="order-abc"
        >
          <option>Select</option>
          <option value="Ascendente" className={style.option}>
            A-Z
          </option>
          <option value="Descendente" className={style.option}>
            Z-A
          </option>
        </select>
      </div>
      <div className={style.selectColumn}>
        <label htmlFor="order-origin" className={style.label}>
          {" "}
          Select Origin:
        </label>
        <select
          onChange={handleOrderOrigin}
          className={style.select}
          id="order-origin"
        >
          <option>Select</option>
          <option value="Api" className={style.option}>
            From Api
          </option>
          <option value="Local" className={style.option}>
            From Local
          </option>
        </select>
      </div>
      <div className={style.selectColumn}>
        <label htmlFor="health-score" className={style.label}>
          {" "}
          Health Score:
        </label>
        <select
          onChange={handleHealthScore}
          className={style.select}
          id="health-score"
        >
          <option>Select</option>
          <option value="mas" className={style.option}>
            Health Score +{" "}
          </option>
          <option value="menos" className={style.option}>
            Health Score -{" "}
          </option>
        </select>
      </div>
      <div className={style.selectColumn}>
        <button className={style.button} onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Order;
// import React from "react";
// import style from "./Order.module.css";
// import { useDispatch } from "react-redux";
// import {
//   orderAlphabetic,
//   orderOrigin,
//   getHealthScore,
//   reset,
// } from "../../redux/actions";

// const Order = () => {
//   const dispatch = useDispatch();

//   const handleOrderAbc = (event) => {
//     dispatch(orderAlphabetic(event.target.value));
//   };
//   const handleOrderOrigin = (event) => {
//     dispatch(orderOrigin(event.target.value));
//   };
//   const handleHealthScore = (event) => {
//     dispatch(getHealthScore(event.target.value));
//   };

//   return (
//     <div className={style.order}>
//       <div className={style.selectColumn}>
//         <label htmlFor="order-abc" className={style.label}>
//           Order By:
//         </label>
//         <select
//           onChange={handleOrderAbc}
//           className={style.select}
//           id="order-abc"
//         >
//           <option>Select</option>
//           <option value="Ascendente" className={style.option}>
//             A-Z
//           </option>
//           <option value="Descendente" className={style.option}>
//             Z-A
//           </option>
//         </select>
//       </div>
//       <div className={style.selectColumn}>
//         <label htmlFor="order-origin" className={style.label}>
//           {" "}
//           Select Origin:
//         </label>
//         <select
//           onChange={handleOrderOrigin}
//           className={style.select}
//           id="order-origin"
//         >
//           <option>Select</option>
//           <option value="Api" className={style.option}>
//             From Api
//           </option>
//           <option value="Local" className={style.option}>
//             From Local
//           </option>
//         </select>
//       </div>
//       <div className={style.selectColumn}>
//         <label htmlFor="health-score" className={style.label}>
//           {" "}
//           Health Score:
//         </label>
//         <select
//           onChange={handleHealthScore}
//           className={style.select}
//           id="health-score"
//         >
//           <option>Select</option>
//           <option value="mas" className={style.option}>
//             Health Score +{" "}
//           </option>
//           <option value="menos" className={style.option}>
//             Health Score -{" "}
//           </option>
//         </select>
//       </div>
//       <div className={style.selectColumn}>
//         <button className={style.button} onClick={() => dispatch(reset())}>
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Order;
