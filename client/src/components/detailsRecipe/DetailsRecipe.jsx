import { useEffect, useState } from 'react';
import './details.css';
import { useParams } from 'react-router';
import recipeServices from '../../services/recipeServices';

export default function RecipeDetails() {
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


  return (
    <section className="recipe-details">
      <div className="details-container">
        <div className="left-side">
          <h1>{recipe.name}</h1>
          <p className="category"><strong>Category:</strong> {recipe.category}</p>
          <p className="time"><strong>Preparation Time:</strong> {recipe.time}</p>

          <h3>Preparation</h3>
          <p className="preparation">{recipe.preparation}</p>

          <a href="/" className="back-button">Back to Home</a>
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
