import React from "react";
import { useState } from "react";
import "./App.css";
import Axios from "axios";
import Heading from "./components/Heading";
import RecipeContainer from "./components/RecipeContainer";
import RecipePage from "./components/RecipePage";

// let id = 0;

// const idGen = () => {
//   return id++;
// };

// const initRecipes = {
//   id: idGen(),
//   label: "Shakshuka",
//   image:
//     "https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg",
//   ingredientLines: "",
//   healthLabels: "Healthy, Fatty, Quick",
//   yields: 4,
// };

const APP_ID = "aaa6d635";
const APP_KEY = "d7935c71fa4deed8f5f442f7f910a12c";
const rawUrl =
  "https://api.edamam.com/search?q=chicken&app_id=aaa6d635&app_key=d7935c71fa4deed8f5f442f7f910a12c";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  let url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    const result = await Axios.get(url);
    console.log("result:", result);
    setRecipes([...result.data.hits]);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSubmit = () => {
    getData();
    setQuery("");
  };

  console.log("recipes,", recipes);
  return (
    <div className="App">
      <Heading
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        query={query}
        recipes={recipes}
      />
      <RecipeContainer recipes={recipes} />
    </div>
  );
}

export default App;
