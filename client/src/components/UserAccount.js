import React, { useEffect, useState } from "react";
import PostBanner from './PostBanner';

const UserAccount = ({ loggedInUser }) => {

    const [user, setUser] = useState({});

    //TODO:  fetch posts and comments by user and display them
    return (
        <div className="user-account-page">
            <h2>{loggedInUser.username}</h2>

            {/* <div id="user-posts">
                {user ? user.posts.map((post, index) => {
            return <PostBanner key={index} post={post} />
        }) : null}
            </div> */}

            <div id="user-comments"></div>
        </div>
    )
}

export default UserAccount;