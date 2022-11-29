const Post = () => {

    return (
        <>
            <div className="post">
                <h3 className="post-title">{post.title}</h3>
                <p className="post-author">{post.user}</p>
                <p className="post-body">{post.body}</p> 
            </div>
            <div className="comments-container">
                {post.comments.map((comment, index) => {
                    return <Comment key={index} comment={comment}/>
                })}
            </div>
        </>
    )
}

export default Post;