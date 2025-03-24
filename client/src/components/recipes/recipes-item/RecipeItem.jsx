import { Link } from "react-router";

export default function RecipeItem({
    _id,
    name,
    category,
    imageUrl,
}) {
    return(
        <div className="services_section_2">
        <div className="row">
           <div className="col-lg-4 col-sm-12 col-md-4">
              <div className="box_main active">
                 <div className="house_icon">
                    <img src={imageUrl} className="image_1"/>
                    <img src={imageUrl} className="image_2"/>
                 </div>
                 <h3 className="decorate_text">{name}</h3>
                 <p className="tation_text">{category}</p>
                 <div className="readmore_bt"><Link to={`/recipes/${_id}/details`}>Read More</Link></div>
              </div>
           </div>
           
        </div>
     </div>
    )
}