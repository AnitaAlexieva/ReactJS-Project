import { useParams } from "react-router";
import { useCreateComments } from "../../api/commentApi";

export default function CreateComment({
    username,
    onCreate
}) {
    const { recipeId } = useParams();
    const { create } = useCreateComments(recipeId);

    const commentAction = async (formData) => {
        const comment = formData.get('comment');
        const createdComment = await create(comment, username, recipeId);
        onCreate(createdComment);
    }
    return (
        <form action={commentAction} className="comment-form">
            <textarea name='comment' placeholder="Write a comment..." />
            <button className="comment-button">Post Comment</button>
        </form>
    )
}