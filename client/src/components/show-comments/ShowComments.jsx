import { useParams } from "react-router";
import { useAllComments } from "../../api/commentApi"

export default function ShowComments() {
    const {recipeId} = useParams();
    const comments = useAllComments(recipeId);


    return (
        <>
            <h3>Comments</h3>

            <div className="comment">
                {comments.length > 0
                ? comments.map(({_id,email,comment}) => (
                    <li className="li-comment" key={_id}>
                        <p>{email} : <strong>{comment}</strong></p>
                    </li>
                ))
                :
                <p>There is <strong>no comments</strong></p>   
                }
            </div>

        </>
    )
}