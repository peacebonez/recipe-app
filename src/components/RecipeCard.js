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
  handleFave,
  isFave,
}) {
  //   console.log("arguments", arguments);
  //   console.log("Recipe ID", id);
  const [isShown, setIsShown] = useState(false);
  //   const [isFave, setIsFave] = useState(false);

  const handleOpen = () => {
    setIsShown(true);
  };

  const handleClose = (id) => {
    setIsShown(false);
  };

  return (
    <>
      <div className="recipe-card">
        <div className="card-img-wrapper">
          <img
            className="card-img"
            src={image}
            alt="recipe"
            onClick={handleOpen}
          />
        </div>
        <div className="recipe-title-wrapper">
          <h4 className="recipe-title">{label}</h4>
        </div>
        <div className="card-footer">
          <button
            className="card-fave-btn"
            style={{ color: isFave ? "gold" : "black" }}
            onClick={(e) => handleFave(e, arguments[0])}
          >
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
        {isShown ? (
          <RecipePage
            id={id}
            url={url}
            label={label}
            image={image}
            ingredientLines={ingredientLines}
            healthLabels={healthLabels}
            yields={yields}
            isShown={isShown}
            setIsShown={setIsShown}
            handleClose={handleClose}
          />
        ) : null}
      </div>
    </>
  );
}
