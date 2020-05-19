import React from "react";
import FaveCard from "./FaveCard";

export default function FavesContainer({ recipes, removeFave, handleFave }) {
  //   console.log("Recipes in the container,", recipes[0]);
  return (
    <div className="recipe-container">
      {recipes
        ? recipes.map((recipeObj) => {
            return (
              <div className="card-page-container" key={recipeObj.id}>
                <FaveCard
                  id={recipeObj.id}
                  recipeObj={recipeObj}
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
