import {
  GET_RECIPES,
  GET_RECIPES_BY_NAME,
  ORDER_ALPHABETIC,
  ORDER_ORIGIN,
  FILTER_DIETS,
  GET_DETAIL,
  HEALTH_SCORE,
  GET_DIETS,
  SET_LOADING,
  RESET,
  NOT_RECIPES,
  THERE_WAS_CHANGE,
} from "./types";

const initialState = {
  recipes: [],
  recipesAll: [],
  diets: [],
  detail: {},
  isLoading: false,
  notRecipes: false,
  thereWasChange: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET:
      return {
        ...state,
        recipes: state.recipesAll,
      };
    case GET_DIETS:
      return {
        ...state,
        diets: action.payload,
      };
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
    case HEALTH_SCORE:
      let healthScore = action.payload;
      let healthRecipes = [...state.recipes];
      let isAscending = healthScore === "mas";
      let healthRecipesEnd = healthRecipes.sort((a, b) => {
        if (isAscending) {
          return b.healthScore - a.healthScore;
        } else {
          return a.healthScore - b.healthScore;
        }
      });
      return {
        ...state,
        recipes: healthRecipesEnd,
      };

    case ORDER_ORIGIN:
      return {
        ...state,
        recipes: action.payload,
      };
    case FILTER_DIETS:
      return {
        ...state,
        recipes: action.payload,
      };
    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case NOT_RECIPES:
      return {
        ...state,
        notRecipes: action.payload,
        recipes: [],
      };
    case THERE_WAS_CHANGE:
      return {
        ...state,
        thereWasChange: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
