import React, { useState } from "react";
function RecipeCreate({recipes, setRecipes}) {

  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }
  
  // Add handlers and other attributes to the starter code as needed.
  const [form,setForm] = useState({...initialFormState})
  const handleChange = ({target}) => {
    setForm({...form,
      [target.name]: target.value})
  }
  // Minimal code duplication

  const handleSubmit = (event) => {
    event.preventDefault()
    setRecipes([...recipes, form])
    setForm({...initialFormState})
  }

  // User can create a recipe entry.
  
  return (
    /* Each recipe should display the name, cuisine, photo, ingredients, 
    preparation and a delete button */
    
    // app will need to have a form with input fields
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr className="row">
            <td>
              <label htmlFor="name"></label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                required={true}
                onChange={handleChange}
                value={form.name}
              />
            </td>
            <td>
              <label htmlFor="cuisine"></label>
              <input
                id="cuisine"
                name="cuisine"
                type="text"
                placeholder="Cuisine"
                required={true}
                onChange={handleChange}
                value={form.cuisine}
              />
            </td>
            <td>
              <label htmlFor="photo"></label>
              <input
                id="photo"
                name="photo"
                type="url"
                placeholder="URL"
                required={true}
                onChange={handleChange}
                value={form.photo}
              />
            </td>
            <td>
              <label htmlFor="ingredients"></label>
              <textarea
                id="ingredients"
                name="ingredients"
                placeholder="Ingredients"
                required={true}
                onChange={handleChange}
                value={form.ingredients}
                autoFocus= "on"
              />
            </td>
            <td>
              <label htmlFor="preparation"></label>
              <textarea
                id="preparation"
                name="preparation"
                placeholder="preparation"
                required={true}
                onChange={handleChange}
                value={form.preparation}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;