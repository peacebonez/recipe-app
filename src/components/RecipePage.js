import React from "react";
import { FaBeer, FaTimes } from "react-icons/fa";
import IngredientsList from "./IngredientsList";
import Instructions from "./Instructions";

export default function RecipePage({ title, img, instructions, ingredients }) {
  return (
    <div className="popup-container">
      <div className="popup-header-container">
        <h1>Shakshuka{title}</h1>
        <h4>Healthy, Vegetarian, Quick</h4>
        <button>
          <FaTimes />
        </button>
      </div>
      <div className="popup-img-text-container">
        <IngredientsList ingredients={ingredients} />
        <div className="popup-img-container">
          <img src={img} alt="recipe" />
        </div>
      </div>
    </div>
  );
}
