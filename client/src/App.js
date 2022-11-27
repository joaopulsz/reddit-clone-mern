import './App.css';
import Header from './components/Header';
import AppContainer from './containers/AppContainer';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header/>
      <main>
        <AppContainer/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
