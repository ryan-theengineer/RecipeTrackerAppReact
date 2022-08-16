import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  const RecipeDelete = (indexToDelete) => {
    const filteredList = recipes.filter(
      (recipe,index) => index !== indexToDelete
    )
    setRecipes(filteredList)
  }
  
  /* App will display a recipe's name, cuisine, photo, ingredients, preparation instructions and action buttons (edit and delete).
  */
  return (
    // Uses multiple components that play well together
    // Recipe data is contained in the state.
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} RecipeDelete={RecipeDelete}/>
      <RecipeCreate recipes={recipes} setRecipes={setRecipes}/>
    </div>
  );
}
export default App;