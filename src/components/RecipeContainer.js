import React from "react";
import { useState } from "react";
import RecipeCard from "./RecipeCard";
import RecipePage from "./RecipePage";

export default function RecipeContainer({ recipes }) {
  let id = 0;
  const [isShown, setIsShown] = useState(false);
  const handleOpen = (id) => {
    console.log("id", id);
    // return "btn-" + id === e.target.name ? setIsShown(true) : null;
    // setIsShown(true);
  };

  const handleClose = (id) => {
    console.log("target name", id);
    // return "btn-" + id === e.target.name ? setIsShown(false) : null;
    //   setIsShown(false);
  };

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
                  handleOpen={handleOpen}
                />
                <RecipePage
                  id={recipeObj.recipe.id}
                  label={label}
                  image={image}
                  ingredientLines={ingredientLines}
                  healthLabels={healthLabels}
                  yields={yields}
                  isShown={isShown}
                  setIsShown={setIsShown}
                  handleClose={handleClose}
                />
              </div>
            );
          })
        : null}
    </div>
  );
}
