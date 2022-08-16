import React from "react";

// Create at least one additional component that is used by the RecipeList component.
function RecipeView({recipe, RecipeDelete}) {
  return (
        <tr className="row">
          <td>{recipe.name}</td>
          <td>{recipe.cuisine}</td>
          <td className="photoFit">
            <img src={recipe.photo} alt="" className="photoFit"/>
          </td>
          <td className="content_td"><p>{(recipe.ingredients)}</p></td>
          <td className="content_td"><p>{(recipe.preparation)}</p></td>
          <td>
            <button name="delete" onClick={RecipeDelete}>Delete</button>
          </td>
        </tr>
  )
}

function RecipeList({recipes, RecipeDelete}) {
  // User can delete a recipe.
  const rows = recipes.map((recipe, index) => (
    <RecipeView
      key={index}
      recipe={recipe}
      RecipeDelete={() => RecipeDelete(index)}/>
  )) 

  // User can read the list of recipes.
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr className="tableHeader">
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="tableRows">
          {rows}
        </tbody>
      </table>
    </div>
  );
}


export default RecipeList;