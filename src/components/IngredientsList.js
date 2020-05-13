import React from "react";

export default function IngredientsList({ ingredients }) {
  return (
    <div className="ingredients-container">
      <h2>Ingredients</h2>
      <h4>Yield: 4</h4>
      {/* <ul>map over ingredients</ul> */}
      <ul>
        <li>cook</li>
        <li>cook</li>
        <li>cook</li>
        <li>cook</li>
        <li>cook</li>
        <li>cook</li>
        <li>cook</li>
      </ul>
    </div>
  );
}
