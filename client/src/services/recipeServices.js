import request from "../utils/request";


const baseUrl = 'http://localhost:3030/jsonstore/recipes';

export default{
    getAll(){
        return request.post(baseUrl)
    },
    create(recipeData) {
        return request.post(baseUrl, recipeData)
    }
}