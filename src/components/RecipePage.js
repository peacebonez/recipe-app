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
  servings,
  url,
  isShown,
  setIsShown,
  handleClose,
}) {
  const popupRef = React.useRef();
  React.useEffect(() => {
    window.onclick = function (e) {
      //   console.log("target", e.target);
      //   console.log("pop up ref in Effect", popupRef.current);
      //   console.log("is Shown?", isShown);
      if (popupRef.current.contains(e.target)) {
        setIsShown(true);
      } else {
        setIsShown(false);
      }
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
        <IngredientsList
          ingredientLines={ingredientLines}
          servings={servings}
        />
        <div className="popup-img-container">
          <img src={image} alt="recipe" />
        </div>
      </div>
      <div className="popup-link-container">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <button className="url-btn">Open URL</button>
        </a>
      </div>
    </div>
  );
}
