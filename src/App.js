import React from "react";
import { useState } from "react";
import "./App.css";
import Axios from "axios";
import Heading from "./components/Heading";
import RecipeContainer from "./components/RecipeContainer";
import FavesContainer from "./components/FavesContainer";
import Loading from "./Loading";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

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

function App() {
  //recipe array
  const [recipes, setRecipes] = useState([]);

  const [faves, setFaves] = useState([]);
  //user search input
  const [query, setQuery] = useState("");

  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  //use this URL, gives 100 options
  // let url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=100`;

  // url for testing purposes
  let url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=12`;

  //retrieves data from the API
  const getData = async () => {
    setIsLoading(true);
    setIsError(false);
    const result = await Axios.get(url);
    console.log("result.data.hits", result.data.hits);
    //if user search is not found
    if (result.data.hits.length === 0) {
      setIsLoading(false);
      console.log("No results!");
      setIsError(true);
      return;
    }
    console.log("result:", result);
    setIsLoading(false);
    setIsError(false);
    //set the recipes as our result
    setRecipes([...result.data.hits]);
  };

  // sets the favorite recipes array
  const handleFave = (obj) => {
    console.log("Handle Faves obj,", obj);
    setFaves([...faves, obj]);
  };

  // sets the favorite recipes array
  const removeFave = (id) => {
    setFaves(faves.filter((fave) => fave.id !== id));
  };

  //handles changes in user input
  const handleChange = (e) => {
    setIsError(false);
    setQuery(e.target.value);
  };

  // handles submission of user query
  const handleSubmit = (e) => {
    getData();
    //sets input bar back to empty
    setQuery("");
  };

  console.log("recipes,", recipes);
  console.log("faves", faves);
  return (
    <Router>
      <div className="App">
        <Heading
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          query={query}
          recipes={recipes}
          isError={isError}
        />
        <React.Suspense fallback={<Loading text="Finding Recipes" />}>
          <Switch>
            {isLoading ? (
              <Loading text="Finding Recipes" />
            ) : (
              <>
                <RecipeContainer
                  recipes={recipes}
                  handleFave={handleFave}
                  removeFave={removeFave}
                />
                <FavesContainer recipes={faves} removeFave={removeFave} />
              </>
            )}
          </Switch>
        </React.Suspense>
      </div>
    </Router>
  );
}

{
  /* <Route exact path="/" component={Popular} />
<Route exact path="/battle" component={Battle} />
<Route path="/battle/results" component={Results} />
<Route render={() => <h1>404</h1>} /> */
}

export default App;

const testFunc = (e, word) => {
  console.log(word);
  console.log(e.target);
};
