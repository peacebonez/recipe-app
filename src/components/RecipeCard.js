import React from "react";
import { FaStar, FaTrashAlt } from "react-icons/fa";

const url =
  "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg";

const url2 =
  "https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg";

const url3 =
  "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg";

export default function RecipeCard({ title, img, instructions, ingredients }) {
  return (
    <div className="recipe-card">
      <div className="card-img-wrapper">
        <img className="card-img" src={img} alt="recipe" />
      </div>
      <div className="recipe-title-wrapper">
        <h4 className="recipe-title">{title}</h4>
      </div>
      <div className="card-footer">
        <button className="card-fave-btn">
          <FaStar className="card-star" />
        </button>
        <button className="recipe-btn">Open Recipe</button>
      </div>
    </div>
  );
}
