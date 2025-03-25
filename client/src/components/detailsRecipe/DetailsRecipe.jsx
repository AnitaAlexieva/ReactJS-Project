import { useEffect, useState } from 'react';
import './details.css';
import { Link, useNavigate, useParams } from 'react-router';
import recipeServices from '../../services/recipeServices';

export default function RecipeDetails() {
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
    ingredients :[],
  });
  const {recipeId} = useParams();

  useEffect(() => {
    (async () => {
      const result = await recipeServices.getOne(recipeId);
  
      const fixedResult = {
        ...result,
        ingredients: typeof result.ingredients === "string"
          ? result.ingredients.split(",").map(item => item.trim()) 
          : result.ingredients
      };
  
      setRecipe(fixedResult);
    })();
  }, [recipeId]);

  const gameDeleteClickHandler = async() =>{
      const hasConfirm = confirm(`Are you sure you want to delete ${recipe.title}?`);

      if(!hasConfirm){
        return;
      }
      await recipeServices.delete(recipeId);
      navigate('/recipes')
  }

  return (
    <section className="recipe-details">
      <div className="details-container">
        <div className="left-side">
          <h1>{recipe.name}</h1>
          <p className="category"><strong>Category:</strong> {recipe.category}</p>
          <p className="time"><strong>Preparation Time:</strong> {recipe.time}</p>

          <h3>Preparation</h3>
          <p className="preparation">{recipe.preparation}</p>


            {/* Comments Section */}
            <div className="comments-section">
            <h3>Comments</h3>

            {/* Example Comments */}
            <div className="comment">
              <p><strong>JohnDoe:</strong> This recipe is amazing! My family loved it. 😍</p>
              <span className="comment-date">March 24, 2025</span>
            </div>

            <div className="comment">
              <p><strong>CookingQueen:</strong> Super easy to follow! Thank you. 🍝</p>
              <span className="comment-date">March 23, 2025</span>
            </div>

            {/* Comment Form */}
            <div className="comment-form">
              <textarea placeholder="Write a comment..." />
              <button className="comment-button">Post Comment</button>
            </div>

            <div className="action-buttons">
            <Link to={`/recipes/${recipeId}/edit`} className="edit-button">Edit</Link>
            <button 
                onClick={gameDeleteClickHandler}
                className="delete-button"
                >
                  Delete
                </button>
          </div>
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
