import React from "react";

export default function IngredientsList({ ingredientLines, yields }) {
  return (
    <div className="ingredients-container">
      <h2>Ingredients</h2>
      <h4>Yield: {yields}</h4>
      {/* <ul>map over ingredients</ul> */}

      <ul>
        {ingredientLines.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
