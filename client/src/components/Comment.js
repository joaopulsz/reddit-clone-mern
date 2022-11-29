import React from "react";

const Comment = ({comment}) => {

    return (
        <div className="comment">
            <p className="comment-author">{comment.user}</p>
            <p className="comment-body">{comment.body}</p>
            {/* add like count and like/dislike buttons */}
        </div>
    )
}

export default Comment;