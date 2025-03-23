import { request } from "../utils/requester";

const baseUrl = 'http://localhost:3030/jsonstore/recipes';

export default{
    getAll(){
        return request('GET', baseUrl);
    },
    create(recipeData) {
        return request('POST', baseUrl, recipeData)
    }
}