import { Link } from "react-router";

export default function About() {
   return (
      <div className="about_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-md-6">
                  <div className="about_taital_main">
                     <div className="about_taital">About Us</div>
                     <p className="about_text">Full cleaning and housekeeping services for companies and households.</p>
                     <p className="about_text">Welcome to Taste Book – your ultimate destination for culinary creativity and inspiration! Whether you’re a novice in the kitchen or a seasoned chef, we’ve got something for everyone.

                        Our mission is simple: to bring people together through the joy of cooking. Here, you can explore a vast collection of mouthwatering recipes, create your own personalized recipe books, and discover new meals that match your taste. </p>
                     <div className="read_bt"><Link to="/recipes">Our recipes</Link></div>
                  </div>
               </div>
               <div className="col-md-6">
                  <div className="about_img"><img className="abt-img" src="/images/about.jpg" /></div>
               </div>
            </div>
         </div>
      </div>
   )
}