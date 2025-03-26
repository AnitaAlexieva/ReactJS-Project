import './create.css'
import { useNavigate } from 'react-router';
import { useCreateRecipe } from '../../api/recipeApi';


export default function CreateRecipe() {
  const navigate = useNavigate();
  const {create} = useCreateRecipe();

  const submitAction = async(formData) =>{

    const recipeData = Object.fromEntries(formData);

    await create(recipeData);

    navigate('/recipes')
  }
    return(
        <section className="create">
        <div className="create-form">
          <h2>Create your own recipe</h2>
          <form action={submitAction}>
            <input type="text" name="name" placeholder="Recipe Name" required/>
            <input type="text" name="category" placeholder="Category" required/>
            <input type="text" name="time" placeholder="Total Time" required/>
            <input type="text" name="imageUrl" placeholder="Image Url" required/>
            <input type="text" name="ingredients" placeholder="Ingredients" required/>
            <textarea name="preparation" placeholder="Way of preparetion" rows="5"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    )
}