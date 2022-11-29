import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AppContainer from './containers/AppContainer'
import ForumContainer from './containers/ForumContainer';
import Footer from './components/Footer';

function App() {

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
      <BrowserRouter>
        <Header/>
                    
        <Routes>
          <Route path="/" element={<AppContainer forums={forums}/>}/>

          {forums.map((forum, index) => {
                return <Route key={index} path={`/${forum.title}`} element={<ForumContainer forum={forum}/>}/>         
            })}   
        </Routes>

        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
