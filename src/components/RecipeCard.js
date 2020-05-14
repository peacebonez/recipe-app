import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import RecipePage from "./RecipePage";

export default function RecipeCard({
  id,
  url,
  label,
  image,
  ingredientLines,
  healthLabels,
  yields,
}) {
  console.log("Recipe ID", id);
  const [isShown, setIsShown] = useState(false);

  const handleOpen = (id) => {
    setIsShown((s) => !s);
  };

  const handleClose = (id) => {
    console.log("target name", id);
    setIsShown(false);
  };

  return (
    <>
      <div className="recipe-card">
        <div className="card-img-wrapper">
          <img className="card-img" src={image} alt="recipe" />
        </div>
        <div className="recipe-title-wrapper">
          <h4 className="recipe-title">{label}</h4>
        </div>
        <div className="card-footer">
          <button className="card-fave-btn">
            <FaStar className="card-star" />
          </button>
          <button
            className="recipe-btn"
            name={"btn-" + id}
            onClick={handleOpen}
          >
            Open Recipe
          </button>
        </div>
      </div>
      <RecipePage
        id={id}
        url={url}
        label={label}
        image={image}
        ingredientLines={ingredientLines}
        healthLabels={healthLabels}
        yields={yields}
        isShown={isShown}
        handleClose={handleClose}
      />
    </>
  );
}
