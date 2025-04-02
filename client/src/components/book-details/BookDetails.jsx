import './book-details.css';
import { Link, useNavigate, useParams } from 'react-router';
import { useDeleteBook, useOneBook } from '../../api/bookApi';
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify';

export default function BookDetails() {
  const navigate = useNavigate();
  const { _id: userId } = useAuth();
  const { bookId } = useParams();

  const book = useOneBook(bookId);
  const { deleteBook } = useDeleteBook();


  const bookDeleteClickHandler = async () => {
    const hasConfirm = confirm(`Are you sure you want to delete ${book.title}?`);

    if (!hasConfirm) {
      return;
    }

    try {
      await deleteBook(bookId);
      navigate('/books');
    } catch (error) {
      toast.error(error.message || "Failed to delete the book.");
      console.error("Error deleting book:", error);
    }
  };

  const isOwner = userId === book._ownerId;

  return (
    <section className="book-details">
      <div className="book-details-container">
        <div className="left-side">
          <h1 className="h1-details">{book.title}</h1>
          <p className="category"><strong>Category:</strong> {book.genre}</p>
          <p className="time"><strong>Author:</strong> {book.author}</p>

          <h3>Descripion</h3>
          <p className="preparation">{book.description}</p>

          {isOwner && (
            <div className="action-buttons">
              <Link to={`/books/${bookId}/edit`} className="edit-button">Edit</Link>
              <button
                onClick={bookDeleteClickHandler}
                className="delete-button"
              >
                Delete
              </button>
            </div>
          )}
        </div>

        <div className="right-side">
          <img className="book-image" src={book.imageUrl} alt={book.title} />
          <p className="publication-year"><strong>Publication Year:</strong> {book.publicationYear}</p>
          <p className="price"><strong>Price: </strong> {book.price}$</p>
        </div>
      </div>
    </section>
  );
}
