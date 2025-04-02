import { useEditBook, useOneBook } from '../../api/bookApi';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';

export default function EditBook() {
  const navigate = useNavigate();
  const { bookId } = useParams();
  const book = useOneBook(bookId);
  const { edit } = useEditBook();

  if (!book || !book._ownerId) {
    return <p>Loading...</p>;
  }

  const formAction = async (formData) => {
    const bookData = Object.fromEntries(formData);

    try {
      await edit(bookId, bookData);
      toast.success("Book updated successfully!");
      navigate(`/books/${bookId}/details`);
    } catch (error) {
      toast.error(error.message || "Failed to update the book.");
      console.error("Error updating book:", error);
    }
  };

  return (
    <section className="create">
      <div className="create-form">
        <h2>Edit Book</h2>
        <form action={formAction}>
          <input
            type="text"
            name="title"
            defaultValue={book.title}
            placeholder="Book Title"
            required
          />
          <input
            type="text"
            name="author"
            defaultValue={book.author}
            placeholder="Author"
            required
          />
          <input
            type="text"
            name="genre"
            defaultValue={book.genre}
            placeholder="Cuisine Type"
            required
          />
          <input
            type="text"
            name="publicationYear"
            defaultValue={book.publicationYear}
            placeholder="Publication Year"
            required
          />
          <input
            type="number"
            name="price"
            defaultValue={book.price}
            placeholder="Price"
            required
          />
          <input
            type="text"
            name="imageUrl"
            defaultValue={book.imageUrl}
            placeholder="Cover Image URL"
            required
          />
          <textarea
            name="description"
            defaultValue={book.description}
            placeholder="Book Description"
            rows="5"
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}
