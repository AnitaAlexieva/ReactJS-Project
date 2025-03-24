import { useNavigate, useParams } from 'react-router'
import './edit.css'
import { useEffect, useState } from 'react';
import recipeServices from '../../services/recipeServices';

export default function EditRecipe() {
  const navigate = useNavigate();
  const {recipeId} = useParams();
  const [ recipe, setRecipe] = useState({});

  useEffect(() =>{
        recipeServices.getOne(recipeId)
            .then(setRecipe)
  },[recipeId])

  const formAction = async (formData) =>{
    const recipeData = Object.fromEntries(formData);

    await recipeServices.edit(recipeId, recipeData);

    navigate(`/recipes/${recipeId}/details`)
  }
    return(
        <section className="create">
        <div className="create-form">
          <h2>Edit your recipe</h2>
          <form action={formAction}>
            <input type="text" name="name" placeholder="Recipe Name" defaultValue={recipe.name} required/>
            <input type="text" name="category" placeholder="Category" defaultValue={recipe.category} required/>
            <input type="text" name="time" placeholder="Time"  defaultValue={recipe.time}required/>
            <input type="text" name="imageUrl" placeholder="Image Url" defaultValue={recipe.imageUrl} required/>
            <input type="text" name="ingredients" placeholder="Ingredients" defaultValue={recipe.ingredients} required/>
            <textarea name="preparation" placeholder="Way of preparetion"  defaultValue={recipe.preparation}rows="5"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    )
}