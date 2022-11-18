const ForumBanner = ({forum}) => {

    return (
        <div className="forum-banner">
            <h2>{forum.title}</h2>
            <p>{forum.description}</p>
        </div>
    )
}

export default ForumBanner;