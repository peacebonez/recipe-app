import React from "react";
import { useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import RecipeContainer from "./components/RecipeContainer";
import RecipePage from "./components/RecipePage";

let id = 0;

const idGen = () => {
  return id++;
};

const initRecipes = {
  id: idGen(),
  title: "Shakshuka",
  img:
    "https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg",
  ingredients: "",
  instructions: "",
};

function App() {
  const [recipes, setRecipes] = useState([initRecipes]);
  // const [query, setQuery] = useState("");
  return (
    <div className="App">
      <Heading />
      <RecipeContainer recipes={recipes}></RecipeContainer>
      <RecipePage />
    </div>
  );
}

export default App;
