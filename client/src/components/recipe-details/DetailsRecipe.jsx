import {  useEffect, useState } from 'react';
import './details.css';
import { Link, useNavigate, useParams } from 'react-router';
import ShowComments from '../show-comments/ShowComments';
import CreateComment from '../create-comment/CreateComment';
import commentsService from '../../services/commentsService';
import { useDeleteRecipe, useOneRecipe } from '../../api/recipeApi';
import useAuth from '../../hooks/useAuth';

export default function RecipeDetails() {
  const navigate = useNavigate();
  const {username, _id:userId} = useAuth();

  const [comments, setComments] = useState([]);
  const {recipeId} = useParams();
 
  const recipe = useOneRecipe(recipeId);
  const {deleteRecipe} = useDeleteRecipe();
  
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
      await deleteRecipe(recipeId);
      navigate('/recipes')
  }

  const commentCreateHandler = (newComment) =>{
      setComments(state=>[...state, newComment])
  }

  const isOwner = userId === recipe._ownerId;
  let isUser= false;
  if(userId){
    isUser = true;
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


          <div className="comments-section">
          <ShowComments />

            
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

      
            {isUser && (
                <CreateComment 
                username={username} 
                recipeId={recipeId} 
                onCreate = {commentCreateHandler}
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
