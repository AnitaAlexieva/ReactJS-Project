export default function ShowComments() {
    return (
        <>
            <h3>Comments</h3>

            {/* Example Comments */}
            <div className="comment">
                <p><strong>JohnDoe:</strong> This recipe is amazing! My family loved it. 😍</p>
                <span className="comment-date">March 24, 2025</span>
            </div>

            <div className="comment">
                <p><strong>CookingQueen:</strong> Super easy to follow! Thank you. 🍝</p>
                <span className="comment-date">March 23, 2025</span>
            </div>
        
        </>
    )
}