export default function CreateComment() {
    return (
        <div className="comment-form">
            <textarea placeholder="Write a comment..." />
            <button className="comment-button">Post Comment</button>
        </div>
    )
}