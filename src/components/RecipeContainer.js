import React from "react";
import RecipeCard from "./RecipeCard";

export default function RecipeContainer({ recipes, handleFave, removeFave }) {
  let id = 0;

  //   console.log("Recipes in the container,", recipes[0]);
  return (
    <div className="recipe-container">
      {recipes
        ? recipes.map((recipeObj) => {
            id++; //creates a unique id
            const {
              recipe: {
                label,
                image,
                ingredientLines,
                healthLabels,
                yield: servings,
                url,
              },
            } = recipeObj;
            recipeObj.id = id;
            return (
              <div className="card-page-container" key={recipeObj.id}>
                <RecipeCard
                  id={recipeObj.id}
                  label={label}
                  image={image}
                  url={url}
                  ingredientLines={ingredientLines}
                  healthLabels={healthLabels}
                  servings={servings}
                  handleFave={handleFave}
                  removeFave={removeFave}
                />
              </div>
            );
          })
        : null}
    </div>
  );
}
