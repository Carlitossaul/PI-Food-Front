import axios from "axios";
import {
  GET_RECIPES,
  GET_RECIPES_BY_NAME,
  ORDER_ORIGIN,
  FILTER_DIETS,
  ORDER_ALPHABETIC,
  GET_DETAIL,
  HEALTH_SCORE,
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
export const getDetail = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/recipes/${id}`);
      console.log(response.data);
      dispatch({
        type: GET_DETAIL,
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
export const getHealthScore = (order) => {
  return { type: HEALTH_SCORE, payload: order };
};

export const orderOrigin = (order) => {
  return { type: ORDER_ORIGIN, payload: order };
};

export const filterDiets = (diet) => {
  return { type: FILTER_DIETS, payload: diet };
};
