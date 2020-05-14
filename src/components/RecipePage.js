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
  setIsShown,
  handleClose,
}) {
  const popupRef = React.useRef();
  React.useEffect(() => {
    window.onclick = function (e) {
      //   console.log("target", e.target);
      //   console.log("pop up ref", popupRef.current);
      //   console.log("is Shown?", isShown);
      if (popupRef.current.contains(e.target)) {
        setIsShown(true);
      }
      setIsShown(false);
    };
  });

  healthLabels = healthLabels.join();
  return (
    <div
      className="popup-container"
      style={{ display: isShown ? "block" : "none" }}
      ref={popupRef}
    >
      <div className="popup-header-container">
        <div className="x-container">
          <button onClick={handleClose} name={"btn-" + id}>
            <FaTimes name={"btn-" + id} />
          </button>
        </div>
        <h1>{label}</h1>
        <h4>{healthLabels}</h4>
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
