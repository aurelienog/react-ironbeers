
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import BeerDetail from './components/beer-detail/BeerDetail';
import BeersList from './components/beers-list/BeersList';

function App() {

  return (
    <>
    <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/beers' element={<BeersList/>}/>
        <Route path='/:id' element={<BeerDetail/>} />
      </Routes>
    </main>

      

    </>
  );
}

export default App;
