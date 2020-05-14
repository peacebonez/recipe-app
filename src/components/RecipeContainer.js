import React from "react";
import { useState } from "react";
import RecipeCard from "./RecipeCard";
import RecipePage from "./RecipePage";

export default function RecipeContainer({ recipes }) {
  let id = 0;

  console.log("Recipes in the container,", recipes[0]);
  return (
    <div className="recipe-container">
      {recipes
        ? recipes.map((recipeObj) => {
            id++;
            const {
              label,
              image,
              ingredientLines,
              healthLabels,
              yields,
              url,
            } = recipeObj.recipe;
            recipeObj.recipe.id = id;
            return (
              <div className="card-page-container" key={recipeObj.recipe.id}>
                <RecipeCard
                  id={recipeObj.recipe.id}
                  label={label}
                  image={image}
                  url={url}
                  ingredientLines={ingredientLines}
                  healthLabels={healthLabels}
                  yields={yields}
                />
              </div>
            );
          })
        : null}
    </div>
  );
}
