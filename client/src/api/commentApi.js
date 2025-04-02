import { useEffect, useState } from "react";
import request from "../utils/request";
import useAuth from "../hooks/useAuth";

const baseUrl = 'https://reactjs-project-am7g.onrender.com/data/comments'


export const useCreateComments = () => {
  const { request } = useAuth();

  const create = async (comment, username, recipeId) => {
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


    fetchComments();
  }, [recipeId]);

  return comments;
};