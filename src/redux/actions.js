import axios from "axios";
import {
  GET_RECIPES,
  GET_RECIPES_BY_NAME,
  ORDER_ORIGIN,
  FILTER_DIETS,
  ORDER_ALPHABETIC,
  GET_DETAIL,
  HEALTH_SCORE,
  GET_DIETS,
  SET_LOADING,
} from "./types";

export const getDiets = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/diets`);

      dispatch({
        type: GET_DIETS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const getRecipes = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/recipes`);

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
      const response = await axios.get(`/recipes?name=${name}`);
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
      const response = await axios.get(`/recipes/${id}`);

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

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  payload: isLoading,
});
