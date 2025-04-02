import { Navigate, useNavigate, useParams } from 'react-router'
import './edit.css'
import { useEditRecipe, useOneRecipe } from '../../api/recipeApi';
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify';

export default function EditRecipe() {
  const { userId } = useAuth();
  const navigate = useNavigate();
  const { recipeId } = useParams();
  const recipe = useOneRecipe(recipeId);
  const { edit } = useEditRecipe();

  if (!recipe || !recipe._ownerId) {
    return <p>Loading...</p>;
  }

  const formAction = async (formData) => {
    const recipeData = Object.fromEntries(formData);

    try {
      await edit(recipeId, recipeData);
      toast.success('Recipe updated successfully!');
      navigate(`/recipes/${recipeId}/details`);
    } catch (err) {
      toast.error(err.message || 'Failed to update recipe!');
    }
  }

  const isOwner = userId === recipe._ownerId;
  console.log(userId);
  console.log(recipe._ownerId)
  if (!isOwner) {
    return <Navigate to="/recipes" />
  }

  return (
    <section className="create">
      <div className="create-form">
        <h2>Edit your recipe</h2>
        <form action={formAction}>
          <input type="text" name="name" placeholder="Recipe Name" defaultValue={recipe.name} required />
          <input type="text" name="category" placeholder="Category" defaultValue={recipe.category} required />
          <input type="text" name="time" placeholder="Time" defaultValue={recipe.time} required />
          <input type="text" name="imageUrl" placeholder="Image Url" defaultValue={recipe.imageUrl} required />
          <input type="text" name="ingredients" placeholder="Ingredients" defaultValue={recipe.ingredients} required />
          <textarea name="preparation" placeholder="Way of preparetion" defaultValue={recipe.preparation} rows="5"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  )
}