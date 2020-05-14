import React from "react";
import { useState } from "react";
import RecipeCard from "./RecipeCard";

export default function FavesContainer({ recipes, handleFave, isFave }) {
  //   console.log("Recipes in the container,", recipes[0]);
  return (
    <div className="recipe-container">
      {recipes
        ? recipes.map((recipeObj) => {
            const {
              label,
              image,
              ingredientLines,
              healthLabels,
              yields,
              url,
            } = recipeObj;
            return (
              <div className="card-page-container" key={recipeObj.id}>
                <RecipeCard
                  id={recipeObj.id}
                  label={label}
                  image={image}
                  url={url}
                  ingredientLines={ingredientLines}
                  healthLabels={healthLabels}
                  yields={yields}
                  handleFave={handleFave}
                  isFave={isFave}
                />
              </div>
            );
          })
        : null}
    </div>
  );
}
