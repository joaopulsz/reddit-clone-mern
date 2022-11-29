import React from "react";
import ForumBanner from "../components/ForumBanner";

const AppContainer = ({forums}) => {

    return (
        <>
            {forums.map((forum, index) => {
                return <ForumBanner key={index} forum={forum}/>
            })}
        </>
    )
}

export default AppContainer;