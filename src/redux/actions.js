import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPES_BY_NAME = "GET_RECIPES_BY_NAME";

export const getRecipes = () => {
  return async function (dispatch) {
    try {
      const response = await axios(`http://localhost:3001/recipes`);
      console.log(response.data);
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
      console.log(response.data);
      dispatch({
        type: GET_RECIPES_BY_NAME,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
