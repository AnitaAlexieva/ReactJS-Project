import { Link } from "react-router";
import { useAllBooks } from "../../api/bookApi";
import useAuth from "../../hooks/useAuth";
import BookItem from "../book-item/BookItem";
import './book.css'

export default function Books() {

   const { books } = useAllBooks();
   const { email } = useAuth();

   return (
      <div className="book_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <h1 className="services_taital books">Books</h1>
                  <p className="services_text books">Typesetting industry lorem Ipsum is simply dummy text of the </p>
                  {email && (
                     <li>
                        <Link className="add-book" to="/books/create">Add your book!</Link>
                     </li>
                  )}
               </div>
            </div>
            <div className="books-container">
               {books.length > 0 ? (
                  books.map(book => <BookItem key={book._id} {...book} />)
               ) : (
                  <div className="no-recipes">
                     <p className="services_text">
                        Our book collection is currently empty, but don’t worry! We are busy cooking up some
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