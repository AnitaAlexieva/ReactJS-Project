import { useEffect, useState } from "react";
import request from "../utils/request";
import useAuth from "../hooks/useAuth";


const baseUrl = 'https://reactjs-project-am7g.onrender.com/data/recipes';


export const useCreateRecipe = () => {
    const { request } = useAuth();

    const create = (recipeData) =>
        request.post(baseUrl, recipeData);

    return {
        create,
    }
}

export const useAllRecipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        request.get(baseUrl)
            .then(setRecipes)
    }, []);

    return {
        recipes
    }
}

export const useOneRecipe = (recipeId) => {
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        request.get(`${baseUrl}/${recipeId}`)
            .then(result => {

                const fixedRecipe = {
                    ...result,
                    ingredients: typeof result.ingredients === "string"
                        ? result.ingredients.split(",").map(i => i.trim())
                        : result.ingredients
                };
                setRecipe(fixedRecipe);
            })

    }, [recipeId])
    console.log(recipe)

    return recipe;
}

export const useEditRecipe = () => {
    const { request } = useAuth();

    const edit = async (recipeId, recipeData) => {
        await request.put(`${baseUrl}/${recipeId}`, { ...recipeData, _id: recipeId });
    }
    return {
        edit,
    }
}

export const useDeleteRecipe = () => {
    const { request } = useAuth();

    const deleteRecipe = (recipeId) =>
        request.delete(`${baseUrl}/${recipeId}`);
    return {
        deleteRecipe,
    }
}
export const useLatestRecipes = () => {
    const [latestRecipes, setLatestRecipes] = useState([]);


    useEffect(() => {
        const searchParams = new URLSearchParams({
            sortBy: '_createdOn desc',
            pageSize: 3,
        })

        request.get(`${baseUrl}?${searchParams.toString()}`)
            .then(setLatestRecipes)
    }, [])

    return { latestRecipes };
}