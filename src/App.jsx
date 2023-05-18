import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={ <ItemListContainer/> } />
          <Route path='/categoria/:categoryId' element={ <ItemListContainer/>} />
          <Route path='/item/:idItem' element={ <ItemDetailContainer/> }/>
          <Route path='*' element={ <h1>404 NOT FOUND</h1> }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
