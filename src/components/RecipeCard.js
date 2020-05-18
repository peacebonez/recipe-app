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
  servings,
  handleFave,
  removeFave,
}) {
  const [isShown, setIsShown] = useState(false);
  const [isFave, setIsFave] = useState(false);

  const handleOpen = () => {
    setIsShown(true);
  };

  const handleClose = () => {
    setIsShown(false);
  };

  const setStar = () => {
    if (isFave) {
      removeFave(id);
      setIsFave(false);
    } else {
      handleFave(arguments[0]);
      setIsFave(true);
    }
  };

  const snipTitle = (title) =>
    title.length < 21 ? title : title.substring(0, 21) + "...";

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
          <h4 className="recipe-title">{snipTitle(label)}</h4>
        </div>
        <div className="card-footer">
          <button
            className="card-fave-btn"
            style={{ color: isFave ? "gold" : "black" }}
            onClick={setStar}
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
      </div>
      <RecipePage
        id={id}
        url={url}
        label={label}
        image={image}
        ingredientLines={ingredientLines}
        healthLabels={healthLabels}
        servings={servings}
        isShown={isShown}
        setIsShown={setIsShown}
        handleClose={handleClose}
      />
    </>
  );
}
