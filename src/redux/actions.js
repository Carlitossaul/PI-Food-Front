import axios from "axios";
import {
  GET_RECIPES,
  GET_RECIPES_BY_NAME,
  ORDER_ORIGIN,
  FILTER_DIETS,
  ORDER_ALPHABETIC,
} from "./types";

export const getRecipes = () => {
  return async function (dispatch) {
    try {
      const response = await axios(`http://localhost:3001/recipes`);
      dispatch({
        type: GET_RECIPES,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const getRecipesByName = (name) => {
  return async function (dispatch) {
    try {
      const response = await axios(
        `http://localhost:3001/recipes?name=${name}`
      );
      dispatch({
        type: GET_RECIPES_BY_NAME,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const orderAlphabetic = (order) => {
  return { type: ORDER_ALPHABETIC, payload: order };
};
export const orderOrigin = (order) => {
  return { type: ORDER_ORIGIN, payload: order };
};
