
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BeersList from './components/beers-list/BeersList';
import BeerDetail from './components/beer-detail/BeerDetail';

function App() {

  return (
    <>
    <main>
      <Routes>
        <Route path='/' element={<BeersList/>} />
        <Route path='/:id' element={<BeerDetail/>} />
      </Routes>
    </main>

      

    </>
  );
}

export default App;
