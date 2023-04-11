import {
  GET_RECIPES,
  GET_RECIPES_BY_NAME,
  ORDER_ALPHABETIC,
  ORDER_ORIGIN,
} from "./types";

const initialState = {
  recipes: [],
  recipesAll: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        recipesAll: action.payload,
      };
    case GET_RECIPES_BY_NAME:
      return {
        ...state,
        recipes: action.payload,
        recipesAll: action.payload,
      };
    case ORDER_ALPHABETIC:
      let order = action.payload;
      let allRecipes = [...state.recipes];
      let ordered = allRecipes.sort((a, b) => {
        if (order === "Ascendente") {
          return a.name && b.name ? a.name.localeCompare(b.name) : 0;
        } else {
          return b.name && a.name ? b.name.localeCompare(a.name) : 0;
        }
      });
      return {
        ...state,
        recipes: ordered,
      };
    case ORDER_ORIGIN:
      let select = action.payload;
      let recipesAll = [...state.recipesAll];
      let orderedOrigin = recipesAll.filter((recipe) => {
        if (select === "Api") {
          return recipe.created === false;
        } else {
          return recipe.created === true;
        }
      });
      console.log(orderedOrigin);
      console.log(select);
      return {
        ...state,
        recipes: orderedOrigin,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
