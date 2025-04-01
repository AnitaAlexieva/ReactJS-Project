import './create-book.css';
import { useNavigate } from 'react-router';
import { useCreateBook } from '../../api/bookApi';
import { toast } from 'react-toastify';

export default function CreateRecipeBook() {
  const navigate = useNavigate();
  const { create } = useCreateBook();

  // Submit action to handle form submission
  const submitAction = async (formData) => {
    const recipeBookData = Object.fromEntries(formData); // Преобразуваме FormData в обект

    try {
      await create(recipeBookData); // Изпращаме данните към API-то
      toast.success("Recipe book created successfully!"); // Успешно съобщение
      navigate('/books'); // Навигиране към списъка с книги
    } catch (err) {
      toast.error(err.message || "An error occurred while creating the book."); // Грешка при създаване
    }
  };

  return (
    <section className="create">
      <div className="create-form">
        <h2>Create a Recipe Book</h2>
        <form action={submitAction}>
          <input type="text" name="title" placeholder="Recipe Book Title" required />
          <input type="text" name="author" placeholder="Author" required />
          <input type="text" name="genre" placeholder="Cuisine Type" required />
          <input type="text" name="publicationYear" placeholder="Publication Year" required />
          <input type="number" name="price" placeholder="Price" required />
          <input type="text" name="imageUrl" placeholder="Cover Image URL" required />
          <textarea name="description" placeholder="Book Description" rows="5" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}
