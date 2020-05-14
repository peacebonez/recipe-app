import React from "react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import IngredientsList from "./IngredientsList";

export default function RecipePage({
  id,
  label,
  image,
  ingredientLines,
  healthLabels,
  yields,
  isShown,
  handleClose,
}) {
  healthLabels = healthLabels.join();
  return (
    <div
      className="popup-container"
      style={{ display: isShown ? "block" : "none" }}
    >
      <div className="popup-header-container">
        <h1>{label}</h1>
        <h4>{healthLabels}</h4>
        <button onClick={() => handleClose(id)} name={"btn-" + id}>
          <FaTimes name={"btn-" + id} />
        </button>
      </div>
      <div className="popup-img-text-container">
        <IngredientsList ingredientLines={ingredientLines} yields={yields} />
        <div className="popup-img-container">
          <img src={image} alt="recipe" />
        </div>
      </div>
    </div>
  );
}
