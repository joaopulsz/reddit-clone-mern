import React from 'react';
import { Link } from 'react-router-dom';

const ForumBanner = ({forum}) => {

    const route = `/${forum.title}`;

    return (
        <Link to={route}>
            <div className="forum-banner">
                <h2>{forum.title}</h2>
                <p>{forum.description}</p>
            </div>
        </Link>
    )
}

export default ForumBanner;