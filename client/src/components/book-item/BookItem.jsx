import { Link } from "react-router";
import './book-item.css'


export default function BookItem({
    _id,
    title,
    author,
    imageUrl,

}) {
    return(
        <div className="services_section_2">
        <div className="row">
           <div className="col-lg-4 col-sm-12 col-md-4">
              <div className="box_main_books active">
                 <div className="book-img">
                    <img src={imageUrl} className="image_1"/>
                    <img src={imageUrl} className="image_2"/>
                 </div>
                 <h3 className="decorate_text">{title}</h3>
                 <p className="tation_text">{author}</p>
                 <div className="readmore_bt"><Link to={`/books/${_id}/details`}>Read More</Link></div>
              </div>
           </div>
           
        </div>
     </div>
    )
}