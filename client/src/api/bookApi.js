import { useEffect, useState } from "react";
import request from "../utils/request";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify"; // Импортиране на toast

const baseUrl = 'http://localhost:3030/data/books';

export const useCreateBook = () => {
    const { request } = useAuth();

    const create = async (bookData) => {
        try {
            await request.post(baseUrl, bookData);
        } catch (error) {
            toast.error(error.message || "Failed to create the book.");
            console.error("Error creating book:", error);
        }
    };

    return {
        create,
    };
};

export const useAllBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await request.get(baseUrl);
                setBooks(response);
            } catch (error) {
                toast.error(error.message || "Failed to load books.");
                console.error("Error fetching books:", error);
            }
        };
        fetchBooks();
    }, []);

    return {
        books,
    };
};

export const useOneBook = (bookId) => {
    const [book, setBook] = useState({});

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await request.get(`${baseUrl}/${bookId}`);
                setBook(response);
            } catch (error) {
                toast.error(error.message || "Failed to load the book.");
                console.error("Error fetching book:", error);
            }
        };

        fetchBook();
    }, [bookId]);

    console.log(book);

    return book;
};

export const useEditBook = () => {
    const { request } = useAuth();

    const edit = async (bookId, bookData) => {
        try {
            await request.put(`${baseUrl}/${bookId}`, { ...bookData, _id: bookId });
        } catch (error) {
            toast.error(error.message || "Failed to edit the book.");
            console.error("Error editing book:", error);
        }
    };

    return {
        edit,
    };
};

export const useDeleteBook = () => {
    const { request } = useAuth();

    const deleteBook = async (bookId) => {
        try {
            await request.delete(`${baseUrl}/${bookId}`);
        } catch (error) {
            toast.error(error.message || "Failed to delete the book.");
            console.error("Error deleting book:", error);
        }
    };

    return {
        deleteBook,
    };
};
