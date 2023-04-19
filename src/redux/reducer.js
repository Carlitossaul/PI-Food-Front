import {
  GET_RECIPES,
  GET_RECIPES_BY_NAME,
  ORDER_ALPHABETIC,
  ORDER_ORIGIN,
  FILTER_DIETS,
  GET_DETAIL,
  HEALTH_SCORE,
  GET_DIETS,
} from "./types";

const initialState = {
  recipes: [],
  recipesAll: [],
  diets: [],
  detail: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
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
      let allRecipes = [...state.recipesAll];
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
      let healthRecipes = [...state.recipesAll];
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
      let select = action.payload;
      let recipesAll = [...state.recipesAll];
      let orderedOrigin = recipesAll.filter((recipe) => {
        if (select === "Api") {
          return recipe.created === false;
        } else {
          return recipe.created === true;
        }
      });
      return {
        ...state,
        recipes: orderedOrigin,
      };
    case FILTER_DIETS:
      let diet = action.payload;
      let recipes = [...state.recipesAll];
      let filteredDiets = recipes.filter(
        (recipe) => recipe.diets && recipe.diets.includes(diet)
      );
      return {
        ...state,
        recipes: filteredDiets,
      };
    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
