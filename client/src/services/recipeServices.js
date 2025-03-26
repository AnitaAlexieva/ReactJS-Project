import request from "../utils/request";


const baseUrl = 'http://localhost:3030/jsonstore/recipes';

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