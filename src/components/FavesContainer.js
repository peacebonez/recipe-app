import React from "react";
import { useState } from "react";
import FaveCard from "./FaveCard";

export default function FavesContainer({ recipes, removeFave }) {
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
              yield: servings,
              url,
            } = recipeObj;
            return (
              <div className="card-page-container" key={recipeObj.id}>
                <FaveCard
                  id={recipeObj.id}
                  label={label}
                  image={image}
                  url={url}
                  ingredientLines={ingredientLines}
                  healthLabels={healthLabels}
                  servings={servings}
                  removeFave={removeFave}
                />
              </div>
            );
          })
        : null}
    </div>
  );
}
