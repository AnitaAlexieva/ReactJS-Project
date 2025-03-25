export default function CreateComment({
    email,
}) {
    const commentAction = (formData) =>{
        const comment = formData.get('comment');

        console.log(comment);
        console.log(email)
    }
    return (
        <form action={commentAction} className="comment-form">
            <textarea name='comment' placeholder="Write a comment..." />
            <button className="comment-button">Post Comment</button>
        </form>
    )
}