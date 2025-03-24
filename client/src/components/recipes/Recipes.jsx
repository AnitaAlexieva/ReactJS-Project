import { useEffect, useState } from "react"
import recipeServices from "../../services/recipeServices"
import RecipeItem from "./recipes-item/RecipeItem"

export default function Recipes() {

   const [recipes, setRecipes] = useState([])

   useEffect(() =>{
      recipeServices.getAll()
         .then(result =>{
            setRecipes(result)
         })
   },[])

   console.log(recipes)
   
    return(
       <div className="services_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <h1 className="services_taital">Recipes</h1>
                  <p className="services_text">Typesetting industry lorem Ipsum is simply dummy text of the </p>
               </div>
            </div>
            <div className="recipes-container">

            {recipes.map(recipe => <RecipeItem key={recipe._id} {...recipe}/>)}
            </div>
         </div>
      </div>
    )
}