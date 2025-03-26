import { useContext, useEffect, useState } from "react";
import request from "../utils/request";
import { UserContext } from "../contexts/UserContext";


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
    const {accessToken} = useContext(UserContext);

    const options={
        headers:{
            'X-Authorization': accessToken,
        }
    }
    const create = (recipeData) =>
          request.post(baseUrl, recipeData, options);
    
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