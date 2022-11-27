import { useEffect, useState } from 'react';
import ForumBanner from '../components/ForumBanner';

// displays all forum banners

const AppContainer = () => {

    const [forums, setForums] = useState([]);

    const fetchForums = async () => {
        const response = await fetch('http://localhost:4000/forums');
        const forumsData = await response.json();
        setForums(forumsData);
    }

    useEffect(() => {
        fetchForums();
    }, [])

    return (
        <>
            {forums.map((forum, index) => {
                return <ForumBanner key={index} forum={forum}/>
            })}
        </>
    )
}

export default AppContainer;