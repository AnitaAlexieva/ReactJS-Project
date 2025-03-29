import { useEffect, useState } from "react";
import request from "../utils/request";
import useAuth from "../hooks/useAuth";

const baseUrl = 'http://localhost:3030/data/comments'


export const useCreateComments = () =>{
   const {request} = useAuth();

   const create =async (comment, email, recipeId) =>{
       await request.post(baseUrl, {comment, email, recipeId});
   }

   console.log(request)
   return {
    create
   }
}
