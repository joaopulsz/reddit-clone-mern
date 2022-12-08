import React from "react";
import PostBanner from "../components/PostBanner";

const SearchResultsContainer = ({searchResultsArray, setPost}) => {

    const results = searchResultsArray.map((post, index) => {
        return <PostBanner key={index} post={post} setPost={setPost} forum={post.forum.title} />        
    })

    return results
}

export default SearchResultsContainer;