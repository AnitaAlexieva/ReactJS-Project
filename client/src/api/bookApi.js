import {  useEffect, useState } from "react";
import request from "../utils/request";
import useAuth from "../hooks/useAuth";


const baseUrl = 'http://localhost:3030/data/books';


export const useCreateBook = () =>{
    const {request} = useAuth();

    const create = (bookData) =>
          request.post(baseUrl, bookData);
    
    return{
        create,
    }
}

export const useAllBooks = () =>{
    const [books, setbooks] = useState([]);

    useEffect(() =>{
        request.get(baseUrl)
            .then(setbooks)
    },[]);

    return{
        books
    }
}

export const useOneBook = (bookId) =>{
    const [book, setBook] = useState({});
    
    useEffect(() =>{
        request.get(`${baseUrl}/${bookId}`)
        .then(setBook)

    }, [bookId])
    console.log(book)

    return book;
}

export const useEditBook = () =>{
    const {request} = useAuth();

    const edit = async (bookId, bookData) =>{
        await request.put(`${baseUrl}/${bookId}`, {...bookData, _id:bookId});
    }
    return{
        edit,
    }
}

export const useDeleteBook = () =>{
    const {request} = useAuth();

    const deleteBook = (bookId) =>
        request.delete(`${baseUrl}/${bookId}`);
    return{
         deleteBook,
    }
}
export const useLatestGames = () =>{
    const [latestbooks, setLatestbooks] = useState([]);

    
    useEffect(() =>{
        const searchParams = new URLSearchParams({
            sortBy: '_createdOn desc',
            pageSize: 3,
        })

        request.get(`${baseUrl}?${searchParams.toString()}`)
            .then(setLatestbooks)
    },[])

    return{latestbooks};
}