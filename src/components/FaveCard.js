import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import RecipePage from "./RecipePage";

export default function FaveCard({
  id,
  url,
  label,
  image,
  ingredientLines,
  healthLabels,
  yields,
  removeFave,
}) {
  const [isShown, setIsShown] = useState(false);

  const handleOpen = () => {
    setIsShown(true);
  };

  const handleClose = () => {
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
            style={{ color: "gold" }}
            onClick={() => {
              removeFave(id);
            }}
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
        yields={yields}
        isShown={isShown}
        setIsShown={setIsShown}
        handleClose={handleClose}
      />
    </>
  );
}
