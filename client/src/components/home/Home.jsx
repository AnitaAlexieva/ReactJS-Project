import { Link } from "react-router";
import { useLatestRecipes } from "../../api/recipeApi"

export default function Home() {

   const { latestRecipes } = useLatestRecipes();

   return (
      <>
         <div className="banner_section layout_padding">
            <div className="container">
               <div id="main_slider" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                     <div className="carousel-item active">
                        <div className="row">
                           <div className="col-sm-12">
                              <div className="banner_taital">
                                 <h1 className="outstanding_text">Outstanding</h1>
                                 <h1 className="coffee_text">Taste Book</h1>
                                 <p className="there_text">At Taste Book, we’re more than just a recipe site – we’re a community of food lovers, creators, and explorers. Let’s cook, create, and share the flavors of life together! </p>
                                 <div className="learnmore_bt"><Link to="/about">About Us</Link></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="gallery_section layout_padding">
            <div className="container">
               <div className="row">
                  <div className="col-sm-12">
                     <h1 className="gallery_taital">Our Latest Recipes</h1>
                     <p className="gallery_text">Lorem Ipsum is simply dummy text of printing typesetting ststry lorem Ipsum the industry'ndard dummy text ever since of the 1500s, when an unknown printer took a galley of type and scra make a type specimen book. It has</p>
                  </div>
               </div>
               <div className="">
                  <div className="gallery_section_2">
                     <div className="row">
                        {latestRecipes.map(recipe => (
                           <div className="col-md-4" key={recipe._id}>
                              <div className="container_main">
                                 <img src={recipe.imageUrl} alt="recipe" className="image" />
                                 <div className="overlay">
                                    <div className="text"><Link to={`/recipes/${recipe._id}/details`}><i className="fa fa-search" aria-hidden="true"></i></Link></div>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

               </div>
               <div className="seemore_bt"><Link to="/recipes">See More</Link></div>
            </div>
         </div>
      </>
   )
}