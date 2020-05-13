import React from "react";
import RecipeCard from "./RecipeCard";

export default function RecipeContainer({ recipes }) {
  return (
    <div className="recipe-container">
      {recipes.map(({ id, title, img, ingredients, instructions }, i) => {
        return (
          <RecipeCard
            id={id}
            title={title}
            img={img}
            ingredients={ingredients}
            instructions={instructions}
          />
        );
      })}
    </div>
  );
}
