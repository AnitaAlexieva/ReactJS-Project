import { useEffect, useState } from "react";
import request from "../utils/request";
import useAuth from "../hooks/useAuth";

const baseUrl = 'http://localhost:3030/data/comments'


export const useCreateComments = () =>{
   const {request} = useAuth();

   const create =async (comment, username, recipeId) =>{
    const newComment = await request.post(baseUrl, { comment, username, recipeId });
    return newComment;
   }

   return {
    create
   }
}

export const useAllComments = (recipeId) => {
    const [comments, setComments] = useState([]);
  
    useEffect(() => {
      const fetchComments = async () => {
        const searchParams = new URLSearchParams({
          where: `recipeId="${recipeId}"`,
        });
        const response = await request.get(`${baseUrl}?${searchParams.toString()}`);
        setComments(response);
      };
  
      // Зареждаме коментарите всеки път, когато recipeId се промени
      fetchComments();
    }, [recipeId]); // добавяме recipeId като зависимост
  
    return comments;
  };