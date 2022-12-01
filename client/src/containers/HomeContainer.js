import React from "react";
import ForumBanner from "../components/ForumBanner";

const HomeContainer = ({forums}) => {

    return (
        <>
            {forums.map((forum, index) => {
                return <ForumBanner key={index} forum={forum}/>
            })}
        </>
    )
}

export default HomeContainer;