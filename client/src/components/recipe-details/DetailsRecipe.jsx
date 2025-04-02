import { useEffect, useState } from 'react';
import './details.css';
import { Link, useNavigate, useParams } from 'react-router';
import ShowComments from '../show-comments/ShowComments';
import CreateComment from '../create-comment/CreateComment';
import { useDeleteRecipe, useOneRecipe } from '../../api/recipeApi';
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify';
import { useAllComments } from '../../api/commentApi';

export default function RecipeDetails() {
  const navigate = useNavigate();
  const { username, _id: userId } = useAuth();

  const { recipeId } = useParams();
  const comments = useAllComments(recipeId);

  const [localComments, setLocalComments] = useState(comments);

  const recipe = useOneRecipe(recipeId);
  const { deleteRecipe } = useDeleteRecipe();

  useEffect(() => {
    setLocalComments(comments); // Update local state whenever comments change
  }, [comments]);

  const recipeDeleteClickHandler = async () => {
    const hasConfirm = confirm(`Are you sure you want to delete ${recipe.name}?`);

    if (!hasConfirm) {
      return;
    }

    try {
      await deleteRecipe(recipeId); // Опитваме се да изтрием рецептата
      toast.success("Recipe deleted successfully!"); // Известие при успех
      navigate('/recipes');
    } catch (error) {
      toast.error("Failed to delete recipe."); // Известие при грешка
      console.error("Error deleting recipe:", error);
    }
  };

  const commentCreateHandler = (newComment) => {
    setLocalComments(state => [...state, newComment])
  }

  const isOwner = userId === recipe._ownerId;

  let isUser = false;
  if (userId) {
    isUser = true;
  }

  return (
    <section className="recipe-details">
      <div className="details-container">
        <div className="left-side">
          <h1 className="h1-details">{recipe.name}</h1>
          <p className="category"><strong>Category:</strong> {recipe.category}</p>
          <p className="time"><strong>Preparation Time:</strong> {recipe.time}</p>

          <h3>Preparation</h3>
          <p className="preparation">{recipe.preparation}</p>


          <div className="comments-section">
            <ShowComments comments={localComments} />


            {isOwner && (
              <div className="action-buttons">
                <Link to={`/recipes/${recipeId}/edit`} className="edit-button">Edit</Link>
                <button
                  onClick={recipeDeleteClickHandler}
                  className="delete-button"
                >
                  Delete
                </button>
              </div>
            )}


            {isUser && !isOwner && (
              <CreateComment
                username={username}
                recipeId={recipeId}
                onCreate={commentCreateHandler}
              />
            )}



          </div>
        </div>

        <div className="right-side">
          <img className="recipe-image" src={recipe.imageUrl} alt={recipe.name} />
          <h3>Ingredients</h3>
          <ul className="ingredients-container">
            {Array.isArray(recipe.ingredients) ? (
              recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))
            ) : (
              <p>No ingredients available</p>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
