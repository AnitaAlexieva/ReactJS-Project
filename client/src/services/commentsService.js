import request from "../utils/request";

const baseUrl = 'http://localhost:3030/data/comments'

export default{
    async getAll(recipeId){
        const comments = await request.get(baseUrl)

        //TODO: filter when migrate to collections
        // Client filtering(dont do this)
        const recipeComments = Object.values(comments).filter(comment => comment.recipeId === recipeId)

        return recipeComments;
    },
    create(email,recipeId, comment){
        return request.post(baseUrl, {email,recipeId, comment})
    }
};