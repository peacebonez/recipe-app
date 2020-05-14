import React from "react";
import { FaStar } from "react-icons/fa";

export default function RecipeCard({ id, url, label, image, handleOpen }) {
  console.log("Recipe ID", id);

  return (
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
          onClick={() => handleOpen(id)}
        >
          Open Recipe
        </button>
      </div>
    </div>
  );
}
