import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import Axios from "axios";

const APP_ID = "aaa6d635";
const APP_KEY = "d7935c71fa4deed8f5f442f7f910a12c";
const rawUrl =
  "https://api.edamam.com/search?q=chicken&app_id=aaa6d635&app_key=d7935c71fa4deed8f5f442f7f910a12c";

export default function Heading() {
  const [query, setQuery] = useState("");
  const [recipeArr, setRecipeArr] = useState([]);
  let url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    console.log("GET DATA INITIATED");
    const result = await Axios.get(url);
    console.log("result:", result);
    console.log(result.data.hits[0].recipe.label);
    setRecipeArr(result.data.hits);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSubmit = () => {
    getData();
    setQuery("");
  };

  console.log("query:", query);
  console.log("recipeArr,", recipeArr);
  return (
    <div className="header-wrapper">
      <h1 className="title">Food Finder</h1>
      <input
        type="text"
        className="search-bar"
        name="search"
        value={query}
        placeholder="Search for Recipe..."
        onChange={handleChange}
      ></input>
      <button className="submit-btn" onClick={handleSubmit}>
        Submit
      </button>
      <button className="fave-btn">
        <FaStar className="star" />
        <p>Favorites</p>
        <FaStar className="star" />
      </button>
    </div>
  );
}
