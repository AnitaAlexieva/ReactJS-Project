import RecipeItem from "./recipes-item/RecipeItem"
import { useAllRecipes } from "../../api/recipeApi"
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router";

export default function Recipes() {
   const { email } = useAuth();
   const { recipes } = useAllRecipes();

   return (
      <div className="services_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <h1 className="services_taital">Recipes</h1>
                  <p className="services_text">Typesetting industry lorem Ipsum is simply dummy text of the </p>
               </div>
               {email && (
                  <li>
                     <Link className="add-recipe" to="/recipe/create">Add your recipe!</Link>
                  </li>
               )}
            </div>
            <div className="recipes-container">
               {recipes.length > 0 ? (
                  recipes.map(recipe => <RecipeItem key={recipe._id} {...recipe} />)
               ) : (
                  <div className="no-recipes">
                     <p className="services_text">
                        Our recipe collection is currently empty, but don’t worry! We are busy cooking up some
                        delicious inspirations for you. Soon, you’ll find a delightful variety of dishes to try,
                        from comforting classics to exciting new flavors. Stay tuned and get ready to embark on
                        a culinary adventure!
                     </p>
                  </div>
               )}
            </div>
         </div>
      </div>
   )
}