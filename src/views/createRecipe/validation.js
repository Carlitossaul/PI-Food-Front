const validation = ({
  name,
  servings,
  readyInMinutes,
  healthScore,
  image,
  summary,
  steps,
  diets,
}) => {
  const errors = {};

  if (!name) errors.name = "The recipe must have a name!";
  if (!summary) errors.summary = "Here is a summary of the recipe.";
  if (!servings)
    errors.servings = "Please indicate how many servings this recipe yields";
  if (!readyInMinutes)
    errors.readyInMinutes = "how long is the preparation time?";
  if (healthScore > 100 || healthScore <= 0)
    errors.healthScore =
      "Indicate with a number from 1 to 100 how healthy this recipe is..";
  if (!image) errors.image = "Please add the url of the image of your recipe.";
  if (!steps) errors.steps = "What are the steps to prepare the recipe?";
  if (!diets)
    errors.diets =
      "What type of diet does this recipe belong to? it can be several...";

  return errors;
};

export default validation;
