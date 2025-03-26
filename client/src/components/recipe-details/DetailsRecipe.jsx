import { useContext, useEffect, useState } from 'react';
import './details.css';
import { Link, useNavigate, useParams } from 'react-router';
import recipeServices from '../../services/recipeServices';
import ShowComments from '../show-comments/ShowComments';
import CreateComment from '../create-comment/CreateComment';
import commentsService from '../../services/commentsService';
import { UserContext } from '../../contexts/UserContext';
import { useOneRecipe } from '../../api/recipeApi';

export default function RecipeDetails() {
  const navigate = useNavigate();
  const {email} = useContext(UserContext);

  const [comments, setComments] = useState([]);
  const {recipeId} = useParams();
 
  const recipe = useOneRecipe(recipeId);
  
  useEffect(() => {
    (async () => {
      if(!recipeId){
        return;
      }

      const allComments = await commentsService.getAll(recipeId)
      setComments(allComments);
    })();
  }, [recipeId]);

  const recipeDeleteClickHandler = async() =>{
      const hasConfirm = confirm(`Are you sure you want to delete ${recipe.title}?`);

      if(!hasConfirm){
        return;
      }
      await recipeServices.delete(recipeId);
      navigate('/recipes')
  }

  const commentCreateHandler = (newComment) =>{
      setComments(state=>[...state, newComment])
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
            <ShowComments  comments={comments}/>

            {/* Comment Form */}
            <CreateComment 
              email={email} 
              recipeId={recipeId} 
              onCreate = {commentCreateHandler}
            />

            <div className="action-buttons">
            <Link to={`/recipes/${recipeId}/edit`} className="edit-button">Edit</Link>
            <button 
                onClick={recipeDeleteClickHandler}
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
