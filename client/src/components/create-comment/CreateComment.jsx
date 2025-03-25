import commentsService from "../../services/commentsService";

export default function CreateComment({
    email,
    recipeId,
    onCreate
}) {
    const commentAction = async(formData) =>{
        const comment = formData.get('comment');

        const createdComment = await commentsService.create(email, recipeId, comment);
        onCreate(createdComment);
    }
    return (
        <form action={commentAction} className="comment-form">
            <textarea name='comment' placeholder="Write a comment..." />
            <button className="comment-button">Post Comment</button>
        </form>
    )
}