import './create.css';
import { useNavigate } from 'react-router';
import { useCreateRecipe } from '../../api/recipeApi';
import { toast } from 'react-toastify'; // Импортиране на toast

export default function CreateRecipe() {
  const navigate = useNavigate();
  const { create } = useCreateRecipe();

  const submitAction = async (formData) => {
    const recipeData = Object.fromEntries(formData);

    try {
      await create(recipeData); // Опитваме се да създадем новата рецепта
      toast.success("Recipe created successfully!"); // Уведомяваме потребителя за успех
      navigate('/recipes'); // Пренасочваме към списъка с рецепти
    } catch (error) {
      toast.error(error.message || "Failed to create recipe."); // Уведомяваме за грешка, ако има такава
      console.error("Error creating recipe:", error);
    }
  };

  return (
    <section className="create">
      <div className="create-form">
        <h2>Create your own recipe</h2>
        <form action={submitAction}>
          <input type="text" name="name" placeholder="Recipe Name" required />
          <input type="text" name="category" placeholder="Category" required />
          <input type="text" name="time" placeholder="Total Time" required />
          <input type="text" name="imageUrl" placeholder="Image Url" required />
          <input type="text" name="ingredients" placeholder="Ingredients" required />
          <textarea name="preparation" placeholder="Way of preparation" rows="5"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}
