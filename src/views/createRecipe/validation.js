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

  if (name.length < 0) errors.name = "The recipe must have a name!";
  if (summary.length < 0) errors.summary = "Here is a summary of the recipe.";
  if (readyInMinutes < 0)
    errors.servings = "Please indicate how many servings this recipe yields";
  if (readyInMinutes < 0)
    errors.readyInMinutes = "how long is the preparation time?";
  if (healthScore > 100 || healthScore < 0)
    errors.healthScore =
      "Indicate with a number from 1 to 100 how healthy this recipe is..";
  if (image.length < 0)
    errors.image = "Please add the url of the image of your recipe.";
  if (steps.length < 0)
    errors.steps = "What are the steps to prepare the recipe?";
  if (diets.length < 0)
    errors.diets =
      "What type of diet does this recipe belong to? it can be several...";

  return errors;
};

export default validation;
