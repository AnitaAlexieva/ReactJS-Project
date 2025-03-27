import {  useEffect, useState } from "react";
import request from "../utils/request";
import useAuth from "../hooks/useAuth";


const baseUrl = 'http://localhost:3030/data/recipess';

export default{
    async getAll(){
        const result = await request.get(baseUrl);

        const recipes = Object.values(result);

        return recipes;
    },
    create(recipeData) {
        return request.post(baseUrl, recipeData)
    },
    getOne(recipeId){
        return request.get(`${baseUrl}/${recipeId}`)
    },
    delete(recipeId){
        return request.delete(`${baseUrl}/${recipeId}`)
    },
    edit(recipeId, recipeData){
        return request.put(`${baseUrl}/${recipeId}`, {...recipeData, _id:recipeId} )
    }
}

export const useCreateRecipe = () =>{
    const {request} = useAuth();

    const create = (recipeData) =>
          request.post(baseUrl, recipeData);
    
    return{
        create,
    }
}

export const useAllRecipes = () =>{
    const [recipes, setRecipes] = useState([]);

    useEffect(() =>{
        request.get(baseUrl)
            .then(setRecipes)
    },[]);

    return{
        recipes
    }
}

export const useOneRecipe = (recipeId) =>{
    const [recipe, setRecipe] = useState({});

    useEffect(() =>{
        request.get(`${baseUrl}/${recipeId}`)
        .then(result => {
            // Ако `ingredients` е string, го конвертираме в масив
            const fixedRecipe = {
                ...result,
                ingredients: typeof result.ingredients === "string"
                    ? result.ingredients.split(",").map(i => i.trim())
                    : result.ingredients
            };
            setRecipe(fixedRecipe);
        })

    }, [recipeId])

    return recipe;
}

export const useEditRecipe = () =>{
    const {request} = useAuth();

    const edit = (recipeId, recipeData) =>{
        request.put(`${baseUrl}/${recipeId}`, {...recipeData, _id:recipeId});
    }
    return{
        edit,
    }
}

export const useDeleteRecipe = () =>{
    const {request} = useAuth();

    const deleteRecipe = (recipeId) =>
        request.delete(`${baseUrl}/${recipeId}`);
    return{
         deleteRecipe,
    }
}